import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import transferIcon from '@assets/generated_images/transfer_service_icon.png';
import partnerIcon from '@assets/generated_images/partner_logistics_icon.png';
import toursIcon from '@assets/generated_images/northern_lights_tours_icon.png';
import { useLanguage } from '@/contexts/language-context';

export default function Home() {
  const { t } = useLanguage();

  const serviceIcons = [transferIcon, partnerIcon, toursIcon];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      {/* Services Preview Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              {t.home.servicesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.home.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={serviceIcons[index]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              onClick={() => window.location.href = '/services'}
              data-testid="button-view-all-services"
            >
              {t.home.viewAllServices}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                {t.home.whyChooseTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.home.whyChooseText}
              </p>
              <div className="space-y-4">
                {t.home.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-md border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t.home.forTravelPartners}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.home.forTravelPartnersText}
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/partners'}
                  data-testid="button-partner-info"
                >
                  {t.home.learnMore}
                </Button>
              </div>

              <div className="bg-card p-6 rounded-md border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t.home.privateTravelers}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.home.privateTravelersText}
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                  data-testid="button-book-now"
                >
                  {t.home.bookNow}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            {t.home.ctaTitle}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {t.home.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/contact'}
              data-testid="button-contact-us"
            >
              {t.home.contactUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/partners'}
              data-testid="button-become-partner-cta"
            >
              {t.home.becomePartner}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
