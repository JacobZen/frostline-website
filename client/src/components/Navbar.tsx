import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@assets/Color logo - no background_1763624644274.png';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/language-context';

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { path: '/', label: t.navbar.home },
    { path: '/services', label: t.navbar.services },
    { path: '/about', label: t.navbar.about },
    { path: '/partners', label: t.navbar.partners },
    { path: '/contact', label: t.navbar.contact },
  ];

  const isActive = (path: string) => location === path;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b h-16"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" data-testid="link-logo" aria-label="Frostline AS - Home">
            <div className="flex items-center hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all cursor-pointer">
              <img 
                src={logo} 
                alt="Frostline AS" 
                className="h-10 w-auto"
                width="120"
                height="40"
                loading="eager"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}>
                  <div
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer hover-elevate active-elevate-2 ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground'
                    }`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      <div 
        id="mobile-menu"
        className={`md:hidden border-t bg-background fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-200 ease-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="px-4 py-4 space-y-4">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium hover-elevate active-elevate-2 cursor-pointer ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground'
                  }`}
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center pt-2 border-t">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
