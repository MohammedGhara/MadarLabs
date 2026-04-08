import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'he', label: 'עברית', flag: '🇮🇱' },
];

interface LanguageSwitcherProps {
  /** Light icon/text for use over dark hero video */
  variant?: 'default' | 'onDark';
}

const LanguageSwitcher = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  
  const currentLang = languages.find(l => l.code === language);

  const triggerClass =
    variant === 'onDark'
      ? 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none'
      : 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors focus:outline-none';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClass}>
        <Globe size={18} />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              language === lang.code ? 'bg-primary/10 text-primary' : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
