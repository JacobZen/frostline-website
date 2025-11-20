import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import transferIcon from '@assets/generated_images/transfer_service_icon.png';
import partnerIcon from '@assets/generated_images/partner_logistics_icon.png';
import toursIcon from '@assets/generated_images/northern_lights_tours_icon.png';
import rentalIcon from '@assets/generated_images/minibus_rental_icon.png';
import arcticCoastalRoute from '@assets/generated_images/arctic_coastal_transport_route.png';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

export default function Services() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const serviceIcons = [transferIcon, partnerIcon, toursIcon, rentalIcon];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={arcticCoastalRoute}
            alt="Arctic coastal transport route in Northern Norway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4" data-testid="text-services-title">
            {t.services.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.serviceCards.map((service, index) => (
              <ServiceCard
                key={index}
                icon={serviceIcons[index]}
                title={service.title}
                description={service.description}
              />
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
              <Button onClick={() => window.location.href = 'mailto:post@frostline.as?subject=Transfer%20Service%20Inquiry%20-%20Frostline%20AS'} data-testid="button-book-transfer-service">
                {t.home.contactUs}
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
              <Button onClick={() => setLocation('/partners')} data-testid="button-partner-transport">
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
              <Button variant="outline" onClick={() => window.location.href = 'mailto:post@frostline.as?subject=Northern%20Lights%20Tours%20Interest%20-%20Frostline%20AS'} data-testid="button-tours-interest">
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
              <Button onClick={() => window.location.href = 'mailto:post@frostline.as?subject=Minibus%20Rental%20Inquiry%20-%20Frostline%20AS'} data-testid="button-rental-inquiry">
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
      <section className="py-20 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            {t.services.ctaTitle}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {t.services.ctaSubtitle}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 border-2 text-white hover:bg-white/20 hover:border-white no-default-hover-elevate shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.location.href = 'mailto:post@frostline.as?subject=Custom%20Solution%20Inquiry%20-%20Frostline%20AS'}
            data-testid="button-custom-solution"
          >
            {t.services.contactUsToday}
          </Button>
        </div>
      </section>
    </div>
  );
}
