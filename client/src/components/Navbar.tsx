import { useState } from 'react';
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

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all cursor-pointer">
              <img 
                src={logo} 
                alt="Frostline AS" 
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                link.path === '/contact' ? (
                  <a
                    key={link.path}
                    href="mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry"
                    className="px-4 py-2 rounded-md text-sm font-medium transition-all hover-elevate active-elevate-2 text-foreground"
                    data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}>
                    <div
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer hover-elevate active-elevate-2 ${
                        isActive(link.path)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                )
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                link.path === '/contact' ? (
                  <a
                    key={link.path}
                    href="mailto:post@frostline.as?subject=Frostline%20AS%20Inquiry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-md text-base font-medium hover-elevate active-elevate-2 text-foreground"
                    data-testid={`mobile-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.path} href={link.path}>
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-md text-base font-medium hover-elevate active-elevate-2 cursor-pointer ${
                        isActive(link.path)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground'
                      }`}
                      data-testid={`mobile-link-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </div>
                  </Link>
                )
              ))}
            </div>
            <div className="flex justify-center pt-2 border-t">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
