const sortedPhotos = (modules) => Object.entries(modules)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([path, image], index) => ({ id: path, image, title: `Foto ${index + 1}` }));

const weekModules = [
  import.meta.glob('../assets/week1/**/*.webp', { eager: true, query: '?url', import: 'default' }),
  import.meta.glob('../assets/week2/**/*.webp', { eager: true, query: '?url', import: 'default' }),
  import.meta.glob('../assets/week3/**/*.webp', { eager: true, query: '?url', import: 'default' }),
];

export const activities = weekModules.map((modules, index) => ({
  week: index + 1,
  title: `Aktivitas Minggu ke - ${index + 1}`,
  photos: sortedPhotos(modules),
}));

const albumModules = import.meta.glob('../assets/albumphoto/**/*.webp', { eager: true, query: '?url', import: 'default' });
export const albumPhotos = sortedPhotos(albumModules).map((photo, index) => ({ ...photo, id: `album-${index + 1}` }));
