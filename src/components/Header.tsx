import { Link } from 'react-router-dom';

import { GAME_TITLE } from '../constants/GameMetadata';
import '../styles/Header.css';

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-title">
        {GAME_TITLE}
      </Link>
    </header>
  );
}
