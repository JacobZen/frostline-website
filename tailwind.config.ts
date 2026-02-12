import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ========================================================================
      // ARCTIC COLOR PALETTE
      // ========================================================================
      colors: {
        // Arctic Blue — Primary brand color
        "arctic-blue": {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#b9deff",
          300: "#7cc5ff",
          400: "#36a9ff",
          500: "#0c8ce9",
          600: "#006dc7",
          700: "#0057a1",
          800: "#044a85",
          900: "#0a3d6e",
          950: "#0c1e28",
        },
        // Aurora Green — Accent color
        "aurora-green": {
          50: "#edfff8",
          100: "#d5fff0",
          200: "#aeffe1",
          300: "#70ffcb",
          400: "#2bfbad",
          500: "#00e892",
          600: "#00c077",
          700: "#009661",
          800: "#06754f",
          900: "#076043",
          950: "#003724",
        },
        // Midnight Navy — Dark mode backgrounds
        "midnight-navy": {
          50: "#f4f6fb",
          100: "#e8ecf4",
          200: "#ccd6e8",
          300: "#a0b4d4",
          400: "#6c8dbb",
          500: "#4a6fa3",
          600: "#395788",
          700: "#30476f",
          800: "#2b3d5d",
          900: "#28354f",
          950: "#081620",
        },
        // Ice Grey — Neutral tones
        "ice-grey": {
          50: "#f8f9fb",
          100: "#f1f3f7",
          200: "#e5e9ef",
          300: "#d1d8e3",
          400: "#b5bfd0",
          500: "#97a3b8",
          600: "#7d8aa0",
          700: "#6a7587",
          800: "#59626f",
          900: "#4c535d",
          950: "#31363d",
        },
        // Snow White — Light backgrounds
        "snow-white": {
          50: "#ffffff",
          100: "#fefefe",
          200: "#fcfcfd",
          300: "#f9fafb",
          400: "#f4f5f7",
          500: "#eef0f3",
          600: "#e5e7eb",
          700: "#d1d5db",
          800: "#9ca3af",
          900: "#6b7280",
          950: "#374151",
        },

        // Semantic / shadcn colors
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },

      // ========================================================================
      // BORDER RADIUS
      // ========================================================================
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },

      // ========================================================================
      // FONT FAMILIES
      // ========================================================================
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },

      // ========================================================================
      // FLUID TYPOGRAPHY
      // ========================================================================
      fontSize: {
        "fluid-xs": ["clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem)", { lineHeight: "1.5" }],
        "fluid-sm": ["clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem)", { lineHeight: "1.5" }],
        "fluid-base": ["clamp(0.875rem, 0.8rem + 0.35vw, 1rem)", { lineHeight: "1.6" }],
        "fluid-lg": ["clamp(1rem, 0.9rem + 0.5vw, 1.125rem)", { lineHeight: "1.5" }],
        "fluid-xl": ["clamp(1.125rem, 1rem + 0.6vw, 1.25rem)", { lineHeight: "1.4" }],
        "fluid-2xl": ["clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)", { lineHeight: "1.35" }],
        "fluid-3xl": ["clamp(1.5rem, 1.25rem + 1.25vw, 1.875rem)", { lineHeight: "1.25" }],
        "fluid-4xl": ["clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem)", { lineHeight: "1.2" }],
        "fluid-5xl": ["clamp(2.25rem, 1.75rem + 2.5vw, 3rem)", { lineHeight: "1.12" }],
        "fluid-6xl": ["clamp(2.75rem, 2rem + 3.75vw, 3.75rem)", { lineHeight: "1.1" }],
        "fluid-7xl": ["clamp(3.25rem, 2.25rem + 5vw, 4.5rem)", { lineHeight: "1.08" }],
      },

      // ========================================================================
      // LETTER SPACING
      // ========================================================================
      letterSpacing: {
        "heading-1": "-0.03em",
        "heading-2": "-0.025em",
        "heading-3": "-0.02em",
        "heading-4": "-0.015em",
      },

      // ========================================================================
      // LINE HEIGHT
      // ========================================================================
      lineHeight: {
        "heading-1": "1.08",
        "heading-2": "1.12",
        "heading-3": "1.2",
        "heading-4": "1.25",
      },

      // ========================================================================
      // FLUID SPACING
      // ========================================================================
      spacing: {
        "fluid-xs": "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)",
        "fluid-sm": "clamp(0.75rem, 0.6rem + 0.75vw, 1rem)",
        "fluid-md": "clamp(1rem, 0.8rem + 1vw, 1.5rem)",
        "fluid-lg": "clamp(1.5rem, 1.2rem + 1.5vw, 2rem)",
        "fluid-xl": "clamp(2rem, 1.5rem + 2.5vw, 3rem)",
        "fluid-2xl": "clamp(2.5rem, 2rem + 2.5vw, 4rem)",
        "fluid-3xl": "clamp(3rem, 2.5rem + 2.5vw, 5rem)",
        "section": "clamp(3rem, 2rem + 5vw, 5rem)",
      },

      // ========================================================================
      // ARCTIC SHADOWS
      // ========================================================================
      boxShadow: {
        "arctic-sm": "0 1px 2px rgba(14, 42, 71, 0.04)",
        "arctic": "0 2px 4px rgba(14, 42, 71, 0.04), 0 4px 8px rgba(14, 42, 71, 0.04)",
        "arctic-md": "0 2px 4px rgba(14, 42, 71, 0.04), 0 4px 8px rgba(14, 42, 71, 0.04)",
        "arctic-lg": "0 4px 6px rgba(14, 42, 71, 0.05), 0 8px 16px rgba(14, 42, 71, 0.06)",
        "arctic-xl": "0 8px 12px rgba(14, 42, 71, 0.06), 0 16px 32px rgba(14, 42, 71, 0.08)",
        "arctic-2xl": "0 12px 24px rgba(14, 42, 71, 0.08), 0 24px 48px rgba(14, 42, 71, 0.10)",
        "arctic-inner": "inset 0 2px 4px rgba(14, 42, 71, 0.04)",
        "arctic-glow": "0 0 20px rgba(14, 42, 71, 0.08)",
        "aurora-glow": "0 0 20px rgba(0, 232, 146, 0.15)",
        "button": "0 1px 2px rgba(14, 42, 71, 0.06), 0 2px 4px rgba(14, 42, 71, 0.04)",
        "button-hover": "0 4px 8px rgba(14, 42, 71, 0.08), 0 8px 16px rgba(14, 42, 71, 0.06)",
        "card": "0 1px 3px rgba(14, 42, 71, 0.04), 0 4px 12px rgba(14, 42, 71, 0.04)",
        "card-hover": "0 4px 8px rgba(14, 42, 71, 0.06), 0 12px 24px rgba(14, 42, 71, 0.08)",
      },

      // ========================================================================
      // BACKDROP BLUR & FROST
      // ========================================================================
      backdropBlur: {
        "frost-light": "8px",
        "frost": "16px",
        "frost-strong": "24px",
        "frost-xl": "32px",
      },

      // ========================================================================
      // TRANSITION TIMING FUNCTIONS
      // ========================================================================
      transitionTimingFunction: {
        "apple": "cubic-bezier(0.22, 1, 0.36, 1)",
        "apple-out": "cubic-bezier(0, 0.55, 0.45, 1)",
        "apple-in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
        "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "bounce-out": "cubic-bezier(0.22, 1.1, 0.36, 1)",
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      // ========================================================================
      // TRANSITION DURATIONS
      // ========================================================================
      transitionDuration: {
        "fast": "150ms",
        "normal": "280ms",
        "slow": "450ms",
        "slower": "600ms",
        "slowest": "900ms",
      },

      // ========================================================================
      // KEYFRAME ANIMATIONS
      // ========================================================================
      keyframes: {
        // Accordion
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Fade animations
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translate3d(0, 20px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translate3d(0, -20px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        // Scale animations
        "scale-in": {
          from: { opacity: "0", transform: "scale3d(0.95, 0.95, 1)" },
          to: { opacity: "1", transform: "scale3d(1, 1, 1)" },
        },
        // Slide animations
        "slide-in-left": {
          from: { opacity: "0", transform: "translate3d(-30px, 0, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translate3d(30px, 0, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        // Hero animations
        "hero-image": {
          from: { opacity: "0", transform: "scale(1.08)" },
          to: { opacity: "1", transform: "scale(1.05)" },
        },
        "hero-text": {
          from: { opacity: "0", transform: "translate3d(0, 30px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        // Utility animations
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Theme transition
        "theme-fade": {
          from: { opacity: "0.95" },
          to: { opacity: "1" },
        },
        // Scroll indicator
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },

      // ========================================================================
      // ANIMATION DEFINITIONS
      // ========================================================================
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-up": "fade-in-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-down": "fade-in-down 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-image": "hero-image 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-text": "hero-text 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "theme-fade": "theme-fade 0.3s ease-out",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
