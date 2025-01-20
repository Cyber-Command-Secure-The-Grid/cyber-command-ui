import React from 'react';

import { DialogProps } from '../types/Dialog';
import { DialogNextButton } from './DialogNextButton';
import '../styles/App.css';
import { BASE_URL_PATH } from '../constants/UrlPaths';

/**
 * Renders a dialog box with one or more paragraphs of text, and a row of option buttons
 * at the bottom if the current page of dialog has options.
 */
export const Dialog: React.FC<DialogProps> = ({ dialog, onOptionSelect, state }) => {
  return (
    <div className="dialogue">
      {dialog.avatarFileName && (
        <img
          className="dialogue-avatar"
          data-testid="npc-avatar"
          src={`${BASE_URL_PATH}/src/assets/CharacterAvatars/${dialog.avatarFileName}`}
          alt="Speaking character avatar"
        />
      )}
      <div className={`dialogue-text ${dialog.options ? 'padding-bottom' : ''}`}>
        {dialog.text(state).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {dialog.options && (
        <div className="options">
          {dialog.options.map((option, index) => (
            DialogNextButton(index, onOptionSelect, option)
          ))}
        </div>
      )}
    </div>
  );
};
