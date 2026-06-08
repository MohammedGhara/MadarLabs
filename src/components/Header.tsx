import { useState, useEffect } from 'react';
import {
  Menu,
  Home,
  Layers,
  LayoutGrid,
  ListOrdered,
  CircleHelp,
  Mail,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, dir } = useLanguage();
  const { pathname } = useLocation();

  /** Hamburger sits on the start edge — drawer opens from that same side */
  const drawerSide = dir === 'rtl' ? 'right' : 'left';

  /** Transparent header over dark hero — need light text */
  const isOverDarkHero = pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', '/');
  };

  const handleNavClick = (to: string) => {
    setIsMobileMenuOpen(false);
    if (to === '/' && pathname === '/') {
      scrollToTop();
    }
  };

  const navLinks: { to: string; label: string; icon: LucideIcon }[] = [
    { to: '/', label: t('nav.home'), icon: Home },
    { to: '/#services', label: t('nav.services'), icon: Layers },
    { to: '/#portfolio', label: t('nav.portfolio'), icon: LayoutGrid },
    { to: '/#process', label: t('nav.process'), icon: ListOrdered },
    { to: '/#faq', label: t('nav.faq'), icon: CircleHelp },
    { to: '/#contact', label: t('nav.contact'), icon: Mail },
  ];

  /** Hash links go to home sections; standalone paths are their own routes */
  const isStandaloneNavActive = (to: string) =>
    to === '/' ? pathname === '/' : !to.includes('#') && pathname === to;

  const desktopLinkClass = (to: string) => {
    const base =
      'relative inline-block pb-1 text-sm font-semibold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:transition-all after:duration-300 after:ease-out hover:after:w-full';
    if (isOverDarkHero) {
      return `${base} text-white/95 hover:text-white after:bg-gradient-to-r after:from-white after:to-cyan-200 drop-shadow-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]`;
    }
    if (isStandaloneNavActive(to)) {
      return `${base} text-foreground after:w-full after:bg-gradient-to-r after:from-primary after:to-cyan-400`;
    }
    return `${base} text-muted-foreground hover:text-foreground after:bg-gradient-to-r after:from-primary after:to-cyan-400`;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 transition-all duration-300 ease-out ${
        isMobileMenuOpen ? 'z-[40]' : 'z-[100]'
      } ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/90 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_-8px_hsl(222_47%_11%/0.08)] border-b border-border/60'
          : isOverDarkHero
            ? 'bg-black/25 backdrop-blur-md border-b border-white/10'
            : 'bg-background/70 backdrop-blur-md border-b border-border/40'
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Mobile menu (start corner) + logo */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors shrink-0 ${
                isOverDarkHero ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted/50'
              }`}
              aria-label={t('common.toggleMenu') as string}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2.5 group">
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={desktopLinkClass(link.to)}
                onClick={() => link.to === '/' && pathname === '/' && scrollToTop()}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher variant={isOverDarkHero ? 'onDark' : 'default'} />
            <Link to="/#contact" className="btn-primary text-sm px-5 shadow-md">
              {t('nav.getConsultation')}
            </Link>
          </div>

          {/* Mobile — language on the opposite corner */}
          <div className="lg:hidden flex items-center ms-auto">
            <LanguageSwitcher variant={isOverDarkHero ? 'onDark' : 'default'} />
          </div>
        </nav>
      </div>

      {/* Mobile side drawer */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent
          side={drawerSide}
          dir={dir}
          className={`flex h-full w-[min(88vw,20rem)] flex-col gap-0 p-0 sm:max-w-xs ${
            drawerSide === 'right' ? '[&>button]:left-4 [&>button]:right-auto' : ''
          }`}
        >
          <SheetHeader className="mobile-drawer-header border-b border-border/60 px-6 py-5 text-start opacity-0">
            <SheetTitle className="flex items-center gap-2.5 text-start" dir={dir}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Madar<span className="text-gradient">Labs</span>
              </span>
            </SheetTitle>
          </SheetHeader>

          <nav className="mobile-drawer-nav flex flex-col gap-1 px-4 py-5" dir={dir}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isStandaloneNavActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  dir={dir}
                  className={cn(
                    'mobile-drawer-item flex items-center gap-3 rounded-xl px-3 py-3.5 text-base font-medium transition-colors hover:bg-primary/5 active:bg-primary/10',
                    active ? 'bg-primary/10 text-primary' : 'text-foreground'
                  )}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      active ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mobile-drawer-cta mt-auto border-t border-border/60 px-4 py-5" dir={dir}>
            <Link
              to="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              dir={dir}
              className="btn-primary flex w-full items-center justify-center gap-2"
            >
              <Sparkles size={18} />
              {t('nav.getConsultation')}
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
