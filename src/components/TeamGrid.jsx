import { useState } from 'react';

import { MemberModal } from './MemberModal';
import { TeamCard } from './TeamCard';

export function TeamGrid({ members = [] }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <section id="team" className="mx-auto max-w-content px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Anggota</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-text md:text-5xl">Kenali Tim Kami.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer"
            />
          ))}
        </div>
      </section>

      <MemberModal member={selectedMember} isOpen={Boolean(selectedMember)} onClose={() => setSelectedMember(null)} />
    </>
  );
}
