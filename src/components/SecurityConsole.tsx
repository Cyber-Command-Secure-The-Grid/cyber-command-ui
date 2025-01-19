import React from 'react';

import { IncidentReport } from '../types/IncidentReport';
import { Message } from '../types/Message';
import { SectorSecurityLevels } from '../types/SecurityLevel';

interface SecurityConsoleProps {
  alerts: IncidentReport[],
  messages: Message[],
  sectorSecurityLevels: SectorSecurityLevels
}

const mockSecurityConsoleImageFilePath = '/src/assets/SecurityConsole/SecurityConsole_DesktopMockup.svg';

/**
 * Renders the security console dashboard which the player
 * will use to track security incidents, security levels,
 * and other game information.
 */
export const SecurityConsole: React.FC<SecurityConsoleProps> = ({ alerts, messages, sectorSecurityLevels }) => {
  // TODO: Create dynamic security console panels with content based on the input
  // alerts, messages, and sector security levels.  Using the mockup as a placeholder.
  console.log(alerts, messages, sectorSecurityLevels);

  return <div>
    <img src={mockSecurityConsoleImageFilePath} alt="Security Console" />
  </div>;
};
