import { useState } from 'react';

import { PlayerNameInput } from '../components/input/PlayerNameInput';
import { GAME_TITLE } from '../constants/GameMetadata';
import '../styles/App.css';

export function GamePage() {
  const [name, setName] = useState('');
  const [showEnterNameDialog, setShowEnterNameDialog] = useState(true);
  const [count, setCount] = useState(0);

  const handleEnterName = () => {
    setShowEnterNameDialog(false);
  };

  return (
    <>
      <h3>{GAME_TITLE}</h3>

      {showEnterNameDialog ? (
        <div>
          <div className="dialogue-container-with-input">
            <div className="dialogue">
              <p>
                Welcome!
              </p>
              <p>
                You must be our new Chief Information Security Officer.
                I've been looking forward to meeting you in person.
              </p>
              <p>I'm Matthew, your Director of Operations.</p>
              <p>
                We've got an incredible amount of work ahead of us, from hiring the team
                to laying the groundwork for Cyber Command's first year of operations.
              </p>
              <p>
                Before we dive in, what would you like me to call you on a day-to-day basis?
              </p>
            </div>
            <PlayerNameInput onEnter={handleEnterName} setName={setName} />
          </div>
        </div>
      ) : (
        <div className="card">
          <p>Excellent, welcome to the team, {name}!</p>
        </div>
      )}

      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
      </div>
    </>
  );
}
