import { useMemo, useState } from 'react';

const fallbackImage = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80';

export function MemberImage({ member, alt, className }) {
  const imageSources = useMemo(() => {
    const id = member?.id;
    const baseCandidates = [
      member?.image,
      `/members/${id}.heic`,
      `/members/${id}.heif`,
      `/members/${id}.HEIC`,
      `/members/${id}.HEIF`,
      `/members/${id}.jpg`,
      `/members/${id}.png`,
      `/members/${id}.jpeg`,
      `/members/${id}.webp`,
      fallbackImage,
    ];

    return baseCandidates.filter(Boolean);
  }, [member?.id, member?.image]);
  const [sourceIndex, setSourceIndex] = useState(0);

  return (
    <img
      src={imageSources[sourceIndex]}
      alt={alt}
      className={className}
      onError={() => setSourceIndex((index) => Math.min(index + 1, imageSources.length - 1))}
    />
  );
}
