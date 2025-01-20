import React, { useEffect } from 'react';

import { BASE_URL_PATH } from '../constants/UrlPaths';
import { useDeviceType } from '../hooks/useDeviceType';
import { IncidentReport } from '../types/IncidentReport';
import { Message } from '../types/Message';
import { Sector, SectorSecurityLevels, SecurityMaturityLevel } from '../types/SecurityLevel';

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

// Mockup images that will be replaced with dynamic content
const desktopSecurityConsoleImageSrc = `${BASE_URL_PATH}/images/SecurityConsole/SecurityConsole_DesktopMockup.svg`;
const mobileSecurityConsoleImageSrc = `${BASE_URL_PATH}/images/SecurityConsole/SecurityConsole_MobileMockup.svg`;

/**
 * Renders the security console dashboard which the player
 * will use to track security incidents, security levels,
 * and other game information.
 *
 * TODO: Replace mockup images with dynamic content based
 * on the input alerts, messages, and sector security levels.
 */
export const SecurityConsole: React.FC<SecurityConsoleProps> = ({ alerts, messages, sectorSecurityLevels }) => {
  const isMobile: boolean = useDeviceType();

  // Preload the security console image in browser cache
  // so rendering an image with the same src is faster
  useEffect(() => {
    const mockSecurityConsoleImage = new Image();
    if (isMobile) {
      mockSecurityConsoleImage.src = mobileSecurityConsoleImageSrc;
    } else {
      mockSecurityConsoleImage.src = desktopSecurityConsoleImageSrc;
    }
  }, [isMobile]);

  console.log(alerts, messages, sectorSecurityLevels);

  return <div>
    <img
      src={isMobile ? mobileSecurityConsoleImageSrc : desktopSecurityConsoleImageSrc}
      alt="Security Console" />
  </div>;
};
