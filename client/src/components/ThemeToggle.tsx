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
  const { theme, setTheme } = useTheme();
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
          className="relative h-8 w-8 rounded-md text-foreground/80 hover:text-foreground hover:bg-muted/60 dark:text-foreground/75 dark:hover:text-foreground dark:hover:bg-muted/40"
          aria-label={t.toggleTheme}
          data-testid="button-theme-toggle"
        >
          <Sun 
            className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" 
            strokeWidth={2}
          />
          <Moon 
            className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" 
            strokeWidth={2}
          />
          <span className="sr-only">{t.toggleTheme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-28 bg-popover/[0.98] dark:bg-popover backdrop-blur-sm border border-border/50"
        sideOffset={6}
      >
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className="flex items-center gap-2 cursor-pointer text-sm py-1.5"
          data-testid="menu-theme-light"
        >
          <Sun className="h-3.5 w-3.5" />
          <span>{t.light}</span>
          {theme === 'light' && (
            <span className="ml-auto text-primary text-xs">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className="flex items-center gap-2 cursor-pointer text-sm py-1.5"
          data-testid="menu-theme-dark"
        >
          <Moon className="h-3.5 w-3.5" />
          <span>{t.dark}</span>
          {theme === 'dark' && (
            <span className="ml-auto text-primary text-xs">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className="flex items-center gap-2 cursor-pointer text-sm py-1.5"
          data-testid="menu-theme-system"
        >
          <Monitor className="h-3.5 w-3.5" />
          <span>{t.system}</span>
          {theme === 'system' && (
            <span className="ml-auto text-primary text-xs">✓</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggleSimple() {
  const { toggleTheme } = useTheme();
  const { language } = useLanguage();

  const label = language === 'no' ? 'Bytt tema' : 'Toggle theme';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-8 w-8 rounded-md text-foreground/80 hover:text-foreground hover:bg-muted/60 dark:text-foreground/75 dark:hover:text-foreground dark:hover:bg-muted/40"
      aria-label={label}
      data-testid="button-theme-toggle-simple"
    >
      <Sun 
        className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" 
        strokeWidth={2}
      />
      <Moon 
        className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" 
        strokeWidth={2}
      />
      <span className="sr-only">{label}</span>
    </Button>
  );
}

export default ThemeToggle;
