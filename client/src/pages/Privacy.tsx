import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Card } from '@/components/ui/card';
import { Shield, AlertCircle, Mail } from 'lucide-react';
import PageMeta from '@/components/common/PageMeta';

export default function Privacy() {
  const { t, language } = useLanguage();

  useEffect(() => {
    const defaultTitle = 'Frostline AS – Private Transfers & Tours in Northern Norway';
    const defaultDescription = 'Frostline AS offers reliable transport, private transfers and partner-based logistics in the Tromsø region. Safe, flexible and comfortable transport all year round.';

    const title = language === 'en' 
      ? 'Privacy Policy - Frostline AS' 
      : 'Personvernerklæring - Frostline AS';
    const description = language === 'en'
      ? 'Privacy policy for Frostline AS. Learn how we collect and process personal data in accordance with GDPR and Norwegian data protection laws.'
      : 'Personvernerklæring for Frostline AS. Lær hvordan vi samler inn og behandler personopplysninger i samsvar med GDPR og norsk personvernlovgivning.';

    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement('meta');
      metaOgTitle.setAttribute('property', 'og:title');
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.setAttribute('content', title);

    let metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (!metaOgDescription) {
      metaOgDescription = document.createElement('meta');
      metaOgDescription.setAttribute('property', 'og:description');
      document.head.appendChild(metaOgDescription);
    }
    metaOgDescription.setAttribute('content', description);

    let metaOgType = document.querySelector('meta[property="og:type"]');
    if (!metaOgType) {
      metaOgType = document.createElement('meta');
      metaOgType.setAttribute('property', 'og:type');
      document.head.appendChild(metaOgType);
    }
    metaOgType.setAttribute('content', 'website');

    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement('meta');
      metaOgUrl.setAttribute('property', 'og:url');
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.setAttribute('content', window.location.href);

    return () => {
      document.title = defaultTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', defaultDescription);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', defaultTitle);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', defaultDescription);
    };
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PageMeta
        titleEn="Privacy Policy"
        titleNo="Personvernerklæring"
        descriptionEn="Privacy policy for Frostline AS — how we collect, use and protect your personal data under GDPR."
        descriptionNo="Personvernerklæring for Frostline AS — hvordan vi samler inn, bruker og beskytter dine personopplysninger under GDPR."
        path="/privacy"
      />
      {/* Hero Header */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/80 to-primary/60">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <Shield className="w-14 h-14 text-white mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-3" data-testid="text-privacy-title">
              {t.privacy.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed" data-testid="text-privacy-intro">
              {t.privacy.intro}
            </p>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* Data Controller */}
            <div data-testid="section-controller">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                1. {t.privacy.controllerTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacy.controllerText}
              </p>
            </div>

            {/* What Data We Collect */}
            <div data-testid="section-data">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                2. {t.privacy.dataTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacy.dataText}
              </p>
            </div>

            {/* Purpose of Processing */}
            <div data-testid="section-purpose">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                3. {t.privacy.purposeTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacy.purposeText}
              </p>
            </div>

            {/* Legal Basis */}
            <div data-testid="section-basis">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                4. {t.privacy.basisTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacy.basisText}
              </p>
            </div>

            {/* Storage Period */}
            <div data-testid="section-storage">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                5. {t.privacy.storageTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacy.storageText}
              </p>
            </div>

            {/* Sharing of Data */}
            <div data-testid="section-sharing">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                6. {t.privacy.sharingTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacy.sharingText}
              </p>
            </div>

            {/* Your Rights */}
            <div data-testid="section-rights">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                7. {t.privacy.rightsTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacy.rightsText}
              </p>
            </div>

            {/* Contact */}
            <div data-testid="section-contact">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                8. {t.privacy.contactTitle}
              </h2>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t.privacy.contactText}
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Disclaimer */}
          <Card className="p-6 mt-12 bg-muted/30 border-muted-foreground/20" data-testid="card-disclaimer">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground italic">
                {t.privacy.disclaimer}
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
