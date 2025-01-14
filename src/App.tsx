import { useState } from 'react';
import cyberCommandLogo from './assets/CyberCommandLogo_248x248.png';
import githubLogo from './assets/icon-github.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <span>
          <img src={cyberCommandLogo} className="logo" alt="Cyber Command logo" />
        </span>
      </div>
      <h1>Cyber Command</h1>
      <h3>Build your team. Secure the grid. Protect the nation.</h3>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
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

export default App;
