import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3" data-testid="language-switcher">
      <Button
        size="sm"
        variant={language === 'no' ? 'default' : 'ghost'}
        onClick={() => setLanguage('no')}
        data-testid="button-language-no"
        title="Norsk"
        className={language === 'no' ? 'shadow-sm' : ''}
      >
        <Globe className="w-4 h-4 mr-1" />
        NO
      </Button>
      <Button
        size="sm"
        variant={language === 'en' ? 'default' : 'ghost'}
        onClick={() => setLanguage('en')}
        data-testid="button-language-en"
        title="English"
        className={language === 'en' ? 'shadow-sm' : ''}
      >
        <Globe className="w-4 h-4 mr-1" />
        EN
      </Button>
    </div>
  );
}
