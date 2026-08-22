import { MainLayout } from '../layouts';

export function AboutPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">About</p>
          <h1 className="mt-4 text-4xl font-bold text-text">About the team</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Placeholder page for the story, mission, and team values.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
