import { useState } from 'react';

import { Dialog } from '../components/Dialog';
import { Header } from '../components/Header';
import { DEFAULT_SECTOR_SECURITY_LEVELS, SecurityConsole } from '../components/SecurityConsole';
import { PlayerNameInput } from '../components/input/PlayerNameInput';
import { dialogMetadataEntries } from '../config/dialog';
import '../styles/App.css';
import { DialogOptionNextStateIds } from '../types/Dialog';

export function GamePage() {
  const [currentDialogId, setCurrentDialogId] = useState('welcome');
  const [currentSecurityConsoleId, setCurrentSecurityConsoleId] = useState('');
  const [name, setName] = useState('');

  const currentDialog = dialogMetadataEntries[currentDialogId];

  const handleOptionSelect = (nextIds: DialogOptionNextStateIds) => {
    setCurrentDialogId(nextIds.nextDialogId ?? '');
    setCurrentSecurityConsoleId(nextIds.nextSecurityConsoleId ?? '');
  };

  const handleEnterName = () => {
    setCurrentDialogId('nextDialogAfterNameInput');
  };

  return (
    <>
      <Header />

      {currentDialogId && (
        <>
          <Dialog dialog={currentDialog} onOptionSelect={handleOptionSelect} state={{ name }} />

          {currentDialogId === 'nameInput' && (
            <PlayerNameInput onEnter={handleEnterName} setName={setName} />
          )}
        </>
      )}

      {currentSecurityConsoleId && (
        <SecurityConsole alerts={[]} messages={[]} sectorSecurityLevels={DEFAULT_SECTOR_SECURITY_LEVELS} />
      )}
    </>
  );
}
