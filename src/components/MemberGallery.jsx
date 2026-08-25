import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { MemberImage } from './MemberImage';

export function MemberGallery({ member }) {
  const photos = member.gallery?.filter(Boolean).length ? member.gallery.filter(Boolean) : [member.image];
  const hasMultiplePhotos = photos.length > 1;
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => setActivePhoto(0), [member.id]);

  const showPhoto = (offset) => setActivePhoto((current) => (current + offset + photos.length) % photos.length);

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-slate-200 shadow-inner">
      <MemberImage
        member={{ ...member, image: photos[activePhoto] }}
        alt={`${member.name} — photo ${activePhoto + 1}`}
        className="h-full min-h-[260px] w-full object-cover"
      />

      {hasMultiplePhotos && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/70 to-transparent px-3 pb-3 pt-10">
          <button type="button" onClick={() => showPhoto(-1)} aria-label="Show previous photo" className="rounded-full bg-white/90 p-2 text-slate-800 transition hover:scale-105">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5" aria-label={`Photo ${activePhoto + 1} of ${photos.length}`}>
            {photos.map((_, index) => (
              <button key={index} type="button" onClick={() => setActivePhoto(index)} aria-label={`Show photo ${index + 1}`} className={`h-2 rounded-full transition-all ${index === activePhoto ? 'w-5 bg-white' : 'w-2 bg-white/60'}`} />
            ))}
          </div>
          <button type="button" onClick={() => showPhoto(1)} aria-label="Show next photo" className="rounded-full bg-white/90 p-2 text-slate-800 transition hover:scale-105">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
