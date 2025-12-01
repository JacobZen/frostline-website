import { useEffect } from 'react';
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

export default function Hero() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  
  usePreloadImage(heroImage);

  return (
    <section 
      className="relative h-[85vh] min-h-[540px] sm:h-[90vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Frostline AS"
    >
      {/* Hero Image with Premium Fade Animation */}
      <div className="absolute inset-0 animate-hero-image">
        <img
          src={heroImage}
          alt="Northern Lights over Norwegian fjord with snow-covered mountains"
          className="w-full h-full object-cover will-change-transform"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{ aspectRatio: '16/9' }}
        />
        {/* Enhanced Arctic gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/75" 
          aria-hidden="true" 
        />
        {/* Subtle blue Arctic tint overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-950/20 mix-blend-overlay" 
          aria-hidden="true" 
        />
      </div>

      {/* Hero Content with Staggered Text Animations */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-3 sm:mb-4 leading-tight tracking-tight animate-hero-text"
          data-testid="text-hero-title"
        >
          {t.hero.title}
        </h1>
        <p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium mb-6 sm:mb-8 leading-snug animate-hero-text animate-delay-200"
          data-testid="text-hero-subtitle"
        >
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0 animate-fade-in-up animate-delay-400">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary/95 backdrop-blur-md border-2 border-white/20 hover:bg-primary hover:border-white/60 text-primary-foreground min-w-[180px] sm:min-w-[200px] min-h-[44px] sm:min-h-[48px] rounded-xl no-default-hover-elevate transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setLocation('/contact')}
            data-testid="button-book-transfer"
            aria-label="Book your transfer now"
          >
            {t.home.bookNow}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/30 border-2 text-white hover:bg-white/20 hover:border-white/60 min-w-[180px] sm:min-w-[200px] min-h-[44px] sm:min-h-[48px] rounded-xl no-default-hover-elevate transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
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
