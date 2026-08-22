import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { MemberImage } from './MemberImage';

export function TeamCard({ member, className = '', onClick }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(30);

  const springX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

    rotateY.set(x * 7);
    rotateX.set(y * -7);
    glowX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    glowY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(30);
  };

  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(37,99,235,0.22), rgba(124,58,237,0.08) 24%, transparent 52%)`;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.article
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open profile for ${member?.name || 'team member'}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
      className={[
        'group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/55 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/60 dark:shadow-black/20',
        'ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-[0_30px_90px_rgba(37,99,235,0.12)] hover:ring-primary/20 dark:ring-slate-800',
        className,
      ].join(' ')}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-[30px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />

      <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-slate-100">
        <div className="overflow-hidden">
          <MemberImage
            member={member}
            alt={member?.name || 'Team member'}
            className="h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10" />

      </div>

      <div className="relative mt-5 px-2 pb-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-text dark:text-white">{member?.name || 'Member name'}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{member?.role || 'Role'}</p>
          </div>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <motion.p
          initial={false}
          animate={{ maxHeight: 64, opacity: 1 }}
          className="mt-4 overflow-hidden text-sm leading-6 text-muted opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 dark:text-slate-400"
        >
          {member?.motto || 'Thoughtful work, meaningful impact.'}
        </motion.p>
      </div>
    </motion.article>
  );
}
