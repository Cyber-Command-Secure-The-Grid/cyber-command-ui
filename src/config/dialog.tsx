export interface DialogMetadata {
  id: string;
  text: string[];
  options?: { text: string; nextDialogId: string }[];
}

export const dialogMetadataEntries: DialogMetadata[] = [
  {
    id: 'welcome',
    text: [
      'Welcome!',
      'You must be our new Chief Information Security Officer. I\'ve been looking forward to meeting you in person.',
      'I\'m Matthew, your Director of Operations.',
    ],
    options: [
      { text: 'Next', nextDialogId: 'welcomePart2' },
    ],
  },
  {
    id: 'welcomePart2',
    text: [
      'We\'ve got an incredible amount of work ahead of us, from hiring the team, ' +
        'to laying the groundwork for Cyber Command\'s first year of operations.',
    ],
    options: [
      { text: 'Next', nextDialogId: 'nameInput' },
    ],
  },
  {
    id: 'nameInput',
    text: [
      'Before we dive in, what would you like me to call you on a day-to-day basis?',
    ],
  },
  // Add more dialogs and events here
];
