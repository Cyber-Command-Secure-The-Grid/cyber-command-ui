import React from 'react';

import { DialogMetadata } from '../config/dialog';
import '../styles/App.css';

interface DialogProps {
  dialog: DialogMetadata;
  onOptionSelect: (nextDialogId: string) => void;
}

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
