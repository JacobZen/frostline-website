/**
 * Frostline AS — Professional Design Token Architecture
 * 
 * A complete brand system for the Arctic transport company.
 * All tokens are designed for both light (Arctic Day) and dark (Arctic Night) themes.
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colors = {
  // Primary Arctic Blue — The core brand color
  arcticBlue: {
    50: '#f0f7ff',
    100: '#e0efff',
    200: '#b9deff',
    300: '#7cc5ff',
    400: '#36a9ff',
    500: '#0c8ce9',
    600: '#006dc7',
    700: '#0057a1',
    800: '#044a85',
    900: '#0a3d6e',
    950: '#0d2925', // Brand primary (deep teal)
  },

  // Aurora Green — Accent for CTAs and highlights
  auroraGreen: {
    50: '#edfff8',
    100: '#d5fff0',
    200: '#aeffe1',
    300: '#70ffcb',
    400: '#2bfbad',
    500: '#00e892',
    600: '#00c077',
    700: '#009661',
    800: '#06754f',
    900: '#076043',
    950: '#003724',
  },

  // Midnight Navy — Deep backgrounds for dark mode
  midnightNavy: {
    50: '#f4f6fb',
    100: '#e8ecf4',
    200: '#ccd6e8',
    300: '#a0b4d4',
    400: '#6c8dbb',
    500: '#4a6fa3',
    600: '#395788',
    700: '#30476f',
    800: '#2b3d5d',
    900: '#28354f',
    950: '#091e1b', // Deep dark mode background (deep teal)
  },

  // Ice Grey — Neutral tones for text and borders
  iceGrey: {
    50: '#f8f9fb',
    100: '#f1f3f7',
    200: '#e5e9ef',
    300: '#d1d8e3',
    400: '#b5bfd0',
    500: '#97a3b8',
    600: '#7d8aa0',
    700: '#6a7587',
    800: '#59626f',
    900: '#4c535d',
    950: '#31363d',
  },

  // Snow White — Pure whites and light backgrounds
  snowWhite: {
    50: '#ffffff',
    100: '#fefefe',
    200: '#fcfcfd',
    300: '#f9fafb',
    400: '#f4f5f7',
    500: '#eef0f3',
    600: '#e5e7eb',
    700: '#d1d5db',
    800: '#9ca3af',
    900: '#6b7280',
    950: '#374151',
  },

  // Semantic Colors
  success: {
    light: '#10b981',
    dark: '#34d399',
  },
  warning: {
    light: '#f59e0b',
    dark: '#fbbf24',
  },
  error: {
    light: '#ef4444',
    dark: '#f87171',
  },
  info: {
    light: '#3b82f6',
    dark: '#60a5fa',
  },
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  // Font Families
  fontFamily: {
    heading: '"Montserrat", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  // Font Sizes — Fluid using clamp()
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem)',      // 12-13px
    sm: 'clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem)',     // 13-14px
    base: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',        // 14-16px
    lg: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',           // 16-18px
    xl: 'clamp(1.125rem, 1rem + 0.6vw, 1.25rem)',          // 18-20px
    '2xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',      // 20-24px
    '3xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 1.875rem)',    // 24-30px
    '4xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem)',   // 30-36px
    '5xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3rem)',        // 36-48px
    '6xl': 'clamp(2.75rem, 2rem + 3.75vw, 3.75rem)',       // 44-60px
    '7xl': 'clamp(3.25rem, 2.25rem + 5vw, 4.5rem)',        // 52-72px
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '1.75',
    // Heading-specific
    heading1: '1.08',
    heading2: '1.12',
    heading3: '1.2',
    heading4: '1.25',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    // Heading-specific
    heading1: '-0.03em',
    heading2: '-0.025em',
    heading3: '-0.02em',
    heading4: '-0.015em',
  },

  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacing = {
  // Base spacing scale (1 unit = 4px)
  0: '0',
  px: '1px',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  18: '4.5rem',      // 72px
  20: '5rem',        // 80px

  // Fluid spacing for responsive sections
  fluid: {
    xs: 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',         // 8-12px
    sm: 'clamp(0.75rem, 0.6rem + 0.75vw, 1rem)',          // 12-16px
    md: 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',              // 16-24px
    lg: 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)',            // 24-32px
    xl: 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',              // 32-48px
    '2xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',           // 40-64px
    '3xl': 'clamp(3rem, 2.5rem + 2.5vw, 5rem)',           // 48-80px
    section: 'clamp(3rem, 2rem + 5vw, 5rem)',             // 48-80px section padding
  },
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadows = {
  // Arctic cold shadows — subtle blue undertones
  light: {
    none: 'none',
    sm: '0 1px 2px rgba(14, 42, 71, 0.04)',
    md: '0 2px 4px rgba(14, 42, 71, 0.04), 0 4px 8px rgba(14, 42, 71, 0.04)',
    lg: '0 4px 6px rgba(14, 42, 71, 0.05), 0 8px 16px rgba(14, 42, 71, 0.06)',
    xl: '0 8px 12px rgba(14, 42, 71, 0.06), 0 16px 32px rgba(14, 42, 71, 0.08)',
    '2xl': '0 12px 24px rgba(14, 42, 71, 0.08), 0 24px 48px rgba(14, 42, 71, 0.10)',
    inner: 'inset 0 2px 4px rgba(14, 42, 71, 0.04)',
    glow: '0 0 20px rgba(14, 42, 71, 0.08)',
  },
  dark: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    md: '0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 4px 6px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.2)',
    xl: '0 8px 12px rgba(0, 0, 0, 0.3), 0 16px 32px rgba(0, 0, 0, 0.25)',
    '2xl': '0 12px 24px rgba(0, 0, 0, 0.35), 0 24px 48px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
    glow: '0 0 20px rgba(0, 232, 146, 0.15)',  // Aurora glow
  },

  // Button shadows
  button: {
    light: {
      default: '0 1px 2px rgba(14, 42, 71, 0.06), 0 2px 4px rgba(14, 42, 71, 0.04)',
      hover: '0 4px 8px rgba(14, 42, 71, 0.08), 0 8px 16px rgba(14, 42, 71, 0.06)',
      active: '0 1px 2px rgba(14, 42, 71, 0.08)',
    },
    dark: {
      default: '0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
      hover: '0 4px 8px rgba(0, 0, 0, 0.35), 0 8px 16px rgba(0, 232, 146, 0.08)',
      active: '0 1px 2px rgba(0, 0, 0, 0.4)',
    },
  },

  // Card shadows
  card: {
    light: {
      default: '0 1px 3px rgba(14, 42, 71, 0.04), 0 4px 12px rgba(14, 42, 71, 0.04)',
      hover: '0 4px 8px rgba(14, 42, 71, 0.06), 0 12px 24px rgba(14, 42, 71, 0.08)',
    },
    dark: {
      default: '0 1px 3px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.2)',
      hover: '0 4px 8px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.25)',
    },
  },
} as const;

// ============================================================================
// RADIUS TOKENS
// ============================================================================

export const radius = {
  none: '0',
  sm: '0.25rem',     // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// ============================================================================
// MOTION TOKENS
// ============================================================================

export const motion = {
  // Durations
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '280ms',
    slow: '450ms',
    slower: '600ms',
    slowest: '900ms',
  },

  // Easing curves
  easing: {
    // Standard curves
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Premium Apple-style curves
    apple: 'cubic-bezier(0.22, 1, 0.36, 1)',
    appleOut: 'cubic-bezier(0, 0.55, 0.45, 1)',
    appleInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
    
    // Bounce effects (very subtle)
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounceOut: 'cubic-bezier(0.22, 1.1, 0.36, 1)',
    
    // Spring-like
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  // Transition presets
  transition: {
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
    all: 'all',
  },

  // Animation keyframes
  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeInUp: {
      from: { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
      to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
    },
    fadeInDown: {
      from: { opacity: '0', transform: 'translate3d(0, -20px, 0)' },
      to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
    },
    scaleIn: {
      from: { opacity: '0', transform: 'scale3d(0.95, 0.95, 1)' },
      to: { opacity: '1', transform: 'scale3d(1, 1, 1)' },
    },
    slideInLeft: {
      from: { opacity: '0', transform: 'translate3d(-30px, 0, 0)' },
      to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
    },
    slideInRight: {
      from: { opacity: '0', transform: 'translate3d(30px, 0, 0)' },
      to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
  },
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const components = {
  // Button tokens
  button: {
    height: {
      sm: '2rem',      // 32px
      md: '2.5rem',    // 40px
      lg: '2.875rem',  // 46px
      xl: '3.125rem',  // 50px
    },
    padding: {
      sm: '0 0.75rem',
      md: '0 1rem',
      lg: '0 1.25rem',
      xl: '0 1.5rem',
    },
    fontSize: {
      sm: typography.fontSize.sm,
      md: typography.fontSize.base,
      lg: typography.fontSize.lg,
      xl: typography.fontSize.lg,
    },
    radius: radius.xl,
  },

  // Card tokens
  card: {
    padding: {
      sm: spacing[4],
      md: spacing[5],
      lg: spacing[6],
      xl: spacing[8],
    },
    radius: radius.xl,
    border: '1px solid',
  },

  // Input tokens
  input: {
    height: {
      sm: '2rem',
      md: '2.5rem',
      lg: '2.875rem',
    },
    padding: {
      sm: '0 0.75rem',
      md: '0 1rem',
      lg: '0 1.25rem',
    },
    radius: radius.lg,
    fontSize: typography.fontSize.base,
  },

  // Navbar tokens
  navbar: {
    height: '4rem',        // 64px
    heightMobile: '3.5rem', // 56px
    blur: 'blur(20px)',
    saturate: 'saturate(1.6)',
  },

  // Section tokens
  section: {
    padding: {
      y: spacing.fluid.section,
      x: spacing[4],
    },
    maxWidth: '80rem', // 1280px
  },

  // Hero tokens
  hero: {
    minHeight: '85vh',
    minHeightMobile: '540px',
    overlayOpacity: {
      top: '0.45',
      middle: '0.35',
      bottom: '0.75',
    },
  },

  // Footer tokens
  footer: {
    padding: spacing[12],
    paddingMobile: spacing[8],
  },
} as const;

// ============================================================================
// THEME DEFINITIONS
// ============================================================================

export const themes = {
  light: {
    name: 'Arctic Day',
    colors: {
      background: colors.snowWhite[50],
      foreground: colors.midnightNavy[950],
      card: colors.snowWhite[50],
      cardForeground: colors.midnightNavy[900],
      popover: colors.snowWhite[50],
      popoverForeground: colors.midnightNavy[900],
      primary: colors.arcticBlue[950],
      primaryForeground: colors.snowWhite[50],
      secondary: colors.iceGrey[100],
      secondaryForeground: colors.midnightNavy[900],
      muted: colors.iceGrey[100],
      mutedForeground: colors.iceGrey[600],
      accent: colors.auroraGreen[600],
      accentForeground: colors.snowWhite[50],
      destructive: colors.error.light,
      destructiveForeground: colors.snowWhite[50],
      border: colors.iceGrey[200],
      input: colors.iceGrey[200],
      ring: colors.arcticBlue[500],
    },
  },
  dark: {
    name: 'Arctic Night',
    colors: {
      background: colors.midnightNavy[950],
      foreground: colors.snowWhite[100],
      card: colors.midnightNavy[900],
      cardForeground: colors.snowWhite[100],
      popover: colors.midnightNavy[900],
      popoverForeground: colors.snowWhite[100],
      primary: colors.auroraGreen[500],
      primaryForeground: colors.midnightNavy[950],
      secondary: colors.midnightNavy[800],
      secondaryForeground: colors.snowWhite[200],
      muted: colors.midnightNavy[800],
      mutedForeground: colors.iceGrey[400],
      accent: colors.auroraGreen[400],
      accentForeground: colors.midnightNavy[950],
      destructive: colors.error.dark,
      destructiveForeground: colors.midnightNavy[950],
      border: colors.midnightNavy[700],
      input: colors.midnightNavy[700],
      ring: colors.auroraGreen[500],
    },
  },
} as const;

// ============================================================================
// FROST/GLASS UTILITIES
// ============================================================================

export const frost = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    blur: 'blur(8px)',
    saturate: 'saturate(1.2)',
  },
  medium: {
    background: 'rgba(255, 255, 255, 0.8)',
    blur: 'blur(16px)',
    saturate: 'saturate(1.4)',
  },
  strong: {
    background: 'rgba(255, 255, 255, 0.9)',
    blur: 'blur(24px)',
    saturate: 'saturate(1.6)',
  },
  dark: {
    light: {
      background: 'rgba(14, 26, 39, 0.7)',
      blur: 'blur(8px)',
      saturate: 'saturate(1.2)',
    },
    medium: {
      background: 'rgba(14, 26, 39, 0.8)',
      blur: 'blur(16px)',
      saturate: 'saturate(1.4)',
    },
    strong: {
      background: 'rgba(14, 26, 39, 0.9)',
      blur: 'blur(24px)',
      saturate: 'saturate(1.6)',
    },
  },
} as const;

// ============================================================================
// GRADIENT UTILITIES
// ============================================================================

export const gradients = {
  // Aurora gradients
  aurora: {
    subtle: 'linear-gradient(135deg, rgba(0, 232, 146, 0.05) 0%, rgba(14, 42, 71, 0.05) 100%)',
    medium: 'linear-gradient(135deg, rgba(0, 232, 146, 0.1) 0%, rgba(14, 42, 71, 0.1) 100%)',
    strong: 'linear-gradient(135deg, rgba(0, 232, 146, 0.2) 0%, rgba(14, 42, 71, 0.2) 100%)',
  },
  // Section backgrounds
  section: {
    light: 'linear-gradient(180deg, rgba(248, 249, 251, 0) 0%, rgba(241, 243, 247, 0.5) 50%, rgba(248, 249, 251, 0) 100%)',
    dark: 'linear-gradient(180deg, rgba(14, 26, 39, 0) 0%, rgba(14, 26, 39, 0.5) 50%, rgba(14, 26, 39, 0) 100%)',
  },
  // Hero overlay
  hero: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.75) 100%)',
  // CTA background
  cta: {
    light: `linear-gradient(135deg, ${colors.arcticBlue[950]} 0%, ${colors.arcticBlue[900]} 50%, ${colors.arcticBlue[800]} 100%)`,
    dark: `linear-gradient(135deg, ${colors.auroraGreen[700]} 0%, ${colors.auroraGreen[600]} 50%, ${colors.auroraGreen[500]} 100%)`,
  },
} as const;

// Export all tokens
export const designTokens = {
  colors,
  typography,
  spacing,
  shadows,
  radius,
  motion,
  breakpoints,
  zIndex,
  components,
  themes,
  frost,
  gradients,
} as const;

export default designTokens;
