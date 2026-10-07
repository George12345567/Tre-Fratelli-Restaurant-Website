# Tre Fratelli Restaurant Website

Phase 01 — lean technical foundation for a future visual restaurant site. The current page is an intentionally minimal proof surface and is designed to be replaced in Phase 02.

## Stack

- Next.js 16 App Router and React 19
- TypeScript strict mode
- Tailwind CSS v4
- Motion for React (small `motion/react-mini` island)
- next-intl with Italian default and English alternate
- `next/image` and `next/font`

## Development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Routes

- `/it` — Italian foundation route (default)
- `/en` — English foundation route
- `/` — redirects to `/it` through next-intl proxy

The public origin is intentionally unset until the restaurant domain is approved. Set `SITE_URL` before publishing so canonical metadata can use an absolute URL.
