import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function PremiumCookiePopup() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookiesAccepted) {
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    setIsAnimatingOut(true);
    
    setTimeout(() => {
      localStorage.setItem('cookiesAccepted', 'true');
      setIsVisible(false);
    }, 300);
  };

  const handleClose = () => {
    setIsAnimatingOut(true);
    
    setTimeout(() => {
      localStorage.setItem('cookiesAccepted', 'true');
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 max-w-xs sm:max-w-sm transition-all duration-500 ease-out ${
        isAnimatingOut
          ? 'opacity-0 translate-y-8'
          : 'opacity-100 translate-y-0'
      }`}
      style={{
        animation: isAnimatingOut ? 'none' : 'slideUpFadeIn 0.5s ease-out',
      }}
      data-testid="popup-cookie-consent"
    >
      <div className="relative bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close cookie popup"
          data-testid="button-close-cookie-popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="space-y-4 pr-6">
          <p className="text-white/90 text-sm leading-relaxed">
            {t.cookie.message}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="bg-white text-black px-4 py-2 rounded-lg font-medium shadow hover:bg-gray-200 transition-all"
              data-testid="button-accept-cookies"
            >
              {t.cookie.accept}
            </button>
            
            <Link
              href="/privacy"
              className="text-white/80 underline hover:text-white transition-colors text-sm self-center sm:self-auto px-2 py-2"
              data-testid="link-privacy-policy"
            >
              {t.cookie.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUpFadeIn {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
