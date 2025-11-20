import { Card } from '@/components/ui/card';
import { Award, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@assets/generated_images/tromsø_region_landscape.png';

export default function About() {
  const certifications = [
    'Professional driver certification',
    'Arctic driving safety training',
    'First aid certified',
    'Extensive Northern Norwegian road experience',
    'Customer service excellence',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="Tromsø region landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4" data-testid="text-about-title">
            About Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Your trusted transport partner in Northern Norway
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Frostline AS is a transport company operating in Northern Norway.
                </p>
                <p>
                  With a focus on reliability, service and flexibility, we work closely with partners who need a trustworthy transport provider year-round. Our commitment to excellence has made us a preferred choice for DMCs, hotels, and tour operators throughout the Tromsø region.
                </p>
                <p>
                  We understand the unique challenges of Arctic transport and have built our business around providing safe, comfortable, and reliable solutions regardless of weather conditions or season.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-md">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Company Details
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Organization Number</div>
                  <div className="text-foreground font-medium" data-testid="text-org-number">IFHKVVT08ND</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="text-foreground font-medium">
                    Operating in Northern Norway (Tromsø region)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver & Competence */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Driver & Competence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team brings professional expertise and Arctic experience to every journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Main Driver: Jørgen
              </h3>
              <p className="text-muted-foreground mb-6">
                Our main driver Jørgen holds professional certifications, safety training and experience with Northern Norwegian road conditions. With years of expertise navigating Arctic roads in all seasons, Jørgen ensures safe and comfortable transport for all passengers.
              </p>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Safety First
                    </h3>
                    <p className="text-muted-foreground">
                      All our drivers undergo rigorous safety training specific to Arctic conditions, ensuring passenger safety in all weather situations.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Customer Service
                    </h3>
                    <p className="text-muted-foreground">
                      We pride ourselves on professional, friendly service that makes every journey comfortable and stress-free for our guests.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Reliability
              </h3>
              <p className="text-muted-foreground">
                We're there when you need us, on time, every time. Your guests can count on us.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Service
              </h3>
              <p className="text-muted-foreground">
                Professional, friendly service that exceeds expectations and creates positive experiences.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Flexibility
              </h3>
              <p className="text-muted-foreground">
                We adapt to your needs, offering customized solutions for every transport requirement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Partner With Us
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join our network of satisfied partners and experience the Frostline difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/partners'}
              data-testid="button-become-partner-about"
            >
              Become a Partner
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/contact'}
              data-testid="button-contact-about"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
