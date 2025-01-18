import fs from 'fs';
import path from 'path';
import { describe, expect, it } from 'vitest';

import { CharacterAvatarFileNames, CharacterExpression, CharacterName } from '../../src/constants/Images';

const characterAvatarsPath = path.resolve(__dirname, '../../src/assets/CharacterAvatars');

describe('CharacterAvatarFileNames', () => {
  it('should have valid file paths for each character avatar', () => {
    Object.values(CharacterAvatarFileNames).forEach((fileName: string) => {
      const filePath: string = path.join(characterAvatarsPath, fileName);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  it('should have the expected number of character avatar file names', () => {
    const numCharacters: number = Object.keys(CharacterName).length;
    const numExpressions: number = Object.keys(CharacterExpression).length;
    const numExpectedAvatarFiles: number = numCharacters * numExpressions;
    expect(CharacterAvatarFileNames.size).toBe(numExpectedAvatarFiles);
  });
});
