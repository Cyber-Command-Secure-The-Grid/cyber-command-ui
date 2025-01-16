export interface DialogMetadata {
  text: string[];
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
      { text: NEXT_BUTTON_TEXT, nextDialogId: 'welcomePart2' },
    ],
  },
  welcomePart2: {
    text: [
      'We\'ve got an incredible amount of work ahead of us, from hiring the team, ' +
        'to laying the groundwork for Cyber Command\'s first year of operations.',
    ],
    options: [
      { text: NEXT_BUTTON_TEXT, nextDialogId: 'nameInput' },
    ],
  },
  nameInput: {
    text: [
      'Before we dive in, what would you like me to call you on a day-to-day basis?',
    ],
  },
  // Add more dialogs and events here
};
