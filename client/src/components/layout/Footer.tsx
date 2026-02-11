import { Link } from 'wouter';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer 
      className="bg-gradient-to-b from-muted/15 to-muted/35 border-t border-border/30 mt-auto relative"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle Arctic frost top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-5">
            <h3 className="text-base font-semibold text-foreground font-heading tracking-wider uppercase">FROSTLINE AS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t.footer.companyDescription}
            </p>
            <address className="text-sm text-muted-foreground space-y-1.5 not-italic">
              <p className="font-medium text-foreground/80">Org.nr: 936 520 553</p>
              <p>Kompaniveien 4</p>
              <p>1639 Gamle Fredrikstad, Norway</p>
            </address>
          </div>

          {/* Quick Links */}
          <nav className="space-y-5" aria-label="Quick links">
            <h3 className="text-base font-semibold text-foreground tracking-wide">{t.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/services" data-testid="footer-link-services">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.navbar.services}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="footer-link-about">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.navbar.about}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/partners" data-testid="footer-link-partners">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.navbar.partners}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="footer-link-contact">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.navbar.contact}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/routes" data-testid="footer-link-routes">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.footer.routesLink}
                  </span>
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-border/30">
                <Link href="/terms" data-testid="footer-link-terms">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.footer.terms}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" data-testid="footer-link-privacy">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.footer.privacy}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-base font-semibold text-foreground tracking-wide">{t.navbar.contact}</h3>
            <div className="space-y-4">
              <a 
                href="mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry" 
                className="flex items-center gap-3 text-sm group" 
                data-testid="footer-link-email"
                aria-label="Email Frostline AS"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                  <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                </span>
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                  post@frostline.as
                </span>
              </a>
              <a 
                href="tel:99157437" 
                className="flex items-center gap-3 text-sm group" 
                data-testid="footer-link-phone"
                aria-label="Call Frostline AS"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                  <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                </span>
                <span className="text-foreground group-hover:text-primary transition-colors duration-200 font-medium">
                  {t.contact.phoneNumber}
                </span>
              </a>
              <p className="text-sm text-foreground/80 font-medium mt-5 pt-4 border-t border-border/30" data-testid="text-quick-response">
                {t.contact.phoneSubtext}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground/80">
              {t.footer.copyright.replace('2025', new Date().getFullYear().toString())}
            </p>
            <nav className="flex gap-6" aria-label="Legal links">
              <Link href="/terms" data-testid="footer-bottom-link-terms">
                <span className="text-sm text-muted-foreground/70 hover:text-primary cursor-pointer transition-colors duration-200">
                  {t.footer.terms}
                </span>
              </Link>
              <Link href="/privacy" data-testid="footer-bottom-link-privacy">
                <span className="text-sm text-muted-foreground/70 hover:text-primary cursor-pointer transition-colors duration-200">
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
