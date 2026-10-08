import { MainLayout } from '../layouts';

export function AboutPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="rounded-xl border border-border bg-surface p-8 shadow-card dark:border-night-border dark:bg-night-surface">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light">
            About
          </p>
          <h1 className="mt-4 text-4xl">About the team</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted dark:text-night-muted">
            Placeholder page for the story, mission, and team values.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
