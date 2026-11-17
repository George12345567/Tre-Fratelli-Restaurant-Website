import type { ReservationInput } from './schema';

export type ReservationClientResponse =
  | { ok: true; referenceId: string }
  | { ok: false; code: string };

export async function postReservationRequest(
  payload: ReservationInput,
): Promise<ReservationClientResponse> {
  const response = await fetch('/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const body = (await response.json().catch(() => null)) as
    | { ok?: boolean; referenceId?: string; code?: string }
    | null;

  if (!response.ok || !body?.ok) {
    return { ok: false, code: body?.code ?? 'DELIVERY_FAILED' };
  }

  return { ok: true, referenceId: body.referenceId ?? '' };
}
