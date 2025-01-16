import React from 'react';

import { DialogMetadata } from '../config/dialog';
import '../styles/App.css';

interface DialogProps {
  dialog: DialogMetadata;
  onOptionSelect: (nextDialogId: string) => void;
}

/**
 * Renders a dialog box with one or more paragraphs of text, and a row of option buttons
 * at the bottom if the current page of dialog has options.
 */
export const Dialog: React.FC<DialogProps> = ({ dialog, onOptionSelect }) => {
  return (
    <div className="dialogue">
      <div className={`dialogue-text ${dialog.options ? 'padding-bottom' : ''}`}>
        {dialog.text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {dialog.options && (
        <div className="options">
          {dialog.options.map((option, index) => (
            <button className="dialogue-next-button" key={index} onClick={() => onOptionSelect(option.nextDialogId)}>
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
