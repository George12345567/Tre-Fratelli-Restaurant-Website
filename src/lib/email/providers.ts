import nodemailer from 'nodemailer';
import type {
  EmailAddress,
  EmailMessage,
  EmailProviderCredentials,
  EmailSendResult,
  ZeptoMailRegion,
} from './types';

const REQUEST_TIMEOUT_MS = 10_000;
const SMTP_SOCKET_TIMEOUT_MS = 15_000;

const ZEPTOMAIL_ENDPOINTS: Record<ZeptoMailRegion, string> = {
  eu: 'https://api.zeptomail.eu/v1.1/email',
  com: 'https://api.zeptomail.com/v1.1/email',
  in: 'https://api.zeptomail.in/v1.1/email',
  'com.au': 'https://api.zeptomail.com.au/v1.1/email',
  jp: 'https://api.zeptomail.jp/v1.1/email',
  ca: 'https://api.zeptomail.ca/v1.1/email',
  sa: 'https://api.zeptomail.sa/v1.1/email',
  uk: 'https://api.zeptomail.uk/v1.1/email',
};

function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function formatMailbox(address: EmailAddress): string {
  const cleanEmail = sanitizeHeaderValue(address.email);
  if (!address.name) return cleanEmail;
  const cleanName = sanitizeHeaderValue(address.name).replace(/["<>]/g, '');
  return cleanName ? `"${cleanName}" <${cleanEmail}>` : cleanEmail;
}

async function readErrorSummary(response: Response): Promise<string> {
  try {
    const text = await response.text();
    return text.slice(0, 300);
  } catch {
    return response.statusText || 'Unknown error';
  }
}

async function sendViaResend(apiKey: string, message: EmailMessage): Promise<EmailSendResult> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
  if (message.idempotencyKey) {
    headers['Idempotency-Key'] = sanitizeHeaderValue(message.idempotencyKey);
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    body: JSON.stringify({
      from: formatMailbox(message.from),
      to: message.to.map((recipient) => sanitizeHeaderValue(recipient.email)),
      ...(message.replyTo ? { reply_to: sanitizeHeaderValue(message.replyTo.email) } : {}),
      subject: sanitizeHeaderValue(message.subject),
      html: message.html,
      text: message.text,
    }),
  });

  if (!response.ok) {
    const detail = await readErrorSummary(response);
    throw new Error(`Resend API error (${response.status}): ${detail}`);
  }

  const data = (await response.json()) as { id?: string };
  return { provider: 'resend', messageId: data.id ?? 'sent' };
}

async function sendViaZeptoMail(
  token: string,
  region: ZeptoMailRegion,
  message: EmailMessage,
): Promise<EmailSendResult> {
  const endpoint = ZEPTOMAIL_ENDPOINTS[region];
  const authHeader = token.startsWith('Zoho-enczapikey ') ? token : `Zoho-enczapikey ${token}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authHeader,
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    body: JSON.stringify({
      from: {
        address: sanitizeHeaderValue(message.from.email),
        ...(message.from.name ? { name: sanitizeHeaderValue(message.from.name) } : {}),
      },
      to: message.to.map((recipient) => ({
        email_address: {
          address: sanitizeHeaderValue(recipient.email),
          ...(recipient.name ? { name: sanitizeHeaderValue(recipient.name) } : {}),
        },
      })),
      ...(message.replyTo
        ? {
            reply_to: [
              {
                address: sanitizeHeaderValue(message.replyTo.email),
                ...(message.replyTo.name
                  ? { name: sanitizeHeaderValue(message.replyTo.name) }
                  : {}),
              },
            ],
          }
        : {}),
      subject: sanitizeHeaderValue(message.subject),
      htmlbody: message.html,
      textbody: message.text,
    }),
  });

  if (!response.ok) {
    const detail = await readErrorSummary(response);
    throw new Error(`ZeptoMail API error (${response.status}): ${detail}`);
  }

  const data = (await response.json()) as {
    request_id?: string;
    data?: Array<{ message_id?: string }>;
  };
  const messageId = data.data?.[0]?.message_id ?? data.request_id ?? 'sent';
  return { provider: 'zeptomail', messageId };
}

async function sendViaBrevo(apiKey: string, message: EmailMessage): Promise<EmailSendResult> {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    body: JSON.stringify({
      sender: {
        email: sanitizeHeaderValue(message.from.email),
        ...(message.from.name ? { name: sanitizeHeaderValue(message.from.name) } : {}),
      },
      to: message.to.map((recipient) => ({
        email: sanitizeHeaderValue(recipient.email),
        ...(recipient.name ? { name: sanitizeHeaderValue(recipient.name) } : {}),
      })),
      ...(message.replyTo
        ? {
            replyTo: {
              email: sanitizeHeaderValue(message.replyTo.email),
              ...(message.replyTo.name
                ? { name: sanitizeHeaderValue(message.replyTo.name) }
                : {}),
            },
          }
        : {}),
      subject: sanitizeHeaderValue(message.subject),
      htmlContent: message.html,
      textContent: message.text,
    }),
  });

  if (!response.ok) {
    const detail = await readErrorSummary(response);
    throw new Error(`Brevo API error (${response.status}): ${detail}`);
  }

  const data = (await response.json()) as { messageId?: string };
  return { provider: 'brevo', messageId: data.messageId ?? 'sent' };
}

async function sendViaSmtp(
  creds: Extract<EmailProviderCredentials, { provider: 'smtp' }>,
  message: EmailMessage,
): Promise<EmailSendResult> {
  const transporter = nodemailer.createTransport({
    host: creds.host,
    port: creds.port,
    secure: creds.secure,
    auth: {
      user: creds.user,
      pass: creds.pass,
    },
    connectionTimeout: REQUEST_TIMEOUT_MS,
    greetingTimeout: REQUEST_TIMEOUT_MS,
    socketTimeout: SMTP_SOCKET_TIMEOUT_MS,
  });

  try {
    const info = await transporter.sendMail({
      from: formatMailbox(message.from),
      to: message.to.map((recipient) => formatMailbox(recipient)),
      ...(message.replyTo ? { replyTo: formatMailbox(message.replyTo) } : {}),
      subject: sanitizeHeaderValue(message.subject),
      html: message.html,
      text: message.text,
      ...(message.inlineImages && message.inlineImages.length > 0
        ? {
            attachments: message.inlineImages.map((img) => ({
              filename: img.filename,
              path: img.filePath,
              cid: img.cid,
              contentDisposition: 'inline' as const,
              contentType: img.contentType,
            })),
          }
        : {}),
    });
    return { provider: 'smtp', messageId: info.messageId || 'sent' };
  } finally {
    transporter.close();
  }
}

export async function sendTransactionalEmail(
  credentials: EmailProviderCredentials,
  message: EmailMessage,
): Promise<EmailSendResult> {
  switch (credentials.provider) {
    case 'smtp':
      return sendViaSmtp(credentials, message);
    case 'resend':
      return sendViaResend(credentials.apiKey, message);
    case 'zeptomail':
      return sendViaZeptoMail(credentials.token, credentials.region, message);
    case 'brevo':
      return sendViaBrevo(credentials.apiKey, message);
  }
}
