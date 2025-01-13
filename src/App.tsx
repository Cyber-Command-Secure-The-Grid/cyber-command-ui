import { useState } from 'react';
import githubLogo from './assets/icon-github.svg';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
        <span className="icon-logo-right-side-label">Source code</span>
      </a>
    </>
  );
}

export default App;
