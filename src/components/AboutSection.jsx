import { motion } from 'framer-motion';

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
        <div id="logo" className="mt-8 rounded-[26px] border border-dashed border-primary/35 bg-primary/5 p-6 md:p-8">
          <img src={new URL('../assets/logoKKN.png', import.meta.url).href} alt="Logo KKN UNIWA 05 Desa Golan" className="mb-5 h-28 w-28 rounded-2xl object-cover shadow-sm" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Penjelasan logo</p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
-Matahari Terbit Melambangkan awal baru, optimisme, kehangatan, serta pencerahan yang dibawa oleh kehadiran mahasiswa KKN ke desa.
-Pancaran Sinar Melambangkan ilmu pengetahuan, inovasi, dan manfaat yang disebarkan ke berbagai aspek kehidupan masyarakat.
-Tunas Melambangkan pertumbuhan, regenerasi, keberlanjutan, dan potensi desa yang sedang dikembangkan. Hal ini menggambarkan mahasiswa dan masyarakat yang bersama-sama menanam benih kebaikan dan pembangunan untuk masa depan.
-Lahan Hijau Melambangkan kesuburan alam Desa Golan, kesejahteraan, serta dinamika kehidupan bermasyarakat yang harmonis dan lestari.
.</p>
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
