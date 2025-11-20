import { Button } from '@/components/ui/button';
import heroImage from '@assets/IMG_9188_1763628868230.jpeg';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

export default function Hero() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Northern Lights over Norwegian fjord"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-4" data-testid="text-hero-title">
          {t.hero.title}
        </h1>
        <p className="text-2xl sm:text-3xl text-white/95 font-medium mb-8" data-testid="text-hero-subtitle">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary/95 backdrop-blur-sm border-2 border-transparent hover:bg-primary/90 hover:border-white text-primary-foreground min-w-[200px] no-default-hover-elevate transition-all shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = 'mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry'}
            data-testid="button-book-transfer"
          >
            {t.home.bookNow}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/15 backdrop-blur-sm border-white/40 border-2 text-white hover:bg-white/25 hover:border-white min-w-[200px] no-default-hover-elevate transition-all shadow-lg hover:shadow-xl"
            onClick={() => setLocation('/partners')}
            data-testid="button-become-partner"
          >
            {t.home.becomePartner}
          </Button>
        </div>
      </div>
    </div>
  );
}
