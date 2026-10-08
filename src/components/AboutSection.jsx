import { motion } from 'framer-motion';
import { Lightbulb, Leaf, Sprout, Sunrise } from 'lucide-react';

const logoMeanings = [
  {
    title: 'Matahari Terbit',
    text: 'Menandai awal yang penuh harapan, membawa kehangatan, optimisme, dan semangat baru untuk Desa Golan.',
    Icon: Sunrise,
  },
  {
    title: 'Pancaran Sinar',
    text: 'Menggambarkan ilmu, ide, dan inovasi yang dibagikan agar tumbuh menjadi manfaat nyata bagi masyarakat.',
    Icon: Lightbulb,
  },
  {
    title: 'Tunas Kehidupan',
    text: 'Melambangkan pertumbuhan dan keberlanjutan melalui kolaborasi mahasiswa bersama warga desa.',
    Icon: Sprout,
  },
  {
    title: 'Lahan Hijau',
    text: 'Merepresentasikan kesuburan alam, kesejahteraan, dan kehidupan Desa Golan yang harmonis serta lestari.',
    Icon: Leaf,
  },
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20">
      <motion.div
        {...reveal}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-border bg-surface p-8 shadow-card md:p-12 dark:border-night-border dark:bg-night-surface"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light">
          Tentang Kami
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
          Mengabdi bersama warga Desa Golan selama 31 hari.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted dark:text-night-muted">
          Kuliah Kerja Nyata (KKN) adalah wujud pengabdian mahasiswa kepada masyarakat. Kelompok 05
          Universitas Wahidiyah menjalankannya di Desa Golan pada periode 1–31 Agustus 2026, bersama 13
          mahasiswa dan satu dosen pembimbing lapangan, dengan program kerja yang disusun bersama warga.
        </p>

        <div id="logo" className="mt-8 rounded-lg border border-border bg-background p-6 md:p-8 dark:border-night-border dark:bg-night">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <img
              src={new URL('../assets/logoKKN.png', import.meta.url).href}
              alt="Logo KKN UNIWA 05 Desa Golan"
              className="h-28 w-28 rounded-lg border border-border object-cover dark:border-night-border"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light">
                Di balik lambang
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl">Satu logo, empat cerita tentang pengabdian.</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted dark:text-night-muted">
                Setiap unsur visual membawa nilai yang menjadi arah langkah KKN UNIWA 05: hadir,
                bertumbuh, dan memberi arti.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {logoMeanings.map(({ title, text, Icon }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-surface p-4 dark:border-night-border dark:bg-night-surface"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/20 text-forest-deep dark:text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="text-base">{title}</h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted dark:text-night-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
