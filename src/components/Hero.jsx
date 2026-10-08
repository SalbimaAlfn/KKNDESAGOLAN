import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const logoUrl = new URL('../assets/logoKKN.png', import.meta.url).href;

const revealLine = {
  initial: { y: '110%' },
  animate: { y: 0 },
};

function RevealLine({ children, delay = 0, className = '' }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className={`block ${className}`}
        initial={revealLine.initial}
        animate={revealLine.animate}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section id="hero" className="relative pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-content px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 border-l-4 border-primary pl-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light"
            >
              <img src={logoUrl} alt="" aria-hidden="true" className="h-6 w-6 rounded-sm object-cover" />
              Universitas Wahidiyah · Kelompok 05
            </motion.p>

            <h1 className="max-w-xl text-4xl font-semibold text-text sm:text-5xl lg:text-[68px] lg:leading-[1.02] dark:text-night-text">
              <RevealLine delay={0.1}>KKN UNIWA 2026</RevealLine>
              <RevealLine delay={0.22}>
                <span className="bg-[linear-gradient(transparent_58%,rgba(245,179,1,0.55)_58%)]">
                  DESA GOLAN
                </span>
              </RevealLine>
            </h1>

            <motion.blockquote
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 font-display text-xl italic text-forest sm:text-2xl dark:text-forest-light"
            >
              “Langkah sederhana membangun perubahan nyata”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg dark:text-night-muted"
            >
              Tim KKN Kelompok 05 mengabdi di Desa Golan selama 31 hari, periode 1–31 Agustus 2026.
              Sebanyak 14 personel — 13 mahasiswa dan satu dosen pembimbing lapangan — bekerja bersama
              warga untuk menjalankan program kerja desa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#team"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-forest-deep shadow-card transition-colors duration-300 hover:bg-primary-strong dark:text-night"
              >
                Tim Kami
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg border border-forest/40 px-6 py-3 text-sm font-semibold text-forest transition-colors duration-300 hover:bg-forest hover:text-white dark:border-forest-light/50 dark:text-forest-light dark:hover:bg-forest-light dark:hover:text-night"
              >
                <BookOpen className="h-4 w-4" />
                Tentang Kami
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <motion.figure
              style={{ y: photoY }}
              className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-lift dark:border-night-border dark:bg-night-surface"
            >
              <img
                src="/hero.webp"
                alt="Foto tim KKN UNIWA 05"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/75 to-transparent px-5 pb-4 pt-14 text-xs font-medium tracking-wide text-night-text">
                KKN UNIWA 05 · Desa Golan
              </figcaption>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -left-4 top-8 rounded-lg border border-border bg-surface px-4 py-3 shadow-lift dark:border-night-border dark:bg-night-surface sm:-left-8"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted dark:text-night-muted">
                Masa Bakti
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-text dark:text-night-text">31 Hari</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
