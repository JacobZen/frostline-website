import { Card } from '@/components/ui/card';
import { Award, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@assets/generated_images/tromsø_region_landscape.png';
import { useLanguage } from '@/contexts/language-context';

export default function About() {
  const { t } = useLanguage();

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
            {t.about.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                {t.about.ourStory}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.storyText1}</p>
                <p>{t.about.storyText2}</p>
                <p>{t.about.storyText3}</p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-md">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {t.about.companyDetails}
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.about.legalName}</div>
                  <div className="text-foreground font-medium">FROSTLINE AS</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.about.orgNumber}</div>
                  <div className="text-foreground font-medium" data-testid="text-org-number">936 520 553</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.about.address}</div>
                  <div className="text-foreground font-medium">
                    Kompaniveien 4<br />
                    1639 Gamle Fredrikstad<br />
                    Norway
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.about.naceIndustry}</div>
                  <div className="text-foreground font-medium">
                    Passasjertransport på forespørsel (49.330)
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
              {t.about.driverCompetence}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.about.driverCompetenceSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t.about.mainDriver}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.about.mainDriverText}
              </p>
              <div className="space-y-2">
                {t.about.certifications.map((cert, index) => (
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
                      {t.about.safetyFirst}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.about.safetyFirstText}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t.about.customerService}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.about.customerServiceText}
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
              {t.about.ourValues}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t.about.reliability}
              </h3>
              <p className="text-muted-foreground">
                {t.about.reliabilityText}
              </p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t.about.service}
              </h3>
              <p className="text-muted-foreground">
                {t.about.serviceText}
              </p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t.about.flexibility}
              </h3>
              <p className="text-muted-foreground">
                {t.about.flexibilityText}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            {t.about.ctaTitle}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {t.about.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/partners'}
              data-testid="button-become-partner-about"
            >
              {t.about.becomePartner}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 no-default-hover-elevate"
              onClick={() => window.location.href = '/contact'}
              data-testid="button-contact-about"
            >
              {t.about.contactUs}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
