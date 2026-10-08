import { Instagram, Music2 } from 'lucide-react';

// PLACEHOLDER LINKS — fill in the real official accounts before launch.
const contactLinks = [
  { label: 'Instagram', href: 'https://instagram.com/', Icon: Instagram },
  { label: 'TikTok', href: 'https://tiktok.com/', Icon: Music2 },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface dark:border-night-border dark:bg-night-surface">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-text dark:text-night-text">KKN UNIWA 2026</p>
          <p className="mt-1 text-sm text-muted dark:text-night-muted">
            Universitas Wahidiyah · Desa Golan · Periode 1–31 Agustus 2026
          </p>
          <p className="mt-1 text-sm text-muted dark:text-night-muted">© 2026 KKN UNIWA Desa Golan.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {contactLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`KKN UNIWA on ${label}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition hover:border-forest/40 hover:text-forest dark:border-night-border dark:text-night-muted dark:hover:border-forest-light/50 dark:hover:text-forest-light"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
