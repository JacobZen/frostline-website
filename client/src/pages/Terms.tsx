import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Card } from '@/components/ui/card';
import { FileText, AlertCircle } from 'lucide-react';
import PageMeta from '@/components/common/PageMeta';

export default function Terms() {
  const { t, language } = useLanguage();

  useEffect(() => {
    const defaultTitle = 'Frostline AS – Private Transfers & Tours in Northern Norway';
    const defaultDescription = 'Frostline AS offers reliable transport, private transfers and partner-based logistics in the Tromsø region. Safe, flexible and comfortable transport all year round.';

    const title = language === 'en' 
      ? 'Terms & Conditions - Frostline AS' 
      : 'Vilkår og betingelser - Frostline AS';
    const description = language === 'en'
      ? 'Terms and conditions for using Frostline AS transport services in Northern Norway. Read about bookings, prices, cancellations, and liability.'
      : 'Vilkår og betingelser for bruk av Frostline AS transporttjenester i Nord-Norge. Les om bestillinger, priser, avbestillinger og ansvar.';

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
        titleEn="Terms & Conditions"
        titleNo="Vilkår og betingelser"
        descriptionEn="Terms and conditions for transport services provided by Frostline AS in Northern Norway."
        descriptionNo="Vilkår og betingelser for transporttjenester levert av Frostline AS i Nord-Norge."
        path="/terms"
      />
      {/* Hero Header */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/80 to-primary/60">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <FileText className="w-14 h-14 text-white mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-3" data-testid="text-terms-title">
              {t.terms.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed" data-testid="text-terms-intro">
              {t.terms.intro}
            </p>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Scope of Services */}
            <div data-testid="section-scope">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                1. {t.terms.scopeTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.scopeText}
              </p>
            </div>

            {/* Bookings and Enquiries */}
            <div data-testid="section-bookings">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                2. {t.terms.bookingsTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.bookingsText}
              </p>
            </div>

            {/* Prices and Payment */}
            <div data-testid="section-prices">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                3. {t.terms.pricesTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.pricesText}
              </p>
            </div>

            {/* Cancellations and Changes */}
            <div data-testid="section-cancellations">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                4. {t.terms.cancellationsTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.cancellationsText}
              </p>
            </div>

            {/* Liability and Responsibility */}
            <div data-testid="section-liability">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                5. {t.terms.liabilityTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.liabilityText}
              </p>
            </div>

            {/* Governing Law and Disputes */}
            <div data-testid="section-law">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                6. {t.terms.lawTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.lawText}
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <Card className="p-6 mt-12 bg-muted/30 border-muted-foreground/20" data-testid="card-disclaimer">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground italic">
                {t.terms.disclaimer}
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
