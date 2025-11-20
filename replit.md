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
- Custom color palette based on Nordic minimalism: Arctic Blue (#0e2a47), White (#ffffff), Dark Grey (#111111), Light Grey (#f4f4f4)
- Typography using Inter/Roboto sans-serif fonts
- Responsive mobile-first approach with Tailwind breakpoints
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24) for rhythm
- Custom hover and elevation effects for interactive elements

**Internationalization:**
- Language context supporting English and Norwegian (Bokmål)
- Language switcher component with Globe icons from lucide-react (NO/EN language codes)
- Centralized translation management in `language-context.tsx`
- localStorage persistence for language preference

**Page Structure:**
- Home: Hero section with CTA buttons, service previews, benefits showcase, Arctic nature showcase with Northern Lights and tundra images
- Services: Detailed service offerings with feature cards, header showcasing Arctic coastal transport route
- About: Company story, team information, certifications, header featuring Norwegian Arctic mountain peaks
- Partners: B2B partnership benefits and collaboration details, header displaying Arctic fjord landscape
- Contact: Contact form with validation and company information
- 404: Custom not-found page

**Component Architecture:**
- Reusable components: Navbar, Footer, Hero, ServiceCard, LanguageSwitcher
- UI components from shadcn/ui in `components/ui/`
- Page components in `pages/` directory
- Example components for development/testing in `components/examples/`

### Backend Architecture

**Technology Stack:**
- **Express.js** for HTTP server
- **TypeScript** with ESM module format
- **Node.js** runtime environment

**Server Structure:**
- Minimalist backend with route registration pattern
- Middleware for JSON parsing and request logging
- Development/production environment detection
- Custom request logging with timestamps and response capture

**Development Features:**
- Vite integration in development mode with HMR
- Custom error overlay via Replit plugins
- Static file serving in production
- Request/response logging with truncation for readability

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
- `react-hook-form` with `@hookform/resolvers` for form management
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
- `date-fns` for date manipulation
- `nanoid` for ID generation
- `cmdk` for command palette functionality

**Session Management (Available):**
- `express-session` configured
- `connect-pg-simple` for PostgreSQL session storage

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

### Design Philosophy

The application follows a reference-based design approach inspired by Nordic minimalism, similar to Scandinavian airline and Arctic travel company websites. Key principles include:

- Generous whitespace for breathing room
- High-quality photography with dark overlays for text readability
- Clean typography hierarchy
- Subtle shadows and elevation effects
- Professional aesthetic suitable for B2B partnerships
- Mobile-first responsive design