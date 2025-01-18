import { CharacterAvatarFileNamePrefixes, CharacterExpression, CharacterName } from '../constants/Images';

/**
 * Returns filename for a character avatar given their name and expression.
 *
 * @returns The filename of the character avatar, e.g. "ProfessionalManGlassesDarkGreyShirtConcerned.svg"
 */
export function getCharacterAvatarFileName(name: CharacterName, expression: CharacterExpression): string {
  const fileNamePrefix: string = CharacterAvatarFileNamePrefixes[name];
  return `${fileNamePrefix}${expression}.svg`;
}
