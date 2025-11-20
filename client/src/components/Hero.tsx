import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/northern_lights_hero_background.png';

export default function Hero() {
  const handleBookTransfer = () => {
    console.log('Book Transfer clicked');
    window.location.href = '/contact';
  };

  const handleBecomePartner = () => {
    console.log('Become Partner clicked');
    window.location.href = '/partners';
  };

  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Northern Lights over Norwegian fjord"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-4" data-testid="text-hero-title">
          Frostline AS
        </h1>
        <p className="text-2xl sm:text-3xl text-white/95 font-medium mb-8" data-testid="text-hero-subtitle">
          Private Transfers & Tours in Northern Norway
        </p>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
          Frostline AS offers reliable transport, private transfers and partner-based logistics in the Tromsø region. We collaborate with DMCs, hotels, tour operators and private groups. Our focus is safe, flexible and comfortable transport — all year round.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground min-w-[200px] no-default-hover-elevate"
            onClick={handleBookTransfer}
            data-testid="button-book-transfer"
          >
            Book Transfer
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 min-w-[200px] no-default-hover-elevate"
            onClick={handleBecomePartner}
            data-testid="button-become-partner"
          >
            Become Partner
          </Button>
        </div>
      </div>
    </div>
  );
}
