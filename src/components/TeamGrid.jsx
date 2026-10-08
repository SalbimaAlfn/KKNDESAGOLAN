import { useState } from 'react';

import { MemberModal } from './MemberModal';
import { TeamCard } from './TeamCard';

export function TeamGrid({ members = [] }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <section id="team" className="mx-auto max-w-content px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light">
            Anggota
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl">Kenali tim kami.</h2>
          <div className="mt-4 h-1 w-16 bg-primary" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer"
              staggerDelay={(index % 4) * 0.07}
            />
          ))}
        </div>
      </section>

      <MemberModal member={selectedMember} isOpen={Boolean(selectedMember)} onClose={() => setSelectedMember(null)} />
    </>
  );
}
