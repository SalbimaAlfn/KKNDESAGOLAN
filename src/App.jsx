import { AlbumPage, HomePage } from './pages';

export default function App() {
  return window.location.pathname.toLowerCase() === '/album' ? <AlbumPage /> : <HomePage />;
}
