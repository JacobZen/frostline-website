import { Link } from 'wouter';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer 
      className="bg-muted/30 border-t mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground font-heading tracking-wide">FROSTLINE AS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.companyDescription}
            </p>
            <address className="text-sm text-muted-foreground space-y-1 not-italic">
              <p>Org.nr: 936 520 553</p>
              <p>Kompaniveien 4</p>
              <p>1639 Gamle Fredrikstad, Norway</p>
            </address>
          </div>

          <nav className="space-y-4" aria-label="Quick links">
            <h3 className="text-lg font-semibold text-foreground">{t.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services" data-testid="footer-link-services">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {t.navbar.services}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="footer-link-about">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {t.navbar.about}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/partners" data-testid="footer-link-partners">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {t.navbar.partners}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="footer-link-contact">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {t.navbar.contact}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms" data-testid="footer-link-terms">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {t.footer.terms}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" data-testid="footer-link-privacy">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {t.footer.privacy}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.navbar.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry" 
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="footer-link-email"
                  aria-label="Email Frostline AS"
                >
                  post@frostline.as
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>{t.contact.availabilityText1}</span>
              </div>
              <p className="text-base text-foreground font-medium mt-4" data-testid="text-quick-response">
                {t.contact.phoneSubtext}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright.replace('2025', new Date().getFullYear().toString())}
            </p>
            <nav className="flex gap-6" aria-label="Legal links">
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
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
