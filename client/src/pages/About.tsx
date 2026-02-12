import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Award, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arcticMountains from '@assets/generated_images/norwegian_arctic_mountain_peaks.webp';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';
import PageMeta from '@/components/common/PageMeta';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function About() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const scrollRef = useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col" ref={scrollRef}>
      <PageMeta
        titleEn="About Us"
        titleNo="Om oss"
        descriptionEn="Learn about Frostline AS — our team, history and commitment to safe Arctic transport in Northern Norway."
        descriptionNo="Les om Frostline AS — vårt team, vår historie og vårt engasjement for trygg arktisk transport i Nord-Norge."
        path="/about"
      />
      <section className="relative h-[35vh] min-h-[260px] sm:h-[40vh] sm:min-h-[300px] flex items-center justify-center overflow-hidden" aria-label="About header">
        <div className="absolute inset-0 animate-fade-in-scale">
          <img
            src={arcticMountains}
            alt="Norwegian Arctic mountain peaks in Northern Norway"
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight animate-hero-text" data-testid="text-about-title">
            {t.about.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed animate-hero-text animate-delay-200">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 sm:py-24 bg-background">
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
      <section className="py-20 sm:py-24 bg-muted/30">
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
      <section className="py-20 sm:py-24 bg-background">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 scroll-reveal">
            {t.about.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-foreground/90 scroll-reveal scroll-reveal-delay-1">
            {t.about.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0 scroll-reveal scroll-reveal-delay-2">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] min-w-[160px] sm:min-w-[180px] rounded-xl bg-white/10 backdrop-blur-md border-white/30 border-2 text-white hover:bg-white/20 hover:border-white/60 no-default-hover-elevate shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setLocation('/partners')}
              data-testid="button-become-partner-about"
              aria-label="Learn about partnership opportunities"
            >
              {t.about.becomePartner}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] min-w-[160px] sm:min-w-[180px] rounded-xl bg-white/10 backdrop-blur-md border-white/30 border-2 text-white hover:bg-white/20 hover:border-white/60 no-default-hover-elevate shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setLocation('/contact')}
              data-testid="button-contact-about"
              aria-label="Contact Frostline AS"
            >
              {t.about.contactUs}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
