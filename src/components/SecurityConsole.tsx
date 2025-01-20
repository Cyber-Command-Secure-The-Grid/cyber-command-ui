import React, { useEffect } from 'react';

import { IncidentReport } from '../types/IncidentReport';
import { Message } from '../types/Message';
import { Sector, SectorSecurityLevels, SecurityMaturityLevel } from '../types/SecurityLevel';
import { BASE_URL_PATH } from '../constants/UrlPaths';

export const DEFAULT_SECTOR_SECURITY_LEVELS: SectorSecurityLevels = {
  [Sector.COMMUNICATIONS]: SecurityMaturityLevel.UNKNOWN,
  [Sector.ENERGY]: SecurityMaturityLevel.UNKNOWN,
  [Sector.FINANCIAL_SERVICES]: SecurityMaturityLevel.UNKNOWN,
  [Sector.HEALTHCARE]: SecurityMaturityLevel.UNKNOWN,
  [Sector.TRANSPORTATION]: SecurityMaturityLevel.UNKNOWN,
};

interface SecurityConsoleProps {
  alerts: IncidentReport[],
  messages: Message[],
  sectorSecurityLevels: SectorSecurityLevels
}

const mockSecurityConsoleImageFilePath = `${BASE_URL_PATH}/images/SecurityConsole/SecurityConsole_DesktopMockup.svg`;

/**
 * Renders the security console dashboard which the player
 * will use to track security incidents, security levels,
 * and other game information.
 */
export const SecurityConsole: React.FC<SecurityConsoleProps> = ({ alerts, messages, sectorSecurityLevels }) => {
  // Preload the security console image in browser cache
  // so rendering an image with the same src is faster
  useEffect(() => {
    const mockSecurityConsoleImage = new Image();
    mockSecurityConsoleImage.src = mockSecurityConsoleImageFilePath;
  });

  // TODO: Create dynamic security console panels with content based on the input
  // alerts, messages, and sector security levels.  Using the mockup as a placeholder.
  console.log(alerts, messages, sectorSecurityLevels);

  return <div>
    <img src={mockSecurityConsoleImageFilePath} alt="Security Console" />
  </div>;
};
