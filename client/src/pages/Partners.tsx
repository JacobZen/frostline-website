import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MessageCircle, ShieldCheck, Users, Calendar, Car } from 'lucide-react';
import partnerImage from '@assets/generated_images/partnership_collaboration_visual.png';

export default function Partners() {
  const benefits = [
    {
      icon: Users,
      title: 'Dedicated Driver',
      description: 'Your guests receive personalized attention from our experienced professional drivers.',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'We adapt to your operational needs with customizable pickup and drop-off times.',
    },
    {
      icon: ShieldCheck,
      title: 'High Reliability',
      description: 'Consistent, punctual service you can depend on for all your transport logistics.',
    },
    {
      icon: MessageCircle,
      title: 'Quick Communication',
      description: 'Fast response times and clear communication channels for seamless coordination.',
    },
    {
      icon: Car,
      title: 'Clean & Comfortable Vehicle',
      description: 'Modern, well-maintained vehicles that provide a premium experience for your guests.',
    },
    {
      icon: Clock,
      title: 'Year-Round Service',
      description: 'Reliable transport in all seasons and weather conditions throughout Northern Norway.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={partnerImage}
            alt="Partnership collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4" data-testid="text-partners-title">
            Partner With Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Building long-term relationships with travel professionals
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            Your Trusted Transport Partner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work with DMCs, travel agencies and activity providers. Our goal is long-term cooperation where your guests receive top service. With Frostline AS as your transport partner, you can focus on your core business while we handle the logistics.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for reliable, professional transport logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Who We Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                DMCs & Travel Agencies
              </h3>
              <p className="text-muted-foreground">
                We provide reliable logistics for destination management companies and travel agencies, ensuring seamless transport for your clients throughout their Northern Norway experience.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Hotels & Accommodations
              </h3>
              <p className="text-muted-foreground">
                Partner with us for consistent airport transfers and excursion transport, giving your guests a premium arrival and departure experience.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Tour & Activity Operators
              </h3>
              <p className="text-muted-foreground">
                We handle the transport logistics so you can focus on delivering exceptional experiences. Reliable pickups and drop-offs for all your activities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting started is simple and straightforward
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Initial Contact
                  </h3>
                  <p className="text-muted-foreground">
                    Reach out to us via our contact form or email. Tell us about your transport needs and expected volume.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    We'll discuss your specific requirements, scheduling needs, and how we can best support your operations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Partnership Agreement
                  </h3>
                  <p className="text-muted-foreground">
                    We establish clear terms, pricing, and communication protocols that work for both parties.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy reliable service with dedicated support. We're always available to adjust and optimize as your needs evolve.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let's discuss how we can support your transport needs in Northern Norway.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
            onClick={() => window.location.href = '/contact'}
            data-testid="button-request-partnership"
          >
            Request Partnership
          </Button>
        </div>
      </section>
    </div>
  );
}
