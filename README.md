# Frostline AS — Transport Company Website

Modern, responsive bilingual website (English / Norwegian) for **Frostline AS**, a transport company in Northern Norway specialising in private transfers, partner logistics and seasonal tours.

## Quick Start

```bash
cp .env.example .env
npm install
npm run dev        # development with HMR
npm run build      # production build
npm start          # serve production build
```

## Tech Stack

| Layer     | Technology |
|-----------|------------|
| Frontend  | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui |
| Backend   | Express.js, TypeScript, Zod validation |
| Routing   | Wouter (client), Express Router (server) |
| State     | TanStack Query |
| i18n      | Custom context + JSON locale files (en / nb) |
| PWA       | Service worker, manifest, offline page |

## Project Structure

```
client/
  src/
    components/     # UI components (layout, home, common, ui)
    contexts/       # Language and theme providers
    i18n/           # Translation JSON files (en.json, nb.json)
    pages/          # Route pages
    lib/            # Utilities
  public/           # Static assets (icons, manifest, sw.js)
server/
  config/           # Environment validation (Zod)
  middleware/       # Error handler
  routes/           # API route modules
  index.ts          # Express entry point
  vite.ts           # Vite dev server integration
shared/
  schema.ts         # Shared types (Drizzle)
```

## Pages

| Path       | Description |
|------------|-------------|
| `/`        | Home — hero, services, benefits |
| `/services`| Detailed service offerings |
| `/about`   | Company story & certifications |
| `/partners`| B2B partnership info |
| `/contact` | Contact form & company details |
| `/routes`  | Fixed-price transfer routes & booking |
| `/terms`   | Terms of service |
| `/privacy` | Privacy policy |
| `/install` | PWA install instructions |

## API

| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | `/api/health` | Health check |

## Environment Variables

See `.env.example` for required variables.

## Domain

Production: [https://frostline.as](https://frostline.as)

## License

MIT
