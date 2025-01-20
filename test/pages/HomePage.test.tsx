import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { GAME_TAGLINE, GAME_TITLE } from '../../src/constants/GameMetadata';
import { HOME_URL_PATH, GAME_URL_PATH } from '../../src/constants/UrlPaths';
import { HomePage } from '../../src/pages/HomePage';

const mockGamePageText = 'Mock game page';

function renderHomePage() {
  return render(
    <MemoryRouter basename={HOME_URL_PATH} initialEntries={['/']}>
      <Routes>
        <Route path={HOME_URL_PATH} element={<HomePage />} />
        <Route path={GAME_URL_PATH} element={<div>{mockGamePageText}</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('HomePage', () => {
  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
  });

  it('renders the Cyber Command logo', () => {
    renderHomePage();
    const logo = screen.getByAltText('Cyber Command logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the main headings', () => {
    renderHomePage();
    const mainHeading = screen.getByRole('heading', { level: 1 });
    const subHeading = screen.getByRole('heading', { level: 3 });

    expect(mainHeading).toHaveTextContent(GAME_TITLE);
    expect(subHeading).toHaveTextContent(GAME_TAGLINE);
  });

  it('navigates to the game page when the play button is clicked', async () => {
    const { getByTestId, getByText } = renderHomePage();

    const button = getByTestId('play-button');
    expect(button).toHaveTextContent('Play');

    fireEvent.click(button);

    await waitFor(() => {
      expect(getByText(mockGamePageText)).toBeInTheDocument();
    });
  });

  it('renders the GitHub link', () => {
    renderHomePage();
    const githubLink = screen.getByRole('link', { name: /Project source code/i });
    const githubLogo = screen.getByAltText('GitHub logo');

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/msayson/cyber-command-ui');
    expect(githubLogo).toBeInTheDocument();
  });
});
