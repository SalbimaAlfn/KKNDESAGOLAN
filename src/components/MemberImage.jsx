const fallbackImage = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80';

export function MemberImage({ member, alt, className }) {
  return (
    <img
      src={member?.image || fallbackImage}
      alt={alt}
      className={className}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
      }}
    />
  );
}
