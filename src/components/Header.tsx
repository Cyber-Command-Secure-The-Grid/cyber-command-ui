import { Link } from 'react-router-dom';

import { GAME_TITLE } from '../constants/GameMetadata';
import { HOME_URL_PATH } from '../constants/UrlPaths';
import '../styles/Header.css';

export function Header() {
  return (
    <header className="site-header">
      <Link to={HOME_URL_PATH} className="site-title">
        {GAME_TITLE}
      </Link>
    </header>
  );
}
