export type EmailProviderId = 'smtp' | 'resend' | 'zeptomail' | 'brevo';

export type ZeptoMailRegion = 'eu' | 'com' | 'in' | 'com.au' | 'jp' | 'ca' | 'sa' | 'uk';

export interface EmailAddress {
  email: string;
  name?: string;
}

export interface EmailInlineImage {
  cid: string;
  filePath: string;
  filename: string;
  contentType: string;
}

export interface EmailMessage {
  from: EmailAddress;
  to: EmailAddress[];
  replyTo?: EmailAddress;
  subject: string;
  html: string;
  text: string;
  idempotencyKey?: string;
  inlineImages?: EmailInlineImage[];
}

export interface EmailSendResult {
  provider: EmailProviderId;
  messageId: string;
}

export type EmailProviderCredentials =
  | {
      provider: 'smtp';
      host: string;
      port: number;
      secure: boolean;
      user: string;
      pass: string;
    }
  | { provider: 'resend'; apiKey: string }
  | { provider: 'zeptomail'; token: string; region: ZeptoMailRegion }
  | { provider: 'brevo'; apiKey: string };

export type ReservationDeliveryConfig =
  | {
      mode: 'email';
      credentials: EmailProviderCredentials;
      to: EmailAddress[];
      from: EmailAddress;
      alertTo: EmailAddress | null;
      sendGuestCopy: boolean;
    }
  | {
      mode: 'preview';
      reason: string;
    }
  | {
      mode: 'unconfigured';
      missing: string[];
    };
