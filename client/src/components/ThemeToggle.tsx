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
          className="relative h-9 w-9 rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-150 ease-out hover:scale-[1.03] active:scale-95"
          aria-label={t.toggleTheme}
          data-testid="button-theme-toggle"
        >
          <Sun 
            className="h-[18px] w-[18px] rotate-0 scale-100 transition-transform duration-150 ease-out dark:-rotate-90 dark:scale-0" 
            strokeWidth={2}
          />
          <Moon 
            className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-transform duration-150 ease-out dark:rotate-0 dark:scale-100" 
            strokeWidth={2}
          />
          <span className="sr-only">{t.toggleTheme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-28 bg-white dark:bg-[#0e1a27] border border-gray-200 dark:border-gray-700 shadow-[0_8px_24px_rgba(14,42,71,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        sideOffset={6}
      >
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className="flex items-center gap-2 cursor-pointer text-sm py-1.5 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-150"
          data-testid="menu-theme-light"
        >
          <Sun className="h-4 w-4" />
          <span>{t.light}</span>
          {theme === 'light' && (
            <span className="ml-auto text-[#0e2a47] dark:text-[#00e892] text-xs font-medium">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className="flex items-center gap-2 cursor-pointer text-sm py-1.5 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-150"
          data-testid="menu-theme-dark"
        >
          <Moon className="h-4 w-4" />
          <span>{t.dark}</span>
          {theme === 'dark' && (
            <span className="ml-auto text-[#0e2a47] dark:text-[#00e892] text-xs font-medium">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className="flex items-center gap-2 cursor-pointer text-sm py-1.5 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-150"
          data-testid="menu-theme-system"
        >
          <Monitor className="h-4 w-4" />
          <span>{t.system}</span>
          {theme === 'system' && (
            <span className="ml-auto text-[#0e2a47] dark:text-[#00e892] text-xs font-medium">✓</span>
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
      className="relative h-9 w-9 rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-150 ease-out hover:scale-[1.03] active:scale-95"
      aria-label={label}
      data-testid="button-theme-toggle-simple"
    >
      <Sun 
        className="h-[18px] w-[18px] rotate-0 scale-100 transition-transform duration-150 ease-out dark:-rotate-90 dark:scale-0" 
        strokeWidth={2}
      />
      <Moon 
        className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-transform duration-150 ease-out dark:rotate-0 dark:scale-100" 
        strokeWidth={2}
      />
      <span className="sr-only">{label}</span>
    </Button>
  );
}

export default ThemeToggle;
