# Frostline AS - Transport Company Website

## Overview

Frostline AS is a modern, responsive bilingual website for a transport company based in Northern Norway, specializing in Arctic private transfers, partner logistics, and seasonal tours in the Tromsø region. The application is built with a React frontend and Express backend, featuring a clean Nordic minimalist design aesthetic inspired by Scandinavian travel companies.

The website serves two primary audiences:
1. **Private travelers** seeking airport transfers, hotel pickups, and sightseeing tours
2. **Business partners** (DMCs, travel agencies, hotels, tour operators) requiring reliable logistics services

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management
- **Tailwind CSS** with custom design system for styling
- **shadcn/ui** component library (New York style) for consistent UI elements

**Design System:**
- Custom color palette derived from hero image (Northern Lights): balanced blue-teal (#0c1e28), White (#ffffff), Dark Grey (#111111), Light Grey (#f4f4f4)
- Typography: Montserrat for headings (weights 300-700), Inter for body text and buttons (weights 300-600)
- Responsive mobile-first approach with Tailwind breakpoints
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24) for rhythm
- Custom hover and elevation effects for interactive elements
- Premium frosted glass effects for overlays and floating elements

**Internationalization:**
- Language context supporting English and Norwegian (Bokmål)
- Language switcher component with Globe icons from lucide-react (NO/EN language codes)
- Translation JSON files in `client/src/i18n/locales/` (en.json, nb.json)
- `useTranslation` hook in `client/src/i18n/useTranslation.ts` for accessing translations
- Slim `language-context.tsx` imports translations from JSON files
- localStorage persistence for language preference

