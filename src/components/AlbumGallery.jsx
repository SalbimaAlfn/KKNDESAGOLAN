import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function AlbumImage({ photo }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  // Cached images may finish loading before React attaches onLoad.
  useEffect(() => {
    if (imageRef.current?.complete) setIsLoaded(true);
  }, [photo.image]);

  return (
    <img
      ref={imageRef}
      src={photo.image}
      alt={photo.title}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
        isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
      }`}
    />
  );
}

export function AlbumGallery({ photos = [] }) {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
      {photos.map((photo, index) => (
        <motion.figure
          key={photo.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
          className={`group relative overflow-hidden rounded-lg bg-background dark:bg-night ${
            index % 7 === 0 ? 'col-span-2 row-span-2' : ''
          }`}
        >
          <AlbumImage photo={photo} />
        </motion.figure>
      ))}
    </div>
  );
}
