# AGENTS.md

Create React App (react-scripts 5.0.1) + React 18 + react-router-dom v6. Plain CSS — no TypeScript, no CSS framework. UI text and code comments are in Spanish; TMDB API is queried with `language=es`.

## Commands
- Use **pnpm** (pnpm-workspace.yaml + pnpm-lock.yaml are authoritative; the tracked `package-lock.json` is stale).
- `pnpm start` — dev server
- `pnpm build` — production build (outputs `build/`; Netlify deploys from this)
- `pnpm test` runs `react-scripts test` in **watch mode**. For a single non-interactive run: `CI=true pnpm test`

## Env
- Requires `.env` with `REACT_APP_API_THE_MOVIE_DATABASE_URL` and `REACT_APP_API_THE_MOVIE_DATABASE_KEY` (The Movie Database API key). `.env` is committed even though it's gitignored.
- CRA inlines `REACT_APP_*` at build time — new/edited env vars need a dev server restart.

## Architecture
- `src/router/AppRouter.js` registers every route; add new pages here.
- `src/services/endpointsApi.js` builds all TMDB URLs; add new API calls here.
- `src/hooks/useFetch.js` — the generic fetch hook, returns `{ movies, isFetching }`.
- `src/adapters/*` transform raw TMDB API responses into UI models consumed by `src/components/*` (presentational) and `src/pages/*` (route views).
- `public/_redirects` (`/* /index.html 200`) is required for Netlify SPA routing — don't remove.

## Gotchas
- `src/App.test.js` is the stale CRA scaffold test (expects "learn react" text) and currently fails; don't use it as a template.
- `React.StrictMode` is commented out in `src/index.js` — intentional, don't "fix" it.