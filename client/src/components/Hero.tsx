import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/IMG_9188_1763628868230.jpeg';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

function usePreloadImage(src: string) {
  useEffect(() => {
    const existingPreload = document.head.querySelector(`link[rel="preload"][href="${src}"]`);
    if (!existingPreload) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/jpeg';
      document.head.appendChild(link);
    }
  }, [src]);
}

function useSubtleParallax(intensity: number = 0.15) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.bottom > 0) {
              setOffset(window.scrollY * intensity);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);
  
  return { ref, offset };
}

export default function Hero() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const { ref: parallaxRef, offset } = useSubtleParallax(0.12);
  
  usePreloadImage(heroImage);

  return (
    <section 
      ref={parallaxRef}
      className="relative h-[85vh] min-h-[540px] sm:h-[90vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0e2a47]"
      aria-label="Welcome to Frostline AS"
    >
      {/* Hero Image with Premium Fade Animation and Subtle Parallax */}
      <div 
        className="absolute inset-0 animate-hero-image"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <img
          src={heroImage}
          alt="Northern Lights over Norwegian fjord with snow-covered mountains"
          className="w-full h-full object-cover will-change-transform scale-[1.05]"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{ aspectRatio: '16/9' }}
        />
        {/* Premium Arctic hero gradient overlay - multi-stop for depth */}
        <div 
          className="absolute inset-0 arctic-hero-gradient" 
          aria-hidden="true" 
        />
        {/* Subtle blue Arctic tint overlay - northern lights softness */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/8 via-transparent to-blue-950/15 mix-blend-overlay" 
          aria-hidden="true" 
        />
      </div>

      {/* Hero Content with Staggered Text Animations */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-[clamp(1.875rem,5vw+0.5rem,4.5rem)] font-semibold text-white mb-3 sm:mb-5 leading-[1.08] tracking-[-0.03em] animate-hero-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          data-testid="text-hero-title"
        >
          {t.hero.title}
        </h1>
        <p 
          className="text-[clamp(1.125rem,2.5vw+0.25rem,1.875rem)] text-white/95 font-medium mb-7 sm:mb-9 leading-[1.35] tracking-[-0.01em] animate-hero-text animate-delay-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
          data-testid="text-hero-subtitle"
        >
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0 animate-fade-in-up animate-delay-400">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary/95 backdrop-blur-xl border-2 border-white/25 hover:bg-primary hover:border-white/50 text-primary-foreground min-w-[180px] sm:min-w-[200px] min-h-[44px] sm:min-h-[50px] rounded-xl no-default-hover-elevate transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:scale-[1.015] active:scale-[0.985]"
            onClick={() => setLocation('/contact')}
            data-testid="button-book-transfer"
            aria-label="Book your transfer now"
          >
            {t.home.bookNow}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/8 backdrop-blur-xl border-white/25 border-2 text-white hover:bg-white/15 hover:border-white/50 min-w-[180px] sm:min-w-[200px] min-h-[44px] sm:min-h-[50px] rounded-xl no-default-hover-elevate transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.28)] hover:scale-[1.015] active:scale-[0.985]"
            onClick={() => setLocation('/partners')}
            data-testid="button-become-partner"
            aria-label="Learn about partnership opportunities"
          >
            {t.home.becomePartner}
          </Button>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-600" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
