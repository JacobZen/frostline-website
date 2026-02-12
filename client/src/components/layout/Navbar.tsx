import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@assets/Color logo - no background_1763624644274.webp';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { ThemeToggle } from '@/components/common/ThemeToggle';
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
    { path: '/routes', label: t.navbar.routes },
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
      className="sticky top-0 z-50 h-16 bg-white dark:bg-[#091e1b] border-b border-gray-200 dark:border-gray-800 shadow-[0_4px_20px_rgba(13,41,37,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left: Logo only */}
          <Link href="/" data-testid="link-logo" aria-label="Frostline AS - Home">
            <div className="flex-shrink-0 flex items-center py-1 px-1 rounded-md transition-all duration-150 ease-out cursor-pointer hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]">
              <img 
                src={logo} 
                alt="Frostline AS" 
                className="h-8 w-auto dark:brightness-0 dark:invert"
                width="100"
                height="32"
                loading="eager"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
              />
              <span className="hidden text-lg font-heading font-bold text-foreground tracking-tight">Frostline AS</span>
            </div>
          </Link>

          {/* Right: Nav links + Language + Theme toggle */}
          <div className="hidden md:flex items-center">
            {/* Nav links */}
            <div className="flex items-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}>
                  <div
                    className={`flex-shrink-0 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ease-out cursor-pointer ${
                      isActive(link.path)
                        ? 'bg-[#0d2925]/10 text-[#0d2925] dark:bg-[#00e892]/15 dark:text-[#00e892]'
                        : 'text-gray-900 dark:text-gray-100 hover:text-[#0d2925] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-[1.03]'
                    }`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Controls: Theme + Language */}
            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden flex-shrink-0 relative h-10 w-10 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-150 ease-out"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`absolute transition-all duration-150 ease-out ${mobileMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
              <Menu aria-hidden="true" className="w-5 h-5" />
            </span>
            <span className={`absolute transition-all duration-150 ease-out ${mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}>
              <X aria-hidden="true" className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay - 100% SOLID */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-150 ease-out ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* 100% Solid background - NO transparency */}
        <div 
          className={`absolute inset-0 bg-white dark:bg-[#091e1b] transition-opacity duration-150 ease-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className={`relative px-4 py-4 transition-all duration-150 ease-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}>
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link key={link.path} href={link.path}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 ease-out cursor-pointer ${
                    isActive(link.path)
                      ? 'bg-[#0d2925]/10 text-[#0d2925] dark:bg-[#00e892]/15 dark:text-[#00e892]'
                      : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-[1.01]'
                  }`}
                  style={{ transitionDelay: `${index * 20}ms` }}
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Mobile controls */}
          <div className="flex justify-center items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
