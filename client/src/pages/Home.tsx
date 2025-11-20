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

export default function Home() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const serviceIcons = [transferIcon, partnerIcon, toursIcon];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      {/* About Frostline AS Teaser */}
      <section className="py-16 sm:py-20 bg-muted/20 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6" data-testid="text-about-teaser-title">
            {t.home.aboutTeaserTitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-teaser-description">
            {t.home.aboutTeaserText}
          </p>
        </div>
      </section>

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
              onClick={() => setLocation('/services')}
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
                  onClick={() => setLocation('/partners')}
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
                  onClick={() => setLocation('/contact')}
                  data-testid="button-book-now"
                >
                  {t.home.bookNow}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Northern Nature Showcase */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              {t.home.experienceArctic || 'Experience the Arctic'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.home.experienceArcticText || 'Discover the breathtaking beauty of Northern Norway through our transport services'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-md group">
              <img
                src={northernLights}
                alt="Northern Lights over Arctic mountains"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {t.home.northernLights || 'Nordlys - Northern Lights'}
                  </h3>
                  <p className="text-white/90">
                    {t.home.northernLightsText || 'Witness the magical aurora borealis dancing across Arctic skies'}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-md group">
              <img
                src={arcticTundra}
                alt="Arctic tundra with autumn colors"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {t.home.arcticWilderness || 'Arctic Wilderness'}
                  </h3>
                  <p className="text-white/90">
                    {t.home.arcticWildernessText || 'Explore vast tundra landscapes with stunning seasonal colors'}
                  </p>
                </div>
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
              onClick={() => setLocation('/contact')}
              data-testid="button-contact-us"
            >
              {t.home.contactUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => setLocation('/partners')}
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
