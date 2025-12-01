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
      className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 h-16 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - perfectly centered vertically */}
          <Link href="/" data-testid="link-logo" aria-label="Frostline AS - Home">
            <div className="flex items-center justify-center hover-elevate active-elevate-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer">
              <img 
                src={logo} 
                alt="Frostline AS" 
                className="h-9 sm:h-10 w-auto"
                width="120"
                height="40"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}>
                  <div
                    className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden relative focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Menu aria-hidden="true" className="w-5 h-5" />
            </span>
            <span className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
              <X aria-hidden="true" className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-300 ease-out ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop blur overlay */}
        <div 
          className={`absolute inset-0 bg-background/95 backdrop-blur-lg transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className={`relative px-4 py-6 space-y-6 transition-all duration-300 ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link key={link.path} href={link.path}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 hover-elevate active-elevate-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted/50'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center pt-4 border-t border-border/50">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
