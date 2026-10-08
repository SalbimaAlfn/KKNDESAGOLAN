import { AlbumGallery } from '../components';
import { albumPhotos } from '../data';
import { MainLayout } from '../layouts';

export function AlbumPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest dark:text-forest-light">
            Album Tim
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">Momen bersama kami.</h1>
          <div className="mt-4 h-1 w-16 bg-primary" />
          <p className="mt-5 text-lg leading-8 text-muted dark:text-night-muted">
            Kumpulan foto yang didapatkan dari beberapa momen penting selama kegiatan.
          </p>
        </div>
        <AlbumGallery photos={albumPhotos} />
      </section>
    </MainLayout>
  );
}
