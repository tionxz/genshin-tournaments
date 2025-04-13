import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'; // Правильный путь

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <nav>
        <Link to="/genshin-impact" className="game-link">
          Genshin Impact
        </Link>
      </nav>
    </header>
  );
}