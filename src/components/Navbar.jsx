import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useScrollSpy } from '../hooks/useScrollSpy';

const logoUrl = new URL('../assets/logoKKN.png', import.meta.url).href;

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Tim', href: '#team' },
  { label: 'Album', href: '/album' },
  // { label: 'Contact', href: '#contact' },
];

export function Navbar({ isDarkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'team', 'stats', 'contact']);
  const isAlbumPage = window.location.pathname.toLowerCase() === '/album';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/70 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/75 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href={isAlbumPage ? '/' : '#hero'} className="flex items-center gap-3 text-text dark:text-slate-100" aria-label="Go to homepage">
          <img src={logoUrl} alt="Logo KKN UNIWA 05 Desa Golan" className="h-9 w-9 rounded-full object-cover shadow-lg shadow-blue-500/20" />
          <span className="text-lg font-semibold tracking-[-0.04em]">KKN UNIWA 05 Golan</span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-white/40 bg-white/30 p-1.5 shadow-sm backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/55 md:flex">
          {navItems.map((item) => {
            const active = item.href === '/album' ? isAlbumPage : activeSection === item.href.replace('#', '');
            const href = isAlbumPage && item.href.startsWith('#') ? `/${item.href}` : item.href;

            return (
              <a
                key={item.href}
                href={href}
                className="relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                <span className={active ? 'text-text dark:text-white' : 'text-muted hover:text-text dark:text-slate-400 dark:hover:text-white'}>{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm dark:bg-slate-800"
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
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
            className="hidden rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-amber-300 md:inline-flex"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200/60 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-950/85 md:hidden"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={isAlbumPage && item.href.startsWith('#') ? `/${item.href}` : item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-2xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-slate-100 hover:text-text dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
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
