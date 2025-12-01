import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language } = useLanguage();

  const labels = {
    en: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
      toggleTheme: 'Toggle theme',
    },
    no: {
      light: 'Lys',
      dark: 'Mørk',
      system: 'System',
      toggleTheme: 'Bytt tema',
    },
  };

  const t = labels[language];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-lg transition-all duration-normal ease-apple hover:bg-muted/60"
          aria-label={t.toggleTheme}
          data-testid="button-theme-toggle"
        >
          <Sun 
            className="h-[1.15rem] w-[1.15rem] rotate-0 scale-100 transition-all duration-normal ease-apple dark:-rotate-90 dark:scale-0" 
            strokeWidth={2}
          />
          <Moon 
            className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all duration-normal ease-apple dark:rotate-0 dark:scale-100" 
            strokeWidth={2}
          />
          <span className="sr-only">{t.toggleTheme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[120px] arctic-glass"
        sideOffset={8}
      >
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className="flex items-center gap-2 cursor-pointer"
          data-testid="menu-theme-light"
        >
          <Sun className="h-4 w-4" />
          <span>{t.light}</span>
          {theme === 'light' && (
            <span className="ml-auto text-primary">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className="flex items-center gap-2 cursor-pointer"
          data-testid="menu-theme-dark"
        >
          <Moon className="h-4 w-4" />
          <span>{t.dark}</span>
          {theme === 'dark' && (
            <span className="ml-auto text-primary">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className="flex items-center gap-2 cursor-pointer"
          data-testid="menu-theme-system"
        >
          <Monitor className="h-4 w-4" />
          <span>{t.system}</span>
          {theme === 'system' && (
            <span className="ml-auto text-primary">✓</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggleSimple() {
  const { toggleTheme, resolvedTheme } = useTheme();
  const { language } = useLanguage();

  const label = language === 'no' ? 'Bytt tema' : 'Toggle theme';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-lg transition-all duration-normal ease-apple hover:bg-muted/60"
      aria-label={label}
      data-testid="button-theme-toggle-simple"
    >
      <Sun 
        className="h-[1.15rem] w-[1.15rem] rotate-0 scale-100 transition-all duration-normal ease-apple dark:-rotate-90 dark:scale-0" 
        strokeWidth={2}
      />
      <Moon 
        className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all duration-normal ease-apple dark:rotate-0 dark:scale-100" 
        strokeWidth={2}
      />
      <span className="sr-only">{label}</span>
    </Button>
  );
}

export default ThemeToggle;
