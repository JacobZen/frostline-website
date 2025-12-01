import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import transferIcon from '@assets/generated_images/transfer_service_icon.png';
import partnerIcon from '@assets/generated_images/partner_logistics_icon.png';
import toursIcon from '@assets/generated_images/northern_lights_tours_icon.png';
import northernLights from '@assets/generated_images/northern_lights_arctic_mountains.png';
import arcticTundra from '@assets/generated_images/arctic_tundra_autumn_colors.png';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const scrollRef = useScrollReveal();

  const serviceIcons = [transferIcon, partnerIcon, toursIcon];

  return (
    <div className="min-h-screen flex flex-col" ref={scrollRef}>
      <Hero />

      {/* About Frostline AS Teaser */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/10 to-muted/30 border-b border-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4 sm:mb-6 scroll-reveal" data-testid="text-about-teaser-title">
            {t.home.aboutTeaserTitle}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed scroll-reveal scroll-reveal-delay-1" data-testid="text-about-teaser-description">
            {t.home.aboutTeaserText}
          </p>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4 scroll-reveal">
              {t.home.servicesTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto scroll-reveal scroll-reveal-delay-1">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {t.home.services.map((service, index) => (
              <div key={index} className={`scroll-reveal scroll-reveal-delay-${index + 1}`}>
                <ServiceCard
                  icon={serviceIcons[index]}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 scroll-reveal">
            <Button
              size="lg"
              className="min-h-[44px] sm:min-h-[48px] min-w-[160px] sm:min-w-[180px] rounded-xl shadow-lg hover:shadow-xl border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setLocation('/services')}
              data-testid="button-view-all-services"
              aria-label="View all our services"
            >
              {t.home.viewAllServices}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
            <div className="scroll-reveal">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4 sm:mb-6">
                {t.home.whyChooseTitle}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                {t.home.whyChooseText}
              </p>
              <div className="space-y-3 sm:space-y-4">
                {t.home.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                    <span className="text-foreground text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-card p-5 sm:p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal scroll-reveal-delay-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {t.home.forTravelPartners}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {t.home.forTravelPartnersText}
                </p>
                <Button
                  variant="outline"
                  className="min-h-[40px] sm:min-h-[44px] rounded-xl shadow-sm hover:shadow-md border-2 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => setLocation('/partners')}
                  data-testid="button-partner-info"
                  aria-label="Learn more about partnerships"
                >
                  {t.home.learnMore}
                </Button>
              </div>

              <div className="bg-card p-5 sm:p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal scroll-reveal-delay-2">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {t.home.privateTravelers}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {t.home.privateTravelersText}
                </p>
                <Button
                  variant="outline"
                  className="min-h-[40px] sm:min-h-[44px] rounded-xl shadow-sm hover:shadow-md border-2 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => setLocation('/contact')}
                  data-testid="button-book-now"
                  aria-label="Book your transfer now"
                >
                  {t.home.bookNow}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Northern Nature Showcase */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4 scroll-reveal">
              {t.home.experienceArctic || 'Experience the Arctic'}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto scroll-reveal scroll-reveal-delay-1">
              {t.home.experienceArcticText || 'Discover the breathtaking beauty of Northern Norway through our transport services'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-xl group scroll-reveal scroll-reveal-delay-1 shadow-lg">
              <img
                src={northernLights}
                alt="Northern Lights over Arctic mountains"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 sm:p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    {t.home.northernLights || 'Nordlys - Northern Lights'}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    {t.home.northernLightsText || 'Witness the magical aurora borealis dancing across Arctic skies'}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-xl group scroll-reveal scroll-reveal-delay-2 shadow-lg">
              <img
                src={arcticTundra}
                alt="Arctic tundra with autumn colors"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 sm:p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    {t.home.arcticWilderness || 'Arctic Wilderness'}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    {t.home.arcticWildernessText || 'Explore vast tundra landscapes with stunning seasonal colors'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Subtle Arctic pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 scroll-reveal">
            {t.home.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-foreground/90 scroll-reveal scroll-reveal-delay-1">
            {t.home.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0 scroll-reveal scroll-reveal-delay-2">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] min-w-[160px] sm:min-w-[180px] rounded-xl bg-white/10 backdrop-blur-md border-white/30 border-2 text-white hover:bg-white/20 hover:border-white/60 no-default-hover-elevate shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setLocation('/contact')}
              data-testid="button-contact-us"
              aria-label="Contact us for inquiries"
            >
              {t.home.contactUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] min-w-[160px] sm:min-w-[180px] rounded-xl bg-white/10 backdrop-blur-md border-white/30 border-2 text-white hover:bg-white/20 hover:border-white/60 no-default-hover-elevate shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setLocation('/partners')}
              data-testid="button-become-partner-cta"
              aria-label="Become a partner"
            >
              {t.home.becomePartner}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
