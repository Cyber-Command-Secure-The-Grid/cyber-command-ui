export enum SecurityMaturityLevel {
  INADEQUATE = 'Woefully Inadequate',
  NOVICE = 'Novice',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  ELITE = 'Elite',
}

export enum Sector {
  COMMUNICATIONS = 'Communications',
  ENERGY = 'Energy',
  FINANCIAL_SERVICES = 'Financial Services',
  HEALTHCARE = 'Healthcare',
  TRANSPORTATION = 'Transportation',
}

export type SectorSecurityLevels = Record<Sector, SecurityMaturityLevel>;
