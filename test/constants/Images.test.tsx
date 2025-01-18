import fs from 'fs';
import path from 'path';
import { describe, expect, it } from 'vitest';

import { CharacterExpression, CharacterName, getCharacterAvatarFileName } from '../../src/constants/Images';

const characterAvatarsPath = path.resolve(__dirname, '../../src/assets/CharacterAvatars');

describe('getCharacterAvatarFileName', () => {
  it('provides valid file paths for every character avatar', () => {
    Object.values(CharacterName).forEach((name: CharacterName) => {
      Object.values(CharacterExpression).forEach((expression: CharacterExpression) => {
        const fileName: string = getCharacterAvatarFileName(name, expression);
        const filePath: string = path.join(characterAvatarsPath, fileName);
        expect(fs.existsSync(filePath)).toBe(true);
      });
    });
  });
});
