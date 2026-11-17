interface BucketEntry {
  timestamps: number[];
}

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 6;
const MAX_BUCKETS = 2000;

const buckets = new Map<string, BucketEntry>();

export interface RateLimitDecision {
  allowed: boolean;
  retryAfterSeconds: number;
}

/**
 * Best-effort sliding-window IP limiter for warm server/serverless instances.
 * Prevents casual double-submissions and simple spam bursts without external state.
 */
export function checkReservationRateLimit(clientKey: string, now = Date.now()): RateLimitDecision {
  const cutoff = now - WINDOW_MS;
  const current = buckets.get(clientKey);
  const recent = current ? current.timestamps.filter((ts) => ts > cutoff) : [];

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = recent[0];
    const retryAfterSeconds = Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000));
    buckets.set(clientKey, { timestamps: recent });
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  buckets.set(clientKey, { timestamps: recent });

  if (buckets.size > MAX_BUCKETS) {
    for (const [key, entry] of buckets) {
      if (entry.timestamps.every((ts) => ts <= cutoff)) {
        buckets.delete(key);
      }
      if (buckets.size <= MAX_BUCKETS) break;
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}
