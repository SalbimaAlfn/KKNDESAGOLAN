import { AlbumGallery } from '../components';
import { albumPhotos } from '../data';
import { MainLayout } from '../layouts';

export function AlbumPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Album Tim</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-text dark:text-white md:text-6xl">Momen Bersama Kami.</h1>
          <p className="mt-5 text-lg leading-8 text-muted dark:text-slate-400">Kumpulan foto yang di dapatkan dari beberapa momen penting.</p>
        </div>
        <AlbumGallery photos={albumPhotos} />
      </section>
    </MainLayout>
  );
}
