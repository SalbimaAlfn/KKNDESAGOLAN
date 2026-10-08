import { MainLayout } from '../layouts';

export function TeamPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="rounded-xl border border-border bg-surface p-8 shadow-card dark:border-night-border dark:bg-night-surface">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light">
            Members
          </p>
          <h1 className="mt-4 text-4xl">Team directory</h1>
          <p className="mt-6 text-lg text-muted dark:text-night-muted">
            Placeholder page for the full member list and profile browsing experience.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
