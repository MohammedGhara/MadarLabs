import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, dir } = useLanguage();
  const { pathname } = useLocation();

  /** Transparent header over dark hero — need light text */
  const isOverDarkHero = pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#process', label: t('nav.process') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#testimonials', label: t('nav.reviews') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_-8px_hsl(222_47%_11%/0.08)] border-b border-border/60'
          : isOverDarkHero
            ? 'bg-black/25 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft ring-1 ring-white/25 group-hover:shadow-strong group-hover:scale-[1.04] transition-all duration-300 ease-out">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">M</span>
            </div>
            <span
              className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                isOverDarkHero
                  ? 'text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]'
                  : 'text-foreground'
              }`}
            >
              Madar
              {isOverDarkHero ? (
                <span className="text-cyan-200">Labs</span>
              ) : (
                <span className="text-gradient">Labs</span>
              )}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative inline-block pb-1 text-sm font-semibold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                  isOverDarkHero
                    ? 'text-white/95 hover:text-white after:bg-gradient-to-r after:from-white after:to-cyan-200 drop-shadow-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]'
                    : 'text-muted-foreground hover:text-foreground after:bg-gradient-to-r after:from-primary after:to-cyan-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher variant={isOverDarkHero ? 'onDark' : 'default'} />
            <a href="#contact" className="btn-primary text-sm px-5 shadow-md">
              {t('nav.getConsultation')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher variant={isOverDarkHero ? 'onDark' : 'default'} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isOverDarkHero ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted/50'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/60 px-4 py-6 animate-fade-in-up shadow-inner">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium text-foreground py-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center mt-4"
              >
                {t('nav.getConsultation')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
