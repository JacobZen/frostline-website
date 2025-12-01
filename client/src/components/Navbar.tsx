import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@assets/Color logo - no background_1763624644274.png';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
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
      className="sticky top-0 z-50 bg-background/[0.97] dark:bg-background/[0.98] backdrop-blur-sm border-b border-border/40 dark:border-border/30 h-16 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" data-testid="link-logo" aria-label="Frostline AS - Home">
            <div className="flex items-center py-1.5 px-2 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-muted/50">
              <img 
                src={logo} 
                alt="Frostline AS" 
                className="h-8 sm:h-9 w-auto"
                width="120"
                height="36"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}>
                  <div
                    className={`px-3 lg:px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer ${
                      isActive(link.path)
                        ? 'bg-primary/12 text-primary dark:bg-primary/20 dark:text-primary'
                        : 'text-foreground/90 hover:text-foreground hover:bg-muted/60 dark:text-foreground/85 dark:hover:text-foreground dark:hover:bg-muted/40'
                    }`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            <div className="ml-3 flex items-center gap-1 pl-3 border-l border-border/50">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden relative h-9 w-9 text-foreground hover:bg-muted/60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Menu aria-hidden="true" className="w-5 h-5" />
            </span>
            <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
              <X aria-hidden="true" className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-250 ease-out ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Solid background overlay */}
        <div 
          className={`absolute inset-0 bg-background/[0.98] dark:bg-background backdrop-blur-sm transition-opacity duration-200 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className={`relative px-4 py-4 space-y-4 transition-all duration-200 ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}>
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link key={link.path} href={link.path}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 cursor-pointer ${
                    isActive(link.path)
                      ? 'bg-primary/12 text-primary dark:bg-primary/20'
                      : 'text-foreground/90 hover:bg-muted/60 dark:text-foreground/85 dark:hover:bg-muted/40'
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 pt-3 border-t border-border/40">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
