import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2" data-testid="language-switcher">
      <Button
        size="icon"
        variant={language === 'no' ? 'default' : 'ghost'}
        onClick={() => setLanguage('no')}
        className="w-9 h-9 text-lg"
        data-testid="button-language-no"
        title="Norsk"
      >
        🇳🇴
      </Button>
      <Button
        size="icon"
        variant={language === 'en' ? 'default' : 'ghost'}
        onClick={() => setLanguage('en')}
        className="w-9 h-9 text-lg"
        data-testid="button-language-en"
        title="English"
      >
        🇬🇧
      </Button>
    </div>
  );
}
