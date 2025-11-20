import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import transferIcon from '@assets/generated_images/transfer_service_icon.png';
import partnerIcon from '@assets/generated_images/partner_logistics_icon.png';
import toursIcon from '@assets/generated_images/northern_lights_tours_icon.png';

export default function Home() {
  const services = [
    {
      icon: transferIcon,
      title: 'Private Transfers',
      description: 'Airport transfers, hotel pick-ups, sightseeing and custom routes in Tromsø and surrounding areas.',
    },
    {
      icon: partnerIcon,
      title: 'Partner Transport',
      description: 'Reliable logistics for DMCs, tour operators and activity companies. We ensure your guests arrive on time — every time.',
    },
    {
      icon: toursIcon,
      title: 'Northern Lights & Seasonal Tours',
      description: 'Optional add-on product for the future. Small-group experiences with a certified driver.',
    },
  ];

  const benefits = [
    'Safe and comfortable transport year-round',
    'Certified and experienced drivers',
    'Flexible scheduling for your needs',
    'Modern, well-maintained vehicles',
    'Quick and reliable communication',
    'Competitive rates for all services',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      {/* Services Preview Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional transport solutions for every need in Northern Norway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
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
              View All Services
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
                Why Choose Frostline AS?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand the unique challenges of Arctic transport. With years of experience navigating Northern Norwegian roads in all conditions, we provide the reliability and professionalism your guests deserve.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
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
                  For Travel Partners
                </h3>
                <p className="text-muted-foreground mb-4">
                  We work closely with DMCs, hotels, and tour operators to ensure seamless logistics for your guests.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/partners'}
                  data-testid="button-partner-info"
                >
                  Learn More
                </Button>
              </div>

              <div className="bg-card p-6 rounded-md border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Private Travelers
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enjoy personalized transfers and tours tailored to your schedule and preferences.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                  data-testid="button-book-now"
                >
                  Book Now
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
            Ready to Experience Arctic Transport Excellence?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact us today to discuss your transport needs or establish a partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/contact'}
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/partners'}
              data-testid="button-become-partner-cta"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
