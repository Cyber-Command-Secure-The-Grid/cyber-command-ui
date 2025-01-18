export enum CharacterExpression {
  CONCERNED = 'Concerned',
  FRIENDLY = 'Friendly',
  NEUTRAL = 'Neutral',
  STERN = 'Stern',
}

export enum CharacterName {
  MATTHEW = 'Matthew',
}

export const CharacterAvatarFileNamePrefixes: Record<CharacterName, string> = {
  [CharacterName.MATTHEW]: 'ProfessionalManGlassesDarkGreyShirt',
};
