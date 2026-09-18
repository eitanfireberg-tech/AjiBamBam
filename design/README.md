# Aji Bam Bam — artist portfolio site

Portfolio website for painter Maayan Fireberg, who works and posts as
[**@aji.bam.bam0**](https://www.instagram.com/aji.bam.bam0/) ("Aji Bam Bam") on Instagram.

Bilingual (Hebrew / English), built with TanStack Start (React) on Vite, styled
to read like a cinema/gallery experience: a Ken Burns hero, an Instagram Reels
"program", a hanging works gallery, and an inquiry form that hands off to
Instagram DM until a dedicated contact channel exists.

This design originated in a Grok App Builder session and is now developed and
maintained here.

## Stack

- **TanStack Start** (React, file-based routing under `src/routes/`)
- **Vite** for dev/build
- **Tailwind**-based styling (`src/styles.css`)
- Optional Postgres-backed auth scaffold under `src/lib/auth/` and
  `migrations/auth/` (not required for the current public site — no accounts
  are live)
- Deploy target: Vercel (`vite build`, see `vite.config.ts`)

## Project structure

- `src/routes/` — pages: home (`index.tsx`), works listing (`works.index.tsx`),
  work detail (`works.$slug.tsx`)
- `src/components/site/` — hero, header, footer, reels player, works gallery,
  about, inquiry form
- `src/lib/content.ts` — **single source of truth for all copy and artwork
  data** (bilingual `en`/`he` strings, the `works` array, the `reels` array).
  Add a new painting or reel here; the homepage and `/works` both read from
  the same arrays.
- `public/works/` — full-size painting images used by the `works` array
- `public/ig/` — Instagram reel posters and studio stills
- `artifacts/aji-concept/` — the original static HTML concept mockup (kept
  for reference; the live site is the React app under `src/`)
- `screenshots/` — reference screenshots of the design at various stages

## Content policy

Per `src/lib/content.ts` / the About section: every image and caption on this
site should trace back to the real `@aji.bam.bam0` Instagram feed — nothing
invented. When adding a new work, prefer linking its real Instagram permalink;
if the specific post isn't known, link the profile (`INSTAGRAM_URL`) rather
than guessing a URL.

## Development

```bash
npm install
npm run dev        # http://localhost:8080
npm run typecheck
npm run lint
npm run test
npm run build       # vite build + db:migrate
```

## Notes

- `startup.sh` and `scripts/with-app-env.mjs` originated in the Grok App
  Builder sandbox (`/workspace`-relative paths); local dev should use
  `npm run dev` directly.
- Auth/db scaffolding exists but is not wired into the public pages — see
  `src/lib/auth/` before enabling it, and keep any future user-owned data
  scoped per `AGENTS.md`'s original data/auth rules if you revive that file
  for reference.
