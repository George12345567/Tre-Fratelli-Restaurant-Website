import { NextResponse } from 'next/server';
import { checkReservationRateLimit } from '@/lib/reservations/rateLimit';
import { validateReservationInput } from '@/lib/reservations/schema';
import { submitReservationRequest } from '@/lib/reservations/submitReservation';

export const runtime = 'nodejs';

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const limit = checkReservationRateLimit(clientIp);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, code: 'RATE_LIMITED' },
      {
        status: 429,
        headers: { 'Retry-After': String(limit.retryAfterSeconds) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: 'INVALID_JSON' }, { status: 400 });
  }

  const validation = validateReservationInput(body);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, code: validation.code }, { status: 400 });
  }

  if (validation.isHoneypotTriggered) {
    return NextResponse.json(
      { ok: true, referenceId: 'TF-RECEIVED', delivery: 'preview', guestCopySent: false },
      { status: 201 },
    );
  }

  try {
    const result = await submitReservationRequest(validation.data);

    if (result.status === 'unconfigured') {
      console.error('[reservation:unconfigured]', { missing: result.missing });
      return NextResponse.json(
        { ok: false, code: 'SERVICE_NOT_CONFIGURED' },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        referenceId: result.referenceId,
        delivery: result.delivery,
        guestCopySent: result.guestCopySent,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('[reservation:delivery-error]', {
      error: error instanceof Error ? error.message : 'Unexpected delivery failure',
    });
    return NextResponse.json({ ok: false, code: 'DELIVERY_FAILED' }, { status: 502 });
  }
}
