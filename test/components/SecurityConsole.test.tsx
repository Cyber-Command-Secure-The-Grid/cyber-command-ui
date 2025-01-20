import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SecurityConsole } from '../../src/components/SecurityConsole';
import { CharacterExpression, CharacterName } from '../../src/constants/Images';
import { BASE_URL_PATH } from '../../src/constants/UrlPaths';
import { IncidentLevel, IncidentReport } from '../../src/types/IncidentReport';
import { Message } from '../../src/types/Message';
import { Sector, SectorSecurityLevels, SecurityMaturityLevel } from '../../src/types/SecurityLevel';
import { getCharacterAvatarFileName } from '../../src/utils/CharacterUtils';
import { DeviceType, mockWindow } from '../testUtils/TestWindow';

describe('SecurityConsole', () => {
  const mockAlerts: IncidentReport[] = [
    {
      incidentLevel: IncidentLevel.GREY,
      title: 'Test Incident 1',
      content: ['This is a test.']
    },
    {
      incidentLevel: IncidentLevel.RED,
      title: 'Test Incident 2',
      content: ['This is not a test.', 'Red alert is in effect.']
    },
  ];

  const mockMessages: Message[] = [
    {
      senderIconFilePath: getCharacterAvatarFileName(CharacterName.MATTHEW, CharacterExpression.CONCERNED),
      title: 'John is under investigation',
      content: [
        'I\'m very sorry to inform you that John is under investigation for leaking state secrets.',
        'We have no choice but to turn him over to the authorities and pause any operations he was leading.',
      ]
    },
    {
      senderIconFilePath: getCharacterAvatarFileName(CharacterName.MATTHEW, CharacterExpression.FRIENDLY),
      title: 'Congratulations on our first successful mission',
      content: [
        'Great job handling the incident, the port is finally back in operation.',
        'The authorities have been notified of how the culprits got in, and we will be prepared if anyone tries this again.',
      ]
    },
  ];

  const mockSectorSecurityLevels: SectorSecurityLevels = {
    [Sector.COMMUNICATIONS]: SecurityMaturityLevel.NOVICE,
    [Sector.ENERGY]: SecurityMaturityLevel.INTERMEDIATE,
    [Sector.FINANCIAL_SERVICES]: SecurityMaturityLevel.ADVANCED,
    [Sector.HEALTHCARE]: SecurityMaturityLevel.UNKNOWN,
    [Sector.TRANSPORTATION]: SecurityMaturityLevel.INADEQUATE,
  };

  it('renders correctly for desktop', () => {
    mockWindow(DeviceType.DESKTOP);

    const { getByAltText } = render(
      <SecurityConsole
        alerts={mockAlerts}
        messages={mockMessages}
        sectorSecurityLevels={mockSectorSecurityLevels}
      />
    );

    const img = getByAltText('Security Console');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', `${BASE_URL_PATH}/images/SecurityConsole/SecurityConsole_DesktopMockup.svg`);
  });

  it('renders correctly for mobile', () => {
    mockWindow(DeviceType.MOBILE);

    const { getByAltText } = render(
      <SecurityConsole
        alerts={mockAlerts}
        messages={mockMessages}
        sectorSecurityLevels={mockSectorSecurityLevels}
      />
    );

    const img = getByAltText('Security Console');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', `${BASE_URL_PATH}/images/SecurityConsole/SecurityConsole_MobileMockup.png`);
  });
});
