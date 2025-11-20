import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import transferIcon from '@assets/generated_images/transfer_service_icon.png';
import partnerIcon from '@assets/generated_images/partner_logistics_icon.png';
import toursIcon from '@assets/generated_images/northern_lights_tours_icon.png';
import rentalIcon from '@assets/generated_images/minibus_rental_icon.png';
import minibusImage from '@assets/generated_images/minibus_on_arctic_road.png';

export default function Services() {
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
    {
      icon: rentalIcon,
      title: 'Minibus Rental',
      description: 'Rent our modern minibus with or without driver. Ideal for groups, events, and excursions.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={minibusImage}
            alt="Modern minibus on Arctic road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4" data-testid="text-services-title">
            Our Services
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Professional transport solutions for Northern Norway
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Private Transfers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Private Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Airport transfers, hotel pick-ups, sightseeing and custom routes in Tromsø and surrounding areas. We provide comfortable, reliable transport tailored to your schedule.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Airport to hotel transfers</li>
                <li>• Hotel pick-ups and drop-offs</li>
                <li>• Custom sightseeing routes</li>
                <li>• Flexible scheduling</li>
                <li>• All-weather Arctic driving expertise</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">Book Your Transfer</h3>
              <p className="text-muted-foreground mb-4">
                Contact us to arrange your private transfer. We respond quickly to all inquiries.
              </p>
              <Button onClick={() => window.location.href = '/contact'} data-testid="button-book-transfer-service">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Partner Transport */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">Become a Partner</h3>
              <p className="text-muted-foreground mb-4">
                Join our network of travel partners and ensure your guests receive reliable, professional transport.
              </p>
              <Button onClick={() => window.location.href = '/partners'} data-testid="button-partner-transport">
                Learn More
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Partner Transport
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Reliable logistics for DMCs, tour operators and activity companies. We ensure your guests arrive on time — every time.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Dedicated driver support</li>
                <li>• Flexible scheduling coordination</li>
                <li>• High reliability guarantee</li>
                <li>• Quick communication response</li>
                <li>• Clean, comfortable vehicles</li>
              </ul>
            </div>
          </div>

          {/* Northern Lights Tours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Northern Lights & Seasonal Tours
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Optional add-on product for the future. Small-group experiences with a certified driver who knows the best viewing locations.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Small group tours (max 8 people)</li>
                <li>• Certified, experienced drivers</li>
                <li>• Seasonal tour options</li>
                <li>• Flexible departure times</li>
                <li>• Arctic expertise included</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                We're developing our tour offerings. Contact us to express interest or inquire about custom tours.
              </p>
              <Button variant="outline" onClick={() => window.location.href = '/contact'} data-testid="button-tours-interest">
                Express Interest
              </Button>
            </div>
          </div>

          {/* Minibus Rental */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 bg-card p-6 rounded-md border">
              <h3 className="text-xl font-semibold mb-4">Rental Inquiry</h3>
              <p className="text-muted-foreground mb-4">
                Get in touch to discuss your minibus rental needs. We offer flexible options for all group sizes.
              </p>
              <Button onClick={() => window.location.href = '/contact'} data-testid="button-rental-inquiry">
                Contact Us
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Minibus Rental
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Rent our modern minibus with or without driver. Ideal for groups, events, and excursions.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Modern, well-maintained vehicles</li>
                <li>• With or without driver options</li>
                <li>• Suitable for groups and events</li>
                <li>• Flexible rental periods</li>
                <li>• Fully insured and serviced</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            We can tailor our services to meet your specific transport needs in Northern Norway.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
            onClick={() => window.location.href = '/contact'}
            data-testid="button-custom-solution"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
