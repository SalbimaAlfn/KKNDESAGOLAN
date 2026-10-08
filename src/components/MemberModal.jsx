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
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose?.();
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-modal-title"
            tabIndex={-1}
            className="max-h-[calc(100vh-2rem)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface p-3 shadow-lift dark:border-night-border dark:bg-night-surface"
          >
            <div className="rounded-xl border border-border bg-background p-4 sm:p-6 dark:border-night-border dark:bg-night">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest dark:text-forest-light">Team member</p>
                  <h3 id="member-modal-title" className="mt-3 text-2xl sm:text-3xl">
                    {member.name}
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label="Close member details"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted transition hover:border-forest/40 hover:text-forest dark:border-night-border dark:bg-night dark:text-night-muted dark:hover:border-forest-light/50 dark:hover:text-forest-light"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]">
                <MemberGallery member={member} />

                <div className="flex flex-col justify-center">
                  
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest dark:text-forest-light">{member.role}</p>
                  <dl className="mt-4 space-y-2 text-sm leading-6 text-muted dark:text-night-muted sm:text-base">
                    <div><dt className="inline font-semibold text-text dark:text-night-text">Nama: </dt><dd className="inline">{member.name}</dd></div>
                    {member.id !== 0 && (
                      <>
                        <div><dt className="inline font-semibold text-text dark:text-night-text">NIM: </dt><dd className="inline">{member.nim}</dd></div>
                        <div><dt className="inline font-semibold text-text dark:text-night-text">Program Studi: </dt><dd className="inline">{member.programStudy}</dd></div>
                      </>
                    )}
                    <div><dt className="inline font-semibold text-text dark:text-night-text">Motto: </dt><dd className="inline">{member.motto || 'Belum diisi'}</dd></div>
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
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-text transition hover:border-forest/40 hover:text-forest dark:border-night-border dark:bg-night dark:text-night-text dark:hover:border-forest-light/50 dark:hover:text-forest-light"
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
