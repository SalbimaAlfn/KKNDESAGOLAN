import { motion } from 'framer-motion';
import { AlbumPage, HomePage } from './pages';

export default function App() {
  const isAlbumPage = window.location.pathname.toLowerCase() === '/album';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {isAlbumPage ? <AlbumPage /> : <HomePage />}
    </motion.div>
  );
}
