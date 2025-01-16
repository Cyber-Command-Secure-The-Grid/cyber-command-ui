export interface DialogState {
  name: string;
}

export interface DialogMetadata {
  text?: string[];
  dynamicText?: (state: DialogState) => string;
  options?: { text: string; nextDialogId: string }[];
}

export type DialogMetadataDictionary = Record<string, DialogMetadata>;

const NEXT_BUTTON_TEXT = 'Next';

export const dialogMetadataEntries: DialogMetadataDictionary = {
  welcome: {
    text: [
      'Welcome!',
      'You must be our new Chief Information Security Officer. I\'ve been looking forward to meeting you in person.',
      'I\'m Matthew, your Director of Operations.',
    ],
    options: [
      { text: NEXT_BUTTON_TEXT, nextDialogId: 'nameInput' },
    ],
  },
  nameInput: {
    text: [
      'We\'ve got an incredible amount of work ahead of us, to lay the groundwork for Cyber Command\'s first year of operations.',
      'Before we dive in, what would you like me to call you on a day-to-day basis?',
    ],
  },
  nextDialogAfterNameInput: {
    dynamicText: (state) => `Excellent, welcome to the team, ${state.name}!`,
  },
};
