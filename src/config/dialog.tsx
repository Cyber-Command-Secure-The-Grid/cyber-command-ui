import { CharacterExpression, CharacterName } from '../constants/Images';
import { getCharacterAvatarFileName } from '../utils/CharacterUtils';

export interface DialogState {
  name?: string;
}

export interface DialogMetadata {
  avatarFileName?: string;
  text: (state: DialogState) => string[];
  options?: { text: string; nextDialogId: string }[];
}

export type DialogMetadataDictionary = Record<string, DialogMetadata>;

const NEXT_BUTTON_TEXT = 'Next';

const MATTHEW_FRIENDLY_AVATAR_FILENAME: string = getCharacterAvatarFileName(CharacterName.MATTHEW, CharacterExpression.FRIENDLY);

export const dialogMetadataEntries: DialogMetadataDictionary = {
  welcome: {
    avatarFileName: MATTHEW_FRIENDLY_AVATAR_FILENAME,
    text: () => [
      'Welcome!',
      'You must be our new Chief Information Security Officer. I\'ve been looking forward to meeting you in person.',
      'I\'m Matthew, your Director of Operations.',
    ],
    options: [
      { text: NEXT_BUTTON_TEXT, nextDialogId: 'nameInput' },
    ],
  },
  nameInput: {
    avatarFileName: MATTHEW_FRIENDLY_AVATAR_FILENAME,
    text: () => [
      'We\'ve got an incredible amount of work ahead of us, to lay the groundwork for Cyber Command\'s first year of operations.',
      'Before we dive in, what would you like me to call you on a day-to-day basis?',
    ],
  },
  nextDialogAfterNameInput: {
    avatarFileName: MATTHEW_FRIENDLY_AVATAR_FILENAME,
    text: (state) => [
      `Excellent, welcome to the team, ${state.name ?? 'Chief'}!`,
      'Let\'s get you started with your console.'
    ],
  },
};
