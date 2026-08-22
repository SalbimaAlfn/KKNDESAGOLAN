import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, Music2, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { MemberGallery } from './MemberGallery';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const socialIcons = {
  Instagram,
  TikTok: Music2,
};

export function MemberModal({ member, isOpen, onClose }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    const focusables = modalRef.current?.querySelectorAll(focusableSelector) || [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose?.();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusable = Array.from(modalRef.current.querySelectorAll(focusableSelector)).filter(
        (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
      );

      if (!focusable.length) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && member ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose?.();
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-modal-title"
            tabIndex={-1}
            className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/60 bg-white/75 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/85"
          >
            <div className="rounded-[24px] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-sky-50 p-4 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Team member</p>
                  <h3 id="member-modal-title" className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-text dark:text-white sm:text-3xl">
                    {member.name}
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label="Close member details"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:scale-105 hover:border-slate-300 hover:text-text dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]">
                <MemberGallery member={member} />

                <div className="flex flex-col justify-center">
                  
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{member.role}</p>
                  <dl className="mt-4 space-y-2 text-sm leading-6 text-muted dark:text-slate-300 sm:text-base">
                    <div><dt className="inline font-semibold text-text dark:text-white">Nama: </dt><dd className="inline">{member.name}</dd></div>
                    {member.id !== 0 && (
                      <>
                        <div><dt className="inline font-semibold text-text dark:text-white">NIM: </dt><dd className="inline">{member.nim}</dd></div>
                        <div><dt className="inline font-semibold text-text dark:text-white">Program Studi: </dt><dd className="inline">{member.programStudy}</dd></div>
                      </>
                    )}
                    <div><dt className="inline font-semibold text-text dark:text-white">Motto: </dt><dd className="inline">{member.motto || 'Belum diisi'}</dd></div>
                  </dl>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {member.socials?.filter((social) => social.href).map((social) => {
                      const Icon = social.Icon || socialIcons[social.label];
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} on ${social.label}`}
                          title={`${member.name} on ${social.label}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-text transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
