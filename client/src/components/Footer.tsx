import { Link } from 'wouter';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">FROSTLINE AS</h3>
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
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.navbar.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@frostline.as</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{t.contact.availabilityText1}</span>
              </div>
              <p className="text-sm text-muted-foreground italic">
                {t.contact.phoneSubtext}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright.replace('2025', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
