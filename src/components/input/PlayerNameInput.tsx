import React from 'react';

import '../../styles/PlayerInput.css';

// Regular expression to allow Unicode letters, punctuation, and spaces,
// while the first character cannot be a space.
const ALLOWED_PLAYER_NAME_REGEX = /^[\p{L}\p{P}][\p{L}\p{P} ]*$/u;

interface PlayerNameInputProps {
  onEnter: () => void;
  setName: (name: string) => void;
}

/**
 * PlayerNameInput component allows users to input their player name.
 * The name is validated using a regex and can be submitted via an 'Enter' key press or button click.
 */
export const PlayerNameInput: React.FC<PlayerNameInputProps> = ({ setName, onEnter }) => {

  /**
   * Handles changes in the input field.
   * Updates the player's name if the input matches the allowed regex pattern.
   */
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (ALLOWED_PLAYER_NAME_REGEX.test(inputText)) {
      setName(inputText);
    }
  };

  /**
   * Handles key down events in the input field.
   * Submits the player name if 'Enter' is pressed and the input is not empty.
   * Manages the deletion of characters using 'Backspace' or 'Delete'.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const trimmedInputText = event.currentTarget.value.trim();
      if (trimmedInputText !== '') {
        setName(trimmedInputText);
        onEnter();
      }
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      const start = event.currentTarget.selectionStart;
      const end = event.currentTarget.selectionEnd;
      if (start !== null && end !== null) {
        const newValue = event.currentTarget.value.substring(0, start) + event.currentTarget.value.substring(end);
        setName(newValue);
      }
    }
  };

  return (
    <div className="player-input-section">
      <input
        className="player-input-textbox"
        type="text"
        maxLength={64}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />
      <button className="game-button" onClick={onEnter}>
        Enter
      </button>
    </div>
  );
};
