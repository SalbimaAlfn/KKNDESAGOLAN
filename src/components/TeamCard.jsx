import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { MemberImage } from './MemberImage';

export function TeamCard({ member, className = '', staggerDelay = 0, onClick }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.article
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open profile for ${member?.name || 'team member'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: staggerDelay }}
      whileHover={{ y: -6 }}
      className={[
        'group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-surface p-3 shadow-card',
        'transition-shadow duration-300 hover:shadow-lift dark:border-night-border dark:bg-night-surface',
        className,
      ].join(' ')}
    >
      {/* Golden rule that sweeps in from the left on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <div className="relative overflow-hidden rounded-lg border border-border bg-background dark:border-night-border dark:bg-night">
        <MemberImage
          member={member}
          alt={member?.name || 'Team member'}
          className="h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/35 via-transparent to-transparent" />
      </div>

      <div className="relative mt-4 px-2 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl">{member?.name || 'Member name'}</h3>
            <p className="mt-1 text-sm font-semibold text-forest dark:text-forest-light">
              {member?.role || 'Role'}
            </p>
          </div>

          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-forest-deep dark:border-night-border dark:group-hover:text-night">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-3 max-h-0 overflow-hidden text-sm italic leading-6 text-muted opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 dark:text-night-muted">
          “{member?.motto || ''}”
        </p>
      </div>
    </motion.article>
  );
}
