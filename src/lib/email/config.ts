import type {
  EmailAddress,
  EmailProviderCredentials,
  EmailProviderId,
  ReservationDeliveryConfig,
  ZeptoMailRegion,
} from './types';

const SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_ZEPTOMAIL_REGIONS = new Set<ZeptoMailRegion>([
  'eu',
  'com',
  'in',
  'com.au',
  'jp',
  'ca',
  'sa',
  'uk',
]);

function readEnv(name: string): string {
  return process.env[name]?.replace(/[\r\n]+/g, ' ').trim() ?? '';
}

function parseAddressList(raw: string, fallbackName: string): EmailAddress[] {
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter((entry) => SIMPLE_EMAIL_REGEX.test(entry))
    .map((email) => ({ email, name: fallbackName }));
}

function resolveZeptoRegion(): ZeptoMailRegion {
  const raw = readEnv('ZOHO_ZEPTOMAIL_REGION').toLowerCase() as ZeptoMailRegion;
  return VALID_ZEPTOMAIL_REGIONS.has(raw) ? raw : 'eu';
}

function resolveSmtpCredentials(): {
  credentials: EmailProviderCredentials | null;
  missing: string[];
} {
  const user = readEnv('SMTP_USER');
  const pass = process.env.SMTP_PASS ?? '';
  const missing: string[] = [];
  if (!user) missing.push('SMTP_USER');
  if (!pass) missing.push('SMTP_PASS');

  if (missing.length > 0) {
    return { credentials: null, missing };
  }

  const rawHost = readEnv('SMTP_HOST') || 'smtp.zoho.com';
  const host = rawHost.replace(/\s+/g, '');
  const parsedPort = Number.parseInt(readEnv('SMTP_PORT') || '465', 10);
  const port =
    Number.isInteger(parsedPort) && parsedPort >= 1 && parsedPort <= 65535 ? parsedPort : 465;

  const rawSecure = readEnv('SMTP_SECURE').toLowerCase();
  const secure = rawSecure ? rawSecure === 'true' : port === 465;

  return {
    credentials: {
      provider: 'smtp',
      host,
      port,
      secure,
      user,
      pass,
    },
    missing: [],
  };
}

function resolveProviderCredentials(): {
  credentials: EmailProviderCredentials | null;
  missing: string[];
} {
  const explicitProvider = readEnv('EMAIL_PROVIDER').toLowerCase() as EmailProviderId | '';
  const smtpUser = readEnv('SMTP_USER');
  const smtpPass = process.env.SMTP_PASS ?? '';
  const resendKey = readEnv('RESEND_API_KEY');
  const zeptoToken = readEnv('ZOHO_ZEPTOMAIL_TOKEN');
  const brevoKey = readEnv('BREVO_API_KEY');

  if (explicitProvider === 'smtp') {
    return resolveSmtpCredentials();
  }
  if (explicitProvider === 'resend') {
    return resendKey
      ? { credentials: { provider: 'resend', apiKey: resendKey }, missing: [] }
      : { credentials: null, missing: ['RESEND_API_KEY'] };
  }
  if (explicitProvider === 'zeptomail') {
    return zeptoToken
      ? {
          credentials: {
            provider: 'zeptomail',
            token: zeptoToken,
            region: resolveZeptoRegion(),
          },
          missing: [],
        }
      : { credentials: null, missing: ['ZOHO_ZEPTOMAIL_TOKEN'] };
  }
  if (explicitProvider === 'brevo') {
    return brevoKey
      ? { credentials: { provider: 'brevo', apiKey: brevoKey }, missing: [] }
      : { credentials: null, missing: ['BREVO_API_KEY'] };
  }

  // Auto-detect when a single provider is configured without explicit EMAIL_PROVIDER.
  const candidates: EmailProviderCredentials[] = [];
  if (smtpUser && smtpPass) {
    const smtp = resolveSmtpCredentials();
    if (smtp.credentials) candidates.push(smtp.credentials);
  }
  if (resendKey) candidates.push({ provider: 'resend', apiKey: resendKey });
  if (zeptoToken) {
    candidates.push({
      provider: 'zeptomail',
      token: zeptoToken,
      region: resolveZeptoRegion(),
    });
  }
  if (brevoKey) candidates.push({ provider: 'brevo', apiKey: brevoKey });

  if (candidates.length === 1) {
    return { credentials: candidates[0], missing: [] };
  }

  if (candidates.length > 1) {
    return { credentials: null, missing: ['EMAIL_PROVIDER'] };
  }

  return {
    credentials: null,
    missing: [
      'EMAIL_PROVIDER',
      'SMTP_USER+SMTP_PASS | RESEND_API_KEY | ZOHO_ZEPTOMAIL_TOKEN | BREVO_API_KEY',
    ],
  };
}

/**
 * Resolves server-side reservation email delivery settings.
 * In local development (or when RESERVATION_DELIVERY_MODE=preview), missing keys fall back to preview logging.
 * In production, missing keys fail safely with 'unconfigured' so guests are directed to call instead of silent drops.
 */
export function getReservationDeliveryConfig(): ReservationDeliveryConfig {
  const deliveryMode = readEnv('RESERVATION_DELIVERY_MODE').toLowerCase();
  if (deliveryMode === 'preview') {
    return { mode: 'preview', reason: 'RESERVATION_DELIVERY_MODE=preview' };
  }

  const { credentials, missing: providerMissing } = resolveProviderCredentials();
  const smtpFallbackEmail =
    credentials?.provider === 'smtp' && SIMPLE_EMAIL_REGEX.test(credentials.user)
      ? credentials.user
      : '';

  const toName = readEnv('RESERVATION_TO_NAME') || 'Tre Fratelli Prenotazioni';
  const fromName = readEnv('RESERVATION_FROM_NAME') || 'Tre Fratelli Ristorante';

  const rawTo = readEnv('RESERVATION_TO_EMAIL') || smtpFallbackEmail;
  const to = parseAddressList(rawTo, toName);

  const fromEmail = readEnv('RESERVATION_FROM_EMAIL') || smtpFallbackEmail;
  const fromValid = SIMPLE_EMAIL_REGEX.test(fromEmail);

  const missing: string[] = [...providerMissing];
  if (to.length === 0) missing.push('RESERVATION_TO_EMAIL');
  if (!fromValid) missing.push('RESERVATION_FROM_EMAIL');

  if (credentials && to.length > 0 && fromValid) {
    const guestCopyEnv = readEnv('RESERVATION_SEND_GUEST_COPY').toLowerCase();
    const alertEnabled = readEnv('RESERVATION_ALERT_ENABLED').toLowerCase() !== 'false';
    const rawAlertEmail = readEnv('RESERVATION_ALERT_EMAIL') || fromEmail;
    const alertTo =
      alertEnabled && SIMPLE_EMAIL_REGEX.test(rawAlertEmail)
        ? { email: rawAlertEmail, name: 'Tre Fratelli System Alert' }
        : null;

    return {
      mode: 'email',
      credentials,
      to,
      from: { email: fromEmail, name: fromName },
      alertTo,
      sendGuestCopy: guestCopyEnv !== 'false',
    };
  }

  if (process.env.NODE_ENV !== 'production') {
    return {
      mode: 'preview',
      reason: `Development preview (missing: ${missing.join(', ')})`,
    };
  }

  return { mode: 'unconfigured', missing };
}
