import { motion } from 'framer-motion';
import { BarChart3, CalendarRange, MapPin, Users } from 'lucide-react';

const icons = [Users, MapPin, CalendarRange, BarChart3];

function AnimatedValue({ value, suffix = '' }) {
  return (
    <div className="flex items-end justify-center gap-1 text-3xl md:text-4xl">
      <span>{value}</span>
      {suffix && <span className="text-sm font-semibold text-forest dark:text-forest-light">{suffix}</span>}
    </div>
  );
}

export function StatsSection({ stats = [] }) {
  return (
    <section id="stats" className="mx-auto max-w-content px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light">
          Data Tim
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl">Rekam jejak dalam angka.</h2>
        <div className="mt-4 h-1 w-16 bg-primary" />
      </div>

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4 dark:border-night-border dark:bg-night-border">
        {stats.map((stat, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
              className="bg-surface p-6 text-center dark:bg-night-surface"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/20 text-forest-deep dark:text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <AnimatedValue value={stat.value} suffix={stat.suffix || ''} />
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted dark:text-night-muted">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
