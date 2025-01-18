export enum CharacterExpression {
  CONCERNED = 'Concerned',
  FRIENDLY = 'Friendly',
  NEUTRAL = 'Neutral',
  STERN = 'Stern',
}

export enum CharacterName {
  MATTHEW = 'Matthew',
}

const CharacterAvatarFileNamePrefixes: Record<CharacterName, string> = {
  [CharacterName.MATTHEW]: 'ProfessionalManGlassesDarkGreyShirt',
};

/**
 * Returns filename for a character avatar given their name and expression.
 *
 * @returns The filename of the character avatar, e.g. "ProfessionalManGlassesDarkGreyShirtConcerned.svg"
 */
export function getCharacterAvatarFileName(name: CharacterName, expression: CharacterExpression): string {
  const fileNamePrefix: string = CharacterAvatarFileNamePrefixes[name];
  return `${fileNamePrefix}${expression}.svg`;
}
