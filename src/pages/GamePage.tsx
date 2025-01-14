import { useState } from 'react';

import { GAME_TITLE } from '../constants/GameMetadata';
import '../styles/App.css';

export function GamePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{GAME_TITLE}</h3>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
      </div>
    </>
  );
}
