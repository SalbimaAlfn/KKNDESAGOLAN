import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useScrollSpy } from '../hooks/useScrollSpy';

const logoUrl = new URL('../assets/logoKKN.png', import.meta.url).href;

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Tim', href: '#team' },
  { label: 'Album', href: '/album' },
];

export function Navbar({ isDarkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'team', 'stats', 'contact']);
  const isAlbumPage = window.location.pathname.toLowerCase() === '/album';

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-border bg-background/90 backdrop-blur-md dark:border-night-border dark:bg-night/90'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-content items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <a
          href={isAlbumPage ? '/' : '#hero'}
          className="group flex items-center gap-3"
          aria-label="Kembali ke beranda"
        >
          <img
            src={logoUrl}
            alt="Logo KKN UNIWA 05 Desa Golan"
            className="h-9 w-9 rounded-md border border-border object-cover transition-transform duration-300 group-hover:-rotate-6 dark:border-night-border"
          />
          <span className="font-display text-lg font-semibold text-text dark:text-night-text">
            KKN UNIWA 05 <span className="text-forest dark:text-forest-light">Golan</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = item.href === '/album' ? isAlbumPage : activeSection === item.href.replace('#', '');
            const href = isAlbumPage && item.href.startsWith('#') ? `/${item.href}` : item.href;

            return (
              <a
                key={item.href}
                href={href}
                className="relative px-3 py-2 text-[15px] font-medium transition-colors duration-200"
              >
                <span
                  className={
                    active
                      ? 'text-text dark:text-night-text'
                      : 'text-muted hover:text-text dark:text-night-muted dark:hover:text-night-text'
                  }
                >
                  {item.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDarkMode}
            onClick={onToggleDarkMode}
            className="hidden rounded-md border border-border bg-surface p-2.5 text-text shadow-card transition hover:border-forest/40 hover:text-forest dark:border-night-border dark:bg-night-surface dark:text-night-text dark:hover:border-forest-light/50 dark:hover:text-forest-light md:inline-flex"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex rounded-md border border-border bg-surface p-2.5 text-text shadow-card transition dark:border-night-border dark:bg-night-surface dark:text-night-text md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Reading progress — golden line tracking scroll position */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md dark:border-night-border dark:bg-night/95 md:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={isAlbumPage && item.href.startsWith('#') ? `/${item.href}` : item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-primary/15 hover:text-text dark:text-night-muted dark:hover:bg-primary/10 dark:hover:text-night-text"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
