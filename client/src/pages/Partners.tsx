import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MessageCircle, ShieldCheck, Users, Calendar, Car } from 'lucide-react';
import arcticFjord from '@assets/generated_images/arctic_fjord_northern_norway.png';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

export default function Partners() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  
  const benefitIcons = [Users, Calendar, ShieldCheck, MessageCircle, Car, Clock];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={arcticFjord}
            alt="Arctic fjord in Northern Norway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4" data-testid="text-partners-title">
            {t.partners.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            {t.partners.introTitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.partners.introText}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              {t.partners.benefitsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.partners.benefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.partners.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
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
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              {t.partners.whoWeWorkWith}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t.partners.dmcs}
              </h3>
              <p className="text-muted-foreground">
                {t.partners.dmcsText}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t.partners.hotels}
              </h3>
              <p className="text-muted-foreground">
                {t.partners.hotelsText}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t.partners.tourOperators}
              </h3>
              <p className="text-muted-foreground">
                {t.partners.tourOperatorsText}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              {t.partners.howItWorks}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.partners.howItWorksSubtitle}
            </p>
          </div>

          <div className="space-y-6">
            {[
              { title: t.partners.step1Title, text: t.partners.step1Text },
              { title: t.partners.step2Title, text: t.partners.step2Text },
              { title: t.partners.step3Title, text: t.partners.step3Text },
              { title: t.partners.step4Title, text: t.partners.step4Text },
            ].map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            {t.partners.ctaTitle}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {t.partners.ctaSubtitle}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 border-2 text-white hover:bg-white/20 hover:border-white no-default-hover-elevate shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.location.href = 'mailto:post@frostline.as?subject=Partnership%20Inquiry%20-%20Frostline%20AS'}
            data-testid="button-request-partnership"
          >
            {t.partners.requestPartnership}
          </Button>
        </div>
      </section>
    </div>
  );
}
