import { motion } from 'framer-motion';
import heic2any from 'heic2any';
import { Images } from 'lucide-react';
import { useEffect, useState } from 'react';

function ActivityImage({ activity }) {
  const [imageSource, setImageSource] = useState(activity.image);
  const isHeic = /\.(heic|heif)(?:$|\?)/i.test(activity.image);

  useEffect(() => {
    if (!isHeic) {
      setImageSource(activity.image);
      return undefined;
    }

    let objectUrl;
    let cancelled = false;

    const convertImage = async () => {
      try {
        const response = await fetch(activity.image);
        const sourceBlob = await response.blob();
        const convertedBlob = await heic2any({ blob: sourceBlob, toType: 'image/jpeg', quality: 0.92 });
        const jpegBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        objectUrl = URL.createObjectURL(jpegBlob);

        if (!cancelled) setImageSource(objectUrl);
      } catch {
        if (!cancelled) setImageSource(activity.image);
      }
    };

    convertImage();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [activity.image, isHeic]);

  return <img src={imageSource} alt={activity.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />;
}

export function ActivityGallery({ activities = [] }) {
  return (
    <section id="activities" className="mx-auto max-w-content px-6 py-20">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Dokumentasi</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-text dark:text-white md:text-5xl">Sorotan Aktivitas.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted dark:text-slate-400">Foto yang kami dokumentasikan.</p>
      </div>

      <div className="space-y-10">
        {activities.map((week) => (
          <div key={week.week}>
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Minggu {week.week}</span>
              <p className="text-sm text-muted dark:text-slate-400">{week.title}</p>
            </div>
            <div className="grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[170px] sm:grid-cols-4">
              {week.photos.map((activity, index) => (
          <motion.figure
            key={activity.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className={`group relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
          >
            <ActivityImage activity={activity} />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-slate-950/80 to-transparent px-3 pb-3 pt-10 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {activity.title}
              <Images className="h-4 w-4 shrink-0" />
            </figcaption>
          </motion.figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
