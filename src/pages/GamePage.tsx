import { useState } from 'react';

import { Dialog } from '../components/Dialog';
import { PlayerNameInput } from '../components/input/PlayerNameInput';
import { dialogMetadataEntries } from '../config/dialog';
import { GAME_TITLE } from '../constants/GameMetadata';
import '../styles/App.css';

export function GamePage() {
  const [currentDialogId, setCurrentDialogId] = useState('welcome');
  const [name, setName] = useState('');

  const currentDialog = dialogMetadataEntries[currentDialogId];

  const handleOptionSelect = (nextDialogId: string) => {
    setCurrentDialogId(nextDialogId);
  };

  const handleEnterName = () => {
    setCurrentDialogId('nextDialogAfterNameInput');
  };

  return (
    <>
      <h3>{GAME_TITLE}</h3>

      {
      // ESLint doesn't know that currentDialog can be null here
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        currentDialog ? (
          <Dialog dialog={currentDialog} onOptionSelect={handleOptionSelect} />
        ) : (
          <div>
            <p>Excellent, welcome to the team, {name}!</p>
          </div>
        )}
      {currentDialogId === 'nameInput' && (
        <PlayerNameInput onEnter={handleEnterName} setName={setName} />
      )}
    </>
  );
}
