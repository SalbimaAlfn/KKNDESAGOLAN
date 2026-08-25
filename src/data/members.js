const memberPhotoModules = import.meta.glob('../assets/members/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

const memberPhotosByName = Object.fromEntries(
  Object.entries(memberPhotoModules).map(([filePath, image]) => [filePath.split('/').pop().split('.')[0], image]),
);

function getMemberPhotos(id) {
  const photoNames = [String(id), `${id}${id}2`, `${id}${id}3`];
  return photoNames.map((photoName) => memberPhotosByName[photoName]).filter(Boolean);
}

const memberRecords = [
  {
    id: 0,
    name: 'Ibu Lailatul Fazriyah M.H',
    role: 'Dosen Pembimbing Lapangan',
    motto: 'Ship thoughtful experiences.',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/gery0154/' },
  ],
  },
  {
    id: 1,
    name: 'Herman Syahtoni',
    role: 'Ketua',
    motto: 'With a great power, comes a great responsibilty.',
    nim: '20233310053',
    programStudy: 'Pendidikan Bahasa Inggris',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/gery0154/' },
  ],
  },
  {
    id: 2,
    name: 'Jesicha Auliya Santri',
    role: 'Wakil Ketua',
    motto: 'Design with clarity and heart.',
    nim: '20231110758',
    programStudy: 'Manajemen',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/jesichasn/' },
    { label: 'TikTok', href: 'https://tiktok.com/@jesichaas' },
  ],
  },
  {
    id: 3,
    name: 'Nuril Maghfiroh',
    role: 'Sekretaris',
    motto: 'Tell stories people remember.',
    nim: '20233330102',
    programStudy: 'PG PAUD',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/nueelll_l/' },
    { label: 'TikTok', href: 'https://tiktok.com/@reajeee' },
  ],
  },
  {
    id: 4,
    name: 'Agustin Nur Rohmah',
    role: 'Bendahara',
    motto: 'Tell stories people remember.',
    nim: '20231120304',
    programStudy: 'Akuntansi',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/gstnrose_288/' },
  ],
  },
  {
    id: 5,
    name: 'Salbima Alifino Aziz',
    role: 'Divisi Acara',
    motto: 'Build simple, fast, and reliable systems.',
    nim: '20232210154',
    programStudy: 'Teknik Informatika',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/slbmalfn/' },
  ],
  },
  {
    id: 6,
    name: 'Siti Nurhanifia Rohma',
    role: 'Divisi Acara',
    motto: 'Listen deeply, design wisely.',
    nim: '20232210156',
    programStudy: 'Teknik Informatika',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/fiaaasnhr_/' },
  ],
  },
  
  {
    id: 7,
    name: 'Zahra Aufa Faiqunnajah',
    role: 'Divisi Humas',
    motto: 'Empower teams to do great work.',
    nim: '20231110775',
    programStudy: 'Manajemen',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/zahraufaa/' },
    { label: 'TikTok', href: 'https://tiktok.com/@zahraufaa' },
  ],
  },
  {
    id: 8,
    name: 'Siti Aisyah Putri',
    role: 'Divisi Humas',
    motto: 'Tell stories people remember.',
    nim: '20233330100',
    programStudy: 'PG PAUD',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/theycalmeisyh/' },
    { label: 'TikTok', href: 'https://tiktok.com/@coffe_milk55' },
  ],
  },
  {
    id: 9,
    name: 'Rahmawagita Kuswandini',
    role: 'Divisi Logistik',
    motto: 'Tell stories people remember.',
    nim: '20231110760',
    programStudy: 'Manajemen',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/rhmwagita_/' },
    { label: 'TikTok', href: 'https://tiktok.com/@wageee3' },
  ],
  },
  {
    id: 10,
    name: 'Mustofa Latif',
    role: 'Divisi Logistik',
    motto: 'Tell stories people remember.',
    nim: '20232230040',
    programStudy: 'Teknik Mesin',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/mustofalatif_den/' },
    { label: 'TikTok', href: 'https://tiktok.com/@muz_den' },
  ],
  },
  {
    id: 11,
    name: 'Arifata Ghoutsi',
    role: 'Divisi Dokumentasi & Media',
    motto: 'No pain no gain.',
    nim: '20231120307',
    programStudy: 'Akuntansi',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/arifata._/' },
    { label: 'TikTok', href: 'https://tiktok.com/@fovalorss' },
  ],
  },
  {
    id: 12,
    name: 'Fitrotul Istiqomah',
    role: 'Divisi Dokumentasi & Media',
    motto: 'No pain no gain.',
    nim: '20231110763',
    programStudy: 'Manajemen',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/vitt04__/' },
    { label: 'TikTok', href: 'https://tiktok.com/@vittajaaa' },
  ],
  },
  {
    id: 13,
    name: 'Risqi Satria Utomo',
    role: 'Divisi Dokumentasi & Media',
    motto: 'No pain no gain.',
    nim: '20231110767',
    programStudy: 'Manajemen',
    socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/rsqisatria_/' },
    { label: 'TikTok', href: 'https://tiktok.com/@risqisatt_' },
  ],
  },
];

export const members = memberRecords.map((member) => {
  const gallery = getMemberPhotos(member.id);

  return {
    ...member,
    image: gallery[0] || member.image,
    gallery: gallery.length ? gallery : member.gallery,
    nim: member.nim || 'Belum diisi',
    programStudy: member.programStudy || 'Belum diisi',
  };
});

export const teamStats = [
  { label: 'Members', value: '10+' },
  { label: 'Projects', value: '24' },
  { label: 'Achievements', value: '18' },
  { label: 'Years Active', value: '5' },
];
