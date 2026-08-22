import { motion } from 'framer-motion';
export function AlbumGallery({ photos = [] }) {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
      {photos.map((photo, index) => (
        <motion.figure key={photo.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.35, delay: index * 0.04 }} className={`group relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 ${index % 7 === 0 ? 'col-span-2 row-span-2' : ''}`}>
          <img src={photo.image} alt={photo.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
        </motion.figure>
      ))}
    </div>
  );
}
