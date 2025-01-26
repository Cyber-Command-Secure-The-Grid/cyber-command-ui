import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { GAME_TITLE } from '../../src/constants/GameMetadata';
import { BASE_URL_PATH, HOME_URL_PATH } from '../../src/constants/UrlPaths';
import { GamePage } from '../../src/pages/GamePage';
import { BUTTON_NAME, clickButton, queryButton } from '../testUtils/TestButtonInteractions';

function renderGamePage() {
  return render(
    <MemoryRouter basename={HOME_URL_PATH}>
      <GamePage />
    </MemoryRouter>
  );
}

function validateRenderedSecurityConsole() {
  const securityConsoleImage = screen.getByAltText('Security Console');
  expect(securityConsoleImage).toBeInTheDocument();

  const securityConsoleImageSrc = securityConsoleImage.getAttribute('src');
  if (!securityConsoleImageSrc) fail('Security console image src is undefined');

  const rootPath: string = path.resolve(__dirname, '../../');
  const filePath: string = path.join(rootPath, securityConsoleImageSrc.replace(/cyber-command-ui\//, 'public/'));
  expect(fs.existsSync(filePath)).toBe(true);
}

describe('GamePage', () => {
  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
  });

  it('renders the Header component', () => {
    renderGamePage();

    const homeLink: HTMLAnchorElement = screen.getByRole('link', { name: GAME_TITLE });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders starting dialog with expected NPC avatar, text, and Next button', () => {
    renderGamePage();

    const npcAvatar = screen.getByTestId('npc-avatar');
    expect(npcAvatar).toBeInTheDocument();
    const src = npcAvatar.getAttribute('src');
    expect(src).toBe(`${BASE_URL_PATH}/images/CharacterAvatars/MatthewFriendly.svg`);

    expect(screen.getByText(/You must be our new Chief/i)).toBeInTheDocument();
    expect(queryButton(BUTTON_NAME.NEXT)).toBeInTheDocument();
  });

  it('allows player to click through dialogs, submit name, and view console', () => {
    renderGamePage();

    let nextButton = queryButton(BUTTON_NAME.NEXT);
    expect(nextButton).toBeInTheDocument();
    while (nextButton) {
      fireEvent.click(nextButton);
      nextButton = queryButton(BUTTON_NAME.NEXT);
    }

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    clickButton(BUTTON_NAME.ENTER);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByText(/Welcome to the team, John Doe/i)).toBeInTheDocument();

    clickButton(BUTTON_NAME.NEXT);
    validateRenderedSecurityConsole();
  });
});
