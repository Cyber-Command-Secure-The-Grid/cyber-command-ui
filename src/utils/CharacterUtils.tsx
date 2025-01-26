import { CharacterExpression, CharacterName } from '../constants/Images';

/**
 * Returns filename for a character avatar given their name and expression.
 *
 * @returns The filename of the character avatar, e.g. "MatthewConcerned.svg"
 */
export function getCharacterAvatarFileName(name: CharacterName, expression: CharacterExpression): string {
  return `${name}${expression}.svg`;
}
