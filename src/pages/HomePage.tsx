import { Link } from 'react-router-dom';

import cyberCommandLogo from '../assets/CyberCommandLogo_248x248.png';
import githubLogo from '../assets/icon-github.svg';
import { GAME_TAGLINE, GAME_TITLE } from '../constants/GameMetadata';
import { GAME_URL_PATH } from '../constants/UrlPaths';
import '../styles/App.css';

export function HomePage() {
  return (
    <>
      <div>
        <span>
          <img src={cyberCommandLogo} className="logo" alt="Cyber Command logo" />
        </span>
      </div>
      <h1>{GAME_TITLE}</h1>
      <h3>{GAME_TAGLINE}</h3>
      <div className="card">
        <Link to={GAME_URL_PATH}>
          <button className="play-button" aria-label="Play Cyber Command" data-testid="play-button">Play</button>
        </Link>
      </div>
      <a className="source-code-link" href="https://github.com/msayson/cyber-command-ui">
        <span>
          <img src={githubLogo} className="icon-logo" alt="GitHub logo" />
        </span>
        <span className="icon-logo-right-side-label">Project source code</span>
      </a>
    </>
  );
}
