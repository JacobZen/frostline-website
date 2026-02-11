import { useLanguage } from '@/contexts/language-context';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full bg-muted/60 dark:bg-white/10 p-0.5 border border-border/50"
      data-testid="language-switcher"
      role="radiogroup"
      aria-label="Select language"
    >
      <button
        onClick={() => setLanguage('no')}
        className={`relative px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
          language === 'no'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        data-testid="button-language-no"
        title="Norsk"
        role="radio"
        aria-checked={language === 'no'}
      >
        NO
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        data-testid="button-language-en"
        title="English"
        role="radio"
        aria-checked={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
