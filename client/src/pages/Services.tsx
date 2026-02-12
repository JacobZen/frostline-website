import ServiceCard from '@/components/home/ServiceCard';
import { Button } from '@/components/ui/button';
import transferIcon from '@assets/generated_images/transfer_service_icon.webp';
import partnerIcon from '@assets/generated_images/partner_logistics_icon.webp';
import toursIcon from '@assets/generated_images/northern_lights_tours_icon.webp';
import rentalIcon from '@assets/generated_images/minibus_rental_icon.webp';
import arcticCoastalRoute from '@assets/generated_images/arctic_coastal_transport_route.webp';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';
import PageMeta from '@/components/common/PageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Services() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const scrollRef = useScrollReveal();
  const serviceIcons = [transferIcon, partnerIcon, toursIcon, rentalIcon];

  return (
    <div className="min-h-screen flex flex-col" ref={scrollRef}>
      <PageMeta
        titleEn="Our Transport Services"
        titleNo="Våre transporttjenester"
        descriptionEn="Private transfers, partner logistics and Northern Lights tours in Arctic Norway. Professional transport solutions by Frostline AS."
        descriptionNo="Privat transport, partnerlogistikk og nordlysturer i Nord-Norge. Profesjonelle transportløsninger fra Frostline AS."
        path="/services"
      />
      <section className="relative h-[35vh] min-h-[260px] sm:h-[40vh] sm:min-h-[300px] flex items-center justify-center overflow-hidden" aria-label="Services header">
        <div className="absolute inset-0 animate-fade-in-scale">
          <img
            src={arcticCoastalRoute}
            alt="Arctic coastal transport route in Northern Norway"
            className="w-full h-full object-cover"
            width="1920"
            height="800"
            loading="eager"
            style={{ aspectRatio: '16/9' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-950/15 mix-blend-overlay" aria-hidden="true" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight animate-hero-text" data-testid="text-services-title">
            {t.services.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed animate-hero-text animate-delay-200">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {t.services.serviceCards.map((service, index) => (
              <div key={index} className={`scroll-reveal scroll-reveal-delay-${index + 1}`}>
                <ServiceCard
                  icon={serviceIcons[index]}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Private Transfers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                {t.services.privateTransfers}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.services.privateTransfersDesc}
              </p>
              <ul className="space-y-2 text-foreground">
                {t.services.privateTransfersFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">{t.services.bookYourTransfer}</h3>
              <p className="text-muted-foreground mb-4">
                {t.services.bookYourTransferText}
              </p>
              <Button 
                className="min-h-[44px] rounded-xl"
                onClick={() => setLocation('/routes')} 
                data-testid="button-book-transfer-service"
                aria-label="View routes and book a transfer"
              >
                {t.routes.bookNow}
              </Button>
            </div>
          </div>

          {/* Partner Transport */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">{t.services.becomePartner}</h3>
              <p className="text-muted-foreground mb-4">
                {t.services.becomePartnerText}
              </p>
              <Button 
                className="min-h-[44px] rounded-xl"
                onClick={() => setLocation('/partners')} 
                data-testid="button-partner-transport"
                aria-label="Learn more about partner transport"
              >
                {t.home.learnMore}
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                {t.services.partnerTransport}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.services.partnerTransportDesc}
              </p>
              <ul className="space-y-2 text-foreground">
                {t.services.partnerTransportFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Northern Lights Tours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                {t.services.northernLights}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.services.northernLightsDesc}
              </p>
              <ul className="space-y-2 text-foreground">
                {t.services.northernLightsFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">{t.services.comingSoon}</h3>
              <p className="text-muted-foreground mb-4">
                {t.services.comingSoonText}
              </p>
              <Button 
                variant="outline" 
                className="min-h-[44px] rounded-xl"
                onClick={() => window.location.href = 'mailto:post@frostline.as?subject=Northern%20Lights%20Tours%20Interest%20-%20Frostline%20AS'} 
                data-testid="button-tours-interest"
                aria-label="Express interest in Northern Lights tours"
              >
                {t.services.expressInterest}
              </Button>
            </div>
          </div>

          {/* Minibus Rental */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">{t.services.rentalInquiry}</h3>
              <p className="text-muted-foreground mb-4">
                {t.services.rentalInquiryText}
              </p>
              <Button 
                className="min-h-[44px] rounded-xl"
                onClick={() => setLocation('/contact')} 
                data-testid="button-rental-inquiry"
                aria-label="Inquire about minibus rental"
              >
                {t.home.contactUs}
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                {t.services.minibusRental}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.services.minibusRentalDesc}
              </p>
              <ul className="space-y-2 text-foreground">
                {t.services.minibusRentalFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 scroll-reveal">
            {t.services.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-foreground/90 scroll-reveal scroll-reveal-delay-1">
            {t.services.ctaSubtitle}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] min-w-[180px] sm:min-w-[200px] rounded-xl bg-white/10 backdrop-blur-md border-white/30 border-2 text-white hover:bg-white/20 hover:border-white/60 no-default-hover-elevate shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] scroll-reveal scroll-reveal-delay-2"
            onClick={() => setLocation('/contact')}
            data-testid="button-custom-solution"
            aria-label="Contact us today for custom transport solutions"
          >
            {t.services.contactUsToday}
          </Button>
        </div>
      </section>
    </div>
  );
}