**Theme System (Arctic Day/Night):**
- Light/Dark/System theme support via ThemeProvider (`theme-context.tsx`)
- **Arctic Day (Light)**: Clean whites and soft blues, subtle Arctic shadows
- **Arctic Night (Dark)**: Deep blue-teal night sky (#081620), Aurora Green accents (#00e892) used sparingly
- Theme toggle with dropdown menu (Light/Dark/System options) in both desktop and mobile navbar
- localStorage persistence with key "frostline-theme"
- System preference detection via `prefers-color-scheme` media query
- Smooth 280ms theme transitions using CSS custom properties and `theme-transitioning` class
- Meta theme-color updates for mobile browser chrome
- All components automatically adapt using CSS custom properties and dark mode classes

**Page Structure:**
- Home: Hero section with CTA buttons, service previews, benefits showcase, Arctic nature showcase with Northern Lights and tundra images
- Services: Detailed service offerings with feature cards, header showcasing Arctic coastal transport route
- About: Company story, team information, certifications, header featuring Norwegian Arctic mountain peaks
- Partners: B2B partnership benefits and collaboration details, header displaying Arctic fjord landscape
- Contact: Enhanced engaging design with gradient hero header, quick contact cards (4-card grid), large contact form with animations, and organized sidebar with company details, partnership CTA, and contact information
- Routes & Prices: Fixed-price minibus transfer pricing table (5 routes from Hammerfest), per-person pricing with min 5 passengers, integrated booking form with route selector, date picker, passenger count, and mailto submission to post@frostline.as
- 404: Custom not-found page

**Component Architecture (Feature-Based):**
- `components/layout/` — Navbar, Footer
- `components/common/` — ThemeToggle, LanguageSwitcher, PWAInstallPrompt, CookieConsent, ErrorBoundary, LoadingSpinner, PageMeta
- `components/home/` — Hero, ServiceCard
- `components/ui/` — shadcn/ui primitives (unchanged)
- Page components in `pages/` directory (PascalCase naming)
- Lazy loading via React.lazy() with Suspense fallback (LoadingSpinner)
- ErrorBoundary wraps the entire app for graceful error handling

**GDPR Cookie Consent:**
- Premium floating cookie popup with Arctic design aesthetic
- **Bilingual support**: Automatically displays in English or Norwegian based on language context
- Frosted glass effect (backdrop-blur-xl) with semi-transparent dark background
- localStorage-based persistence ("cookiesAccepted" key)
- Slide-up fade-in animation on first visit (500ms delay)
- Fade-out animation on accept/close (300ms transition)
- Responsive positioning (bottom-right corner, adjusts for mobile)
- Privacy Policy link integration
- Three interaction methods: Accept button, Close (X) button, Privacy Policy link
- All text (message, buttons, links) updates instantly when language changes
- Cookie acceptance persists across language switches and page navigation

### Backend Architecture

**Technology Stack:**
- **Express.js** for HTTP server
- **TypeScript** with ESM module format
- **Node.js** runtime environment

**Server Structure:**
- Modular backend with route registration pattern
- `server/config/env.ts` — Zod-validated environment configuration
- `server/middleware/error-handler.ts` — Centralized error handling middleware
- `server/routes/health.ts` — Health check endpoint (`GET /api/health`)
- Middleware for JSON parsing and request logging
- Development/production environment detection
- Custom request logging with timestamps and response capture

**API Endpoints:**
- `GET /api/health` — Returns `{ status, timestamp, uptime }`

**Development Features:**
- Vite integration in development mode with HMR
- Custom error overlay via Replit plugins
- Static file serving in production
- Request/response logging with truncation for readability
- ESLint + Prettier configured for code quality

**Storage Interface:**
- Abstract `IStorage` interface for flexible data persistence
- In-memory storage implementation (`MemStorage`) for development
- User CRUD operations (get, create, find by username)
- Ready for database integration (schema suggests PostgreSQL with Drizzle ORM)

### Build & Deployment

**Build Process:**
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- TypeScript compilation check via `tsc`
- Separate development and production scripts

**Configuration Files:**
- `vite.config.ts`: Frontend build configuration with path aliases
- `tsconfig.json`: TypeScript compiler options with path mappings
- `tailwind.config.ts`: Custom theme and color system
- `postcss.config.js`: CSS processing pipeline
- `components.json`: shadcn/ui configuration

### External Dependencies

**UI & Styling:**
- `@radix-ui/*` primitives for accessible components (22+ packages)
- `tailwindcss` and `autoprefixer` for styling
- `class-variance-authority` and `clsx` for conditional styling
- `lucide-react` for iconography

**State Management:**
- `@tanstack/react-query` for server state and caching
- `zod` for schema validation (via `drizzle-zod`)

**Database (Configured but not actively used):**
- `drizzle-orm` ORM for PostgreSQL
- `drizzle-kit` for migrations
- `@neondatabase/serverless` for Neon database connectivity
- Schema defined in `shared/schema.ts` with users table
- Migration output directory: `./migrations`

**Routing & Navigation:**
- `wouter` for lightweight routing
- `react-router-dom` concepts without the bulk

**Development Tools:**
- Replit-specific plugins for development experience
- `tsx` for TypeScript execution in development
- `esbuild` for server bundling

**Utilities:**
- `nanoid` for ID generation

### Asset Management

**Static Assets:**
- Images stored in `attached_assets/` directory
- Generated images for services, icons, and backgrounds
- Company logo: `Color logo - no background_1763624644274.png`
- Vite alias `@assets` for asset imports

**Image Assets:**
- Hero background: User-provided Northern Lights photo (IMG_9188_1763628868230.jpeg) - stunning aurora over Norwegian fjord and snow-covered mountains
- Service icons: Transfer, partner logistics, tours, minibus rental
- Page headers: Arctic coastal transport route (Services), Norwegian Arctic mountain peaks (About), Arctic fjord (Partners)
- Nature showcase: Northern Lights over Arctic mountains, Arctic tundra with autumn colors
- Partnership and about page visuals

### Progressive Web App (PWA)

**PWA Infrastructure:**
- `public/manifest.json` - Web app manifest with full metadata
- `public/sw.js` - Service worker with Workbox-style caching
- `public/offline.html` - Offline fallback page with Arctic branding
- `public/icons/` - PWA icons (192x192, 256x256, 384x384, 512x512)

**Manifest Configuration:**
- Name: "Frostline AS", Short name: "Frostline"
- Theme/background color: #0e1a27 (Arctic navy)
- Display: standalone, Orientation: portrait
- Categories: travel, transportation
- App shortcuts for Contact and Services pages

**Service Worker Caching Strategies:**
- Cache-first for Google Fonts (1-year expiration)
- Cache-first for images (30-day expiration, 60 max entries)
- Network-first for API calls (24-hour expiration, 100 max entries)
- Stale-while-revalidate for static assets
- Offline navigation fallback to /offline.html

**PWA Install Prompt:**
- `PWAInstallPrompt.tsx` component with Arctic design
- Detects `beforeinstallprompt` event for Android/Chrome
- iOS-specific instructions for Add to Home Screen
- Bilingual support (EN/NO)
- 7-day dismissal persistence in localStorage

**Apple Meta Tags:**
- `apple-mobile-web-app-capable: yes`
- `apple-mobile-web-app-status-bar-style: black-translucent`
- Apple touch icons and splash screen links

**Development Mode:**
- Service worker only registers in production (`import.meta.env.PROD`)
- Development logs "[PWA] Service Worker disabled in development mode"

### Premium Visual Polish (Apple-Grade Enhancements)

**Typography System:**
- Fluid font sizing using CSS clamp() for seamless scaling across all viewports
- Optimized letter-spacing: -0.03em for h1, -0.025em for h2, -0.02em for h3
- Enhanced line-heights: 1.08 for h1, 1.12 for h2, 1.2 for h3
- text-wrap: balance for improved heading composition
- font-feature-settings for premium text rendering

**Arctic Motion System:**
- Custom CSS properties: --ease-apple (0.22, 1, 0.36, 1), --duration-normal (280ms)
- GPU-optimized animations using translate3d and scale3d
- Staggered fade-up animations with delay classes
- All animations respect prefers-reduced-motion

**Premium Hover Effects:**
- .arctic-hover-card: Subtle translateY(-2px) and scale(1.008)
- .arctic-image-hover: Premium image card interactions
- All effects use 280ms duration with Apple easing curves

**Arctic Gradient System:**
- .arctic-section-gradient-light/dark: Multi-stop section backgrounds
- .arctic-hero-gradient: Premium hero overlay
- .arctic-accent-gradient: CTA section background

**Spacing System:**
- .section-padding: 48px/64px/80px responsive rhythm
- Consistent padding at sm/lg/xl breakpoints
- Unified 48/64/80px section heights

**Glassmorphism Effects:**
- .arctic-glass: backdrop-blur-xl with saturation boost
- Inner shadows for depth perception
- Enhanced navbar with backdrop-blur-2xl and saturate(1.6)

**Shadow System:**
- .arctic-shadow-sm/lg/xl using rgba(14, 42, 71, 0.04-0.10)
- Natural cold-tone shadows matching Arctic theme
- Dark mode variants for consistent depth perception

**Accessibility:**
- Full prefers-reduced-motion support
- prefers-contrast: high support
- Safe-area-inset support for notched devices
- 44px minimum touch targets

### Design Philosophy

The application follows a reference-based design approach inspired by Nordic minimalism, similar to Scandinavian airline and Arctic travel company websites. Key principles include:

- Generous whitespace for breathing room
- High-quality photography with dark overlays for text readability
- Clean typography hierarchy with fluid responsive sizing
- Subtle shadows and elevation effects using Arctic-blue tones
- Professional aesthetic suitable for B2B partnerships
- Mobile-first responsive design
- PWA-ready for app-like mobile experience
- Apple-grade premium polish with GPU-optimized animations