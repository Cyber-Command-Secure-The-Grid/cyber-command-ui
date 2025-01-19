export enum IncidentLevel {
  RED,
  YELLOW,
  GREY
}

/**
 * Represents a security incident report.
 *
 * Eg. A critical infrastructure incident such as a port closure
 * due to a system-wide cyber attack may have metadata such as
 * {
 *   alertLevel: IncidentLevel.RED,
 *   title: 'System-wide outage at port',
 *   content: [
 *     'Our national port has been forced to halt all operations ' +
 *       'due to an apparent system-wide ransomware attack, risking billions ' +
 *       'of dollars in interrupted trade and potential food shortages within ' +
 *       'a week if left unresolved.',
 *     'The port operator\'s initial remediation plans have failed, ' +
 *       'and they have requested our immediate assistance.'
 *   ]
 * }
 */
export interface IncidentReport {
  incidentLevel: IncidentLevel;
  title: string;
  content: string[];
}
