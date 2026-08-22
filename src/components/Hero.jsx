import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Sparkles } from 'lucide-react';

const logoUrl = new URL('../assets/logoKKN.png', import.meta.url).href;

const floatingBadges = [''];

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -left-12 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-10 bottom-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ x: [0, -22, 0], y: [0, 14, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/40 backdrop-blur-sm"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto max-w-content px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <img src={logoUrl} alt="Logo KKN UNIWA 05" className="h-6 w-6 rounded-full object-cover" />
              tim dibalik kkn uniwa 05
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-text sm:text-5xl lg:text-[72px] lg:leading-[0.95]"
            >
              KKN UNIWA 2026
              <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                DESA GOLAN
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
            >
              Langkah sederhana membangun perubahan nyata! Perkenalkan kami tim KKN UNIWA 05 Desa Golan, yang berkomitmen untuk memberikan kontribusi positif bagi masyarakat. Dengan semangat kolaborasi dan inovasi, kami siap menghadirkan solusi kreatif untuk tantangan lokal. Mari bersama-sama menciptakan dampak yang berarti dan membangun masa depan yang lebih baik!
                          </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#team"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-blue-600 to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition-all duration-300 hover:shadow-[0_24px_52px_rgba(124,58,237,0.35)]"
              >
                Tim Kami
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-text shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-primary">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                </span>
                Tentang Kami
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {/* {floatingBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-2 text-xs font-medium text-muted shadow-sm backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))} */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/75 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[26px] bg-slate-100 dark:bg-slate-800">
                <img
                  src="/hero.jpg"
                  alt="Foto tim KKN UNIWA 05"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -left-4 top-10 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-xl sm:-left-8"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Masa Bakti
                    
              </p>
              <p className="mt-1 text-lg font-semibold text-text">31 Hari</p>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
