import { Link } from 'wouter';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground font-heading tracking-wide">FROSTLINE AS</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.companyDescription}
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Org.nr: 936 520 553</p>
              <p>Kompaniveien 4</p>
              <p>1639 Gamle Fredrikstad, Norway</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.footer.quickLinks}</h3>
            <div className="flex flex-col gap-2">
              <Link href="/services" data-testid="footer-link-services">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.navbar.services}
                </span>
              </Link>
              <Link href="/about" data-testid="footer-link-about">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.navbar.about}
                </span>
              </Link>
              <Link href="/partners" data-testid="footer-link-partners">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.navbar.partners}
                </span>
              </Link>
              <Link href="/contact" data-testid="footer-link-contact">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.navbar.contact}
                </span>
              </Link>
              <Link href="/terms" data-testid="footer-link-terms">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.footer.terms}
                </span>
              </Link>
              <Link href="/privacy" data-testid="footer-link-privacy">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.footer.privacy}
                </span>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.navbar.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-email">
                  post@frostline.as
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{t.contact.availabilityText1}</span>
              </div>
              <p className="text-base text-foreground font-medium mt-4" data-testid="text-quick-response">
                {t.contact.phoneSubtext}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright.replace('2025', new Date().getFullYear().toString())}
            </p>
            <div className="flex gap-6">
              <Link href="/terms" data-testid="footer-bottom-link-terms">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.footer.terms}
                </span>
              </Link>
              <Link href="/privacy" data-testid="footer-bottom-link-privacy">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {t.footer.privacy}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
