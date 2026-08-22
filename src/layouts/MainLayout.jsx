import { useEffect, useState } from 'react';

import { Footer, Navbar } from '../components';

export function MainLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('team-showcase-theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('team-showcase-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode((value) => !value)} />
      <main className="pt-5">{children}</main>
      <Footer />
    </div>
  );
}
