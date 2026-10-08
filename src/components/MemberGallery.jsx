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
    <div className="relative overflow-hidden rounded-lg border border-border bg-background dark:border-night-border dark:bg-night">
      <MemberImage
        member={{ ...member, image: photos[activePhoto] }}
        alt={`${member.name} — photo ${activePhoto + 1}`}
        className="h-full min-h-[260px] w-full object-cover"
      />

      {hasMultiplePhotos && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-night/85 to-transparent px-3 pb-3 pt-10">
          <button type="button" onClick={() => showPhoto(-1)} aria-label="Show previous photo" className="rounded-full bg-surface/90 p-2 text-text transition hover:scale-105 dark:bg-night-surface/90 dark:text-night-text">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5" aria-label={`Photo ${activePhoto + 1} of ${photos.length}`}>
            {photos.map((_, index) => (
              <button key={index} type="button" onClick={() => setActivePhoto(index)} aria-label={`Show photo ${index + 1}`} className={`h-2 rounded-full transition-all ${index === activePhoto ? 'w-5 bg-white' : 'w-2 bg-white/60'}`} />
            ))}
          </div>
          <button type="button" onClick={() => showPhoto(1)} aria-label="Show next photo" className="rounded-full bg-surface/90 p-2 text-text transition hover:scale-105 dark:bg-night-surface/90 dark:text-night-text">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
