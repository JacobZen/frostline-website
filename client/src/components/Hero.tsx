import { Button } from '@/components/ui/button';
import heroImage from '@assets/IMG_9188_1763628868230.jpeg';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

export default function Hero() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <section 
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Frostline AS"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Northern Lights over Norwegian fjord with snow-covered mountains"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          style={{ aspectRatio: '16/9' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 leading-tight"
          data-testid="text-hero-title"
        >
          {t.hero.title}
        </h1>
        <p 
          className="text-xl sm:text-2xl md:text-3xl text-white/95 font-medium mb-8 leading-snug"
          data-testid="text-hero-subtitle"
        >
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary/95 backdrop-blur-sm border-2 border-transparent hover:bg-primary/90 hover:border-white text-primary-foreground min-w-[200px] min-h-[48px] rounded-xl no-default-hover-elevate transition-all shadow-lg hover:shadow-xl"
            onClick={() => setLocation('/contact')}
            data-testid="button-book-transfer"
            aria-label="Book your transfer now"
          >
            {t.home.bookNow}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/15 backdrop-blur-sm border-white/40 border-2 text-white hover:bg-white/25 hover:border-white min-w-[200px] min-h-[48px] rounded-xl no-default-hover-elevate transition-all shadow-lg hover:shadow-xl"
            onClick={() => setLocation('/partners')}
            data-testid="button-become-partner"
            aria-label="Learn about partnership opportunities"
          >
            {t.home.becomePartner}
          </Button>
        </div>
      </div>
    </section>
  );
}
