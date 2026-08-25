import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Sprout, Sunrise } from 'lucide-react';

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

const highlights = [
  // {
  //   title: 'Our mission',
  //   text: 'To combine strategy, design, and engineering into experiences that are both useful and memorable for the people they serve.',
  // },
  // {
  //   title: 'Our vision',
  //   text: 'To help ambitious teams grow with clarity, confidence, and a product culture rooted in thoughtful execution and human-centered design.',
  // },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-[32px] border border-white/70 bg-white/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Tentang Kami</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-text md:text-5xl">
        KKN UNIWA 05 Desa Golan yang berdedikasi untuk memberikan kontribusi positif bagi masyarakat.
        </h2>
        <div id="logo" className="mt-8 overflow-hidden rounded-[26px] border border-primary/20 bg-gradient-to-br from-primary/10 via-white/50 to-emerald-50/70 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <img src={new URL('../assets/logoKKN.png', import.meta.url).href} alt="Logo KKN UNIWA 05 Desa Golan" className="h-28 w-28 rounded-2xl object-cover shadow-lg shadow-primary/10" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Di balik lambang</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-text md:text-3xl">Satu logo, empat cerita tentang pengabdian.</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted">Setiap unsur visual membawa nilai yang menjadi arah langkah KKN UNIWA 05: hadir, bertumbuh, dan memberi arti.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {logoMeanings.map(({ title, text, Icon }) => (
              <div key={title} className="rounded-2xl border border-white/80 bg-white/65 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="font-semibold text-text">{title}</h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* <div className="rounded-[26px] border border-slate-200/80 bg-slate-50/80 p-6">
            <p className="text-base leading-8 text-muted">
              We are a cross-functional team working at the intersection of product thinking, design craft, and technical execution. Our work is rooted in curiosity, partnership, and a commitment to creating meaningful digital experiences.
            </p>
          </div> */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-slate-200/80 bg-white/75 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
