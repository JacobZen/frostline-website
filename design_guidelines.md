# Frostline AS Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Nordic minimalist design principles (similar to Scandinavian airline websites, Arctic travel companies). Clean, professional aesthetic that conveys trust, reliability, and Arctic authenticity.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Roboto (clean, modern sans-serif)
- **Hierarchy**:
  - Hero Headlines: 3xl-4xl (48-56px), font-semibold
  - Page Titles: 2xl-3xl (32-40px), font-semibold
  - Section Headers: xl-2xl (24-32px), font-medium
  - Body Text: base-lg (16-18px), font-normal
  - Small Text: sm (14px) for captions/metadata

### Color Palette
- **White**: #ffffff (primary background, clean space)
- **Arctic Blue**: #0e2a47 (primary brand color, headers, CTAs)
- **Dark Grey**: #111111 (text, strong accents)
- **Light Grey**: #f4f4f4 (section backgrounds, subtle contrast)
- **Subtle Gradients**: Blue-to-dark transitions for hero overlays

### Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Container max-width: max-w-6xl
- Content spacing: gap-8 to gap-12 between elements
- Generous whitespace for Nordic minimalism

### Component Library

**Navigation**:
- Clean horizontal navigation with logo left, links right
- Mobile: Hamburger menu with full-screen overlay
- Sticky on scroll with subtle shadow
- Links: Home, Services, About Us, Partners, Contact

**Hero Section (Home)**:
- Full-viewport height (90vh) with large background image (Arctic landscape: fjords, mountains, or Northern Lights)
- Dark overlay (opacity 50-60%) for text readability
- Centered content with large headline and description
- Two prominent CTAs: "Book Transfer" (primary) and "Become Partner" (secondary)
- Buttons with backdrop blur for visibility on image

**Service Cards**:
- 2-column grid on desktop (md:grid-cols-2)
- Clean white cards with subtle shadow
- Icon or small image at top
- Service name as header
- Description text
- Hover: Subtle lift effect (translate-y)

**About Section**:
- Two-column layout: Company story + Driver competence
- Professional paragraph spacing
- Company details (org number, ownership) in subtle gray box
- Driver certifications as bullet points or badge elements

**Partner Benefits**:
- Icon + title + description cards
- 3-column grid on desktop
- Arctic blue accent icons
- Clean, scannable layout

**Contact Form**:
- Single column form with generous spacing
- Input fields: Name, Email, Phone, Message (textarea)
- Arctic blue submit button
- Contact details sidebar (desktop) or below (mobile)
- Company information: Org.nr, email placeholder, availability note

**Footer**:
- Multi-column layout: Company info, Quick links, Contact
- Social media placeholders
- Copyright and legal links
- Light grey background

### Images
**Required Images with Placement**:
1. **Home Hero**: Full-width background - Northern Lights over fjord or snowy mountain landscape (dramatic, inspiring)
2. **Services Page**: Header image - Modern minibus on Arctic road
3. **About Page**: Landscape format - Tromsø region scenic view
4. **Partner Page**: Header - Professional handshake or collaboration visual with Arctic backdrop
5. **Service Cards**: Small icons/images for each service (transfer, logistics, tours, rental)
6. **Supporting imagery**: Fjords, snowy landscapes throughout for section backgrounds

All images should convey: Professional, Arctic, trustworthy, adventurous

### Animations
**Minimal & Purposeful**:
- Fade-in on scroll for sections (subtle, smooth)
- Smooth page transitions
- Button hover states (slight scale, color deepening)
- Card hover lift (3-5px translate)
- NO excessive animations - keep Nordic minimalism

### Mobile Responsiveness
- Stack all multi-column layouts to single column
- Reduce font sizes proportionally
- Maintain generous spacing (reduce by 25-30%)
- Hero height: 70vh on mobile
- Touch-friendly button sizes (min 44px height)

### Accessibility
- High contrast text on all backgrounds
- Focus states on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Form labels properly associated

## Page-Specific Layouts

**Home**: Hero (90vh) → Services Preview (3 cards) → Why Choose Us → CTA Section

**Services**: Header with image → 4 Service sections (alternating layout or grid) → CTA

**About**: Company story (2-col) → Driver section → Values/Certifications

**Partners**: Benefits grid (3-col) → Partnership process → Contact CTA

**Contact**: Form + Info (2-col desktop, stacked mobile)

**Quality Standard**: Professional, polished, production-ready. Generous whitespace, clear hierarchy, Arctic authenticity throughout.