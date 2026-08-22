import { AboutSection, ActivityGallery, Hero, StatsSection, TeamGrid } from '../components';
import { activities, members, teamStats } from '../data';
import { MainLayout } from '../layouts';

export function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <TeamGrid members={members} />
      {/* <StatsSection stats={teamStats} /> */}
      <ActivityGallery activities={activities} />
    </MainLayout>
  );
}
