export enum CharacterExpression {
  CONCERNED = 'Concerned',
  FRIENDLY = 'Friendly',
  NEUTRAL = 'Neutral',
  STERN = 'Stern',
}

export enum CharacterName {
  MATTHEW = 'Matthew',
}

const CharacterAvatarFileNamePrefixes: Map<CharacterName, string> = new Map<CharacterName, string>([
  [CharacterName.MATTHEW, 'ProfessionalManGlassesDarkGreyShirt'],
]);

export type CharacterNameAndExpression = [CharacterName, CharacterExpression];

export const CharacterAvatarFileNames: Map<CharacterNameAndExpression, string> = new Map<CharacterNameAndExpression, string>();

for (const name of Object.values(CharacterName)) {
  for (const expression of Object.values(CharacterExpression)) {
    const fileNamePrefix: string | undefined = CharacterAvatarFileNamePrefixes.get(name);

    if (fileNamePrefix) {
      const avatarFileName = `${fileNamePrefix}${expression}.svg`;
      CharacterAvatarFileNames.set([name, expression], avatarFileName);
    }
  }
}
