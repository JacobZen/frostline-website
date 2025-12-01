import { Button } from '@/components/ui/button';
import { MapPin, Mail, Building2, ArrowRight, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';
import heroImage from '@assets/IMG_9188_1763628868230.jpeg';

export default function Contact() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <section 
        className="relative h-[240px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Contact header"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 backdrop-brightness-75" aria-hidden="true" />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 leading-tight" data-testid="text-contact-title">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* SECTION 2 — CONTACT CARDS (3 CARDS) */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — Address */}
            <div 
              className="bg-card/80 backdrop-blur-xl backdrop-saturate-150 border border-border/40 rounded-2xl shadow-[0_8px_30px_-4px_rgba(14,42,71,0.08)] p-6 text-center transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_40px_-4px_rgba(14,42,71,0.12)]"
              data-testid="card-quick-location"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t.contact.location}
              </h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Kompaniveien 4</p>
                <p>1639 Gamle Fredrikstad</p>
                <p>Norway</p>
              </div>
            </div>

            {/* Card 2 — Email */}
            <div 
              className="bg-card/80 backdrop-blur-xl backdrop-saturate-150 border border-border/40 rounded-2xl shadow-[0_8px_30px_-4px_rgba(14,42,71,0.08)] p-6 text-center transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_40px_-4px_rgba(14,42,71,0.12)]"
              data-testid="card-quick-email"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t.contact.emailLabel}
              </h3>
              <a 
                href="mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry"
                className="text-sm text-primary hover:underline transition-colors font-medium"
                data-testid="link-email-quick"
              >
                post@frostline.as
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                {t.contact.phoneSubtext}
              </p>
            </div>

            {/* Card 3 — Organization */}
            <div 
              className="bg-card/80 backdrop-blur-xl backdrop-saturate-150 border border-border/40 rounded-2xl shadow-[0_8px_30px_-4px_rgba(14,42,71,0.08)] p-6 text-center transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_40px_-4px_rgba(14,42,71,0.12)]"
              data-testid="card-company-details"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t.contact.companyDetails}
              </h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-medium text-foreground" data-testid="text-org-number">Org.nr: 936 520 553</p>
                <p className="text-xs mt-2">{t.contact.companyName}</p>
                <p className="text-xs">Passasjertransport på forespørsel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DIRECT CONTACT CTA BLOCK */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            {t.contact.partnershipTitle || "Need transport or want to discuss a partnership?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.contact.partnershipText || "Contact us today — we'll get back to you quickly."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <a
              href="mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 min-h-[48px] rounded-xl font-medium shadow-lg hover:shadow-xl transition-all hover-elevate active-elevate-2"
              data-testid="button-send-email"
              aria-label="Send email to Frostline AS"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              {t.contact.sendButton || "Send Email"}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            
            <button
              onClick={() => setLocation('/partners')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary/40 text-foreground px-6 py-3 min-h-[48px] rounded-xl font-medium hover:bg-primary/10 transition-all hover-elevate active-elevate-2"
              data-testid="button-partnership-info"
              aria-label="View partnership information"
            >
              <Users className="w-5 h-5" aria-hidden="true" />
              {t.contact.partnershipButton || "Partner Inquiries"}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — OPTIONAL MAP BLOCK */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            {t.contact.location}
          </h2>
          <div 
            className="w-full h-64 bg-muted/40 dark:bg-gray-800/40 border border-border dark:border-white/20 rounded-2xl backdrop-blur-xl shadow-inner flex items-center justify-center"
            data-testid="card-map-placeholder"
          >
            <div className="text-center px-4">
              <MapPin className="w-12 h-12 text-muted-foreground/70 mx-auto mb-3" aria-hidden="true" />
              <p className="text-muted-foreground/70 text-sm">
                {t.contact.locationText2 || "Kompaniveien 4, 1639 Gamle Fredrikstad, Norway"}
              </p>
              <p className="text-muted-foreground/50 text-xs mt-2">
                Google Maps preview will be added here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="py-16 bg-background border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t.contact.availability}
              </h3>
              <p className="text-muted-foreground" data-testid="text-availability-quick">
                {t.contact.availabilityText1}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t.contact.availabilityText2}
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t.contact.phoneLabel}
              </h3>
              <p className="text-muted-foreground" data-testid="text-phone-quick">
                {t.contact.phoneText}
              </p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                {t.contact.phoneSubtext}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
