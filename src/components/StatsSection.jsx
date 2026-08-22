import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, CalendarRange, Sparkles, Users } from 'lucide-react';

const icons = [Users, BarChart3, Sparkles, CalendarRange];

function AnimatedValue({ value, suffix = '' }) {
  return (
    <div className="flex items-end justify-center gap-1 text-3xl font-semibold tracking-[-0.06em] text-text md:text-4xl">
      <span>{value}</span>
      {suffix && <span className="text-sm font-medium text-primary">{suffix}</span>}
    </div>
  );
}

export function StatsSection({ stats = [] }) {
  return (
    <section id="stats" className="mx-auto max-w-content px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Impact</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-text md:text-5xl">Numbers that tell the story.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary shadow-sm">
                <Icon className="h-5 w-5" />
              </div>

              <AnimatedValue value={stat.value} suffix={stat.suffix || ''} />
              <div className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">{stat.label}</div>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
                Growing impact
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
