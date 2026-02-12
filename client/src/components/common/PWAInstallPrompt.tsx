import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const { language } = useLanguage();
  const [, setLoc] = useLocation();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  const translations = {
    en: {
      title: 'Install Frostline',
      description: 'Add to your home screen for quick access to Arctic transfers.',
      iosDescription: 'Tap here for installation instructions',
      install: 'Install App',
      dismiss: 'Not Now',
      learnMore: 'Tap Share \u2192 Add to Home Screen',
    },
    no: {
      title: 'Installer Frostline',
      description: 'Legg til p\u00e5 startskjermen for rask tilgang til arktiske transporter.',
      iosDescription: 'Trykk her for installasjonsveiledning',
      install: 'Installer App',
      dismiss: 'Ikke n\u00e5',
      learnMore: 'Trykk Del \u2192 Legg til Hjem-skjerm',
    },
  };

  const t = translations[language];

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    setIsIOS(isIOSDevice);

    const isInStandaloneMode = 
      window.matchMedia('(display-mode: standalone)').matches ||
      ('standalone' in navigator && (navigator as { standalone?: boolean }).standalone === true);
    setIsStandalone(isInStandaloneMode);

    const dismissed = localStorage.getItem('pwaPromptDismissed');
    const dismissedTime = dismissed ? parseInt(dismissed, 10) : 0;
    const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
    
    if (daysSinceDismissed < 7) {
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (isIOSDevice && !isInStandaloneMode) {
      setTimeout(() => {
        setShowPrompt(true);
      }, 5000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('[PWA] User accepted install prompt');
      } else {
        console.log('[PWA] User dismissed install prompt');
      }
      
      setDeferredPrompt(null);
      handleClose();
    } catch (error) {
      console.error('[PWA] Install error:', error);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem('pwaPromptDismissed', Date.now().toString());
    
    setTimeout(() => {
      setShowPrompt(false);
      setIsClosing(false);
    }, 300);
  };

  const handleNavigateToInstall = () => {
    handleClose();
    setTimeout(() => {
      setLoc('/install');
    }, 100);
  };

  if (!showPrompt || isStandalone) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[380px] z-40 transition-all duration-300 ease-out ${
        isClosing 
          ? 'opacity-0 translate-y-4' 
          : 'opacity-100 translate-y-0 animate-in slide-in-from-bottom-4'
      }`}
      role="dialog"
      aria-label={t.title}
      data-testid="pwa-install-prompt"
    >
      <div className="relative bg-card/95 backdrop-blur-xl backdrop-saturate-150 border border-border/40 rounded-2xl shadow-[0_12px_40px_-4px_rgba(12,30,40,0.15)] p-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted/80 transition-colors z-10"
          aria-label="Close"
          data-testid="button-close-pwa-prompt"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <div
          className="relative flex items-start gap-4 cursor-pointer"
          onClick={isIOS ? handleNavigateToInstall : undefined}
          data-testid="pwa-prompt-content"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <Smartphone className="w-7 h-7 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0 pr-6">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {t.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isIOS ? t.iosDescription : t.description}
            </p>
          </div>
        </div>

        {!isIOS && deferredPrompt && (
          <div className="relative mt-4 flex gap-3">
            <Button
              onClick={handleInstall}
              className="flex-1 rounded-xl"
              data-testid="button-install-pwa"
            >
              <Download className="w-4 h-4 mr-2" />
              {t.install}
            </Button>
            <Button
              onClick={handleClose}
              variant="outline"
              className="rounded-xl"
              data-testid="button-dismiss-pwa"
            >
              {t.dismiss}
            </Button>
          </div>
        )}

        {isIOS && (
          <div className="relative mt-4">
            <Button
              onClick={handleNavigateToInstall}
              variant="outline"
              className="w-full rounded-xl"
              data-testid="button-install-instructions"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L8 6h3v8h2V6h3L12 2zM4 14v6a2 2 0 002 2h12a2 2 0 002-2v-6h-2v6H6v-6H4z"/>
              </svg>
              {t.learnMore}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
