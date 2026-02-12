import Hero from '@/components/home/Hero';
import ServiceCard from '@/components/home/ServiceCard';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import transferIcon from '@assets/generated_images/transfer_service_icon.webp';
import partnerIcon from '@assets/generated_images/partner_logistics_icon.webp';
import toursIcon from '@assets/generated_images/northern_lights_tours_icon.webp';
import northernLights from '@assets/generated_images/northern_lights_arctic_mountains.webp';
import arcticTundra from '@assets/generated_images/arctic_tundra_autumn_colors.webp';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';
import PageMeta from '@/components/common/PageMeta';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Home() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const scrollRef = useScrollReveal();

  const serviceIcons = [transferIcon, partnerIcon, toursIcon];

  return (
    <div className="min-h-screen flex flex-col" ref={scrollRef}>
      <PageMeta
        titleEn="Reliable Transport in Northern Norway"
        titleNo="Pålitelig transport i Nord-Norge"
        descriptionEn="Frostline AS offers private transfers, partner logistics and seasonal tours in Arctic Norway. Safe, flexible transport year-round."
        descriptionNo="Frostline AS tilbyr privat transport, partnerlogistikk og sesongbaserte turer i Nord-Norge. Trygg, fleksibel transport hele året."
        path="/"
      />
      <Hero />

      {/* About Frostline AS Teaser */}
      <section className="section-padding arctic-section-gradient-light border-b border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-semibold text-foreground mb-5 sm:mb-7 scroll-reveal tracking-[-0.025em]" data-testid="text-about-teaser-title">
            {t.home.aboutTeaserTitle}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-[1.7] scroll-reveal scroll-reveal-delay-1 max-w-3xl mx-auto" data-testid="text-about-teaser-description">
            {t.home.aboutTeaserText}
          </p>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#f7f9fc] dark:bg-[#0c2421] relative">
        {/* Ultra-subtle top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-semibold text-foreground mb-4 sm:mb-5 scroll-reveal tracking-[-0.025em]">
              {t.home.servicesTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl mx-auto scroll-reveal scroll-reveal-delay-1 leading-[1.65]">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
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

          <div className="text-center mt-10 sm:mt-12 scroll-reveal">
            <Button
              size="lg"
              className="min-h-[46px] sm:min-h-[50px] min-w-[170px] sm:min-w-[190px] rounded-xl arctic-shadow hover:shadow-none border border-transparent hover:border-primary/20 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] active:scale-[0.985]"
              onClick={() => setLocation('/services')}
              data-testid="button-view-all-services"
              aria-label="View all our services"
            >
              {t.home.viewAllServices}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section — deep teal aurora */}
      <section className="section-padding bg-gradient-to-br from-[#0c1e28] via-[#102a35] to-[#0a1f29] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_50%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.04)_0%,_transparent_50%)]" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start lg:items-center">
            <div className="scroll-reveal">
              <h2 className="font-semibold text-white mb-5 sm:mb-7 tracking-[-0.025em]">
                {t.home.whyChooseTitle}
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-7 sm:mb-9 leading-[1.7]">
                {t.home.whyChooseText}
              </p>
              <div className="space-y-3.5 sm:space-y-4">
                {t.home.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3.5 group">
                    <CheckCircle className="w-5 h-5 text-[#00e892] flex-shrink-0 mt-0.5 transition-transform duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" aria-hidden="true" />
                    <span className="text-white/90 text-sm sm:text-base leading-[1.6]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="bg-white/8 backdrop-blur-sm p-5 sm:p-7 rounded-xl border border-white/12 shadow-[0_4px_24px_rgba(0,0,0,0.2)] scroll-reveal scroll-reveal-delay-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2.5 sm:mb-3 tracking-[-0.015em]">
                  {t.home.privateTravelers}
                </h3>
                <p className="text-sm sm:text-base text-white/65 mb-5 leading-[1.65]">
                  {t.home.privateTravelersText}
                </p>
                <Button
                  size="lg"
                  className="min-h-[44px] sm:min-h-[48px] rounded-xl bg-white text-[#0c1e28] font-semibold hover:bg-white/90 no-default-hover-elevate shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.3)] transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] active:scale-[0.985] border border-white/80"
                  onClick={() => setLocation('/routes')}
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
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-semibold text-foreground mb-4 sm:mb-5 scroll-reveal tracking-[-0.025em]">
              {t.home.experienceArctic || 'Experience the Arctic'}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto scroll-reveal scroll-reveal-delay-1 leading-[1.65]">
              {t.home.experienceArcticText || 'Discover the breathtaking beauty of Northern Norway through our transport services'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden rounded-xl group scroll-reveal scroll-reveal-delay-1 arctic-shadow-lg arctic-image-hover">
              <img
                src={northernLights}
                alt="Northern Lights over Arctic mountains"
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:from-black/65" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-5 sm:p-7 text-white transform transition-transform duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-3px]">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1.5 sm:mb-2 tracking-[-0.015em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                    {t.home.northernLights || 'Nordlys - Northern Lights'}
                  </h3>
                  <p className="text-sm sm:text-base text-white/92 leading-[1.55]">
                    {t.home.northernLightsText || 'Witness the magical aurora borealis dancing across Arctic skies'}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden rounded-xl group scroll-reveal scroll-reveal-delay-2 arctic-shadow-lg arctic-image-hover">
              <img
                src={arcticTundra}
                alt="Arctic tundra with autumn colors"
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:from-black/65" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-5 sm:p-7 text-white transform transition-transform duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-3px]">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1.5 sm:mb-2 tracking-[-0.015em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                    {t.home.arcticWilderness || 'Arctic Wilderness'}
                  </h3>
                  <p className="text-sm sm:text-base text-white/92 leading-[1.55]">
                    {t.home.arcticWildernessText || 'Explore vast tundra landscapes with stunning seasonal colors'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding arctic-accent-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-semibold text-white mb-5 sm:mb-7 scroll-reveal tracking-[-0.025em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            {t.home.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-white/85 scroll-reveal scroll-reveal-delay-1 leading-[1.65] max-w-2xl mx-auto">
            {t.home.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center px-2 sm:px-0 scroll-reveal scroll-reveal-delay-2">
            <Button
              size="lg"
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] min-w-[180px] sm:min-w-[200px] rounded-xl bg-white text-[#0c1e28] font-semibold hover:bg-white/90 no-default-hover-elevate shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] active:scale-[0.985] border-2 border-white/80"
              onClick={() => setLocation('/contact')}
              data-testid="button-contact-us"
              aria-label="Contact us for inquiries"
            >
              {t.home.contactUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] min-w-[180px] sm:min-w-[200px] rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white font-semibold hover:bg-white/18 hover:border-white/60 no-default-hover-elevate shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] active:scale-[0.985]"
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
