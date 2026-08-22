import { Instagram, Mail, Music2 } from 'lucide-react';

const contactLinks = [
  { label: 'Instagram', href: 'https://instagram.com/', Icon: Instagram, color: 'hover:text-pink-500' },
  { label: 'TikTok', href: 'https://tiktok.com/', Icon: Music2, color: 'hover:text-cyan-500' },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-text dark:text-white">KKN UNIWA 2026</p>
          <p className="text-sm text-muted dark:text-slate-400">© 2026 KKN UNIWA Desa Golan.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {/* <a href="mailto:contact@kknuniwa.example" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-text transition hover:border-primary/30 hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="Email the KKN UNIWA team">
            <Mail className="h-4 w-4" /> Contact us
          </a> */}
          {contactLinks.map(({ label, href, Icon, color }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`KKN UNIWA on ${label}`} className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${color}`}>
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
