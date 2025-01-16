import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { GAME_TITLE } from '../../src/constants/GameMetadata';
import { GamePage } from '../../src/pages/GamePage';

function renderGamePage() {
  return render(
    <MemoryRouter>
      <GamePage />
    </MemoryRouter>
  );
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

  it('renders initial dialog with Next button', () => {
    renderGamePage();

    expect(screen.getByText(/You must be our new Chief/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('allows player to click Next through dialogs and submit player name', () => {
    renderGamePage();

    let nextButton = screen.queryByRole('button', { name: /Next/i });
    expect(nextButton).toBeInTheDocument();
    while (nextButton) {
      fireEvent.click(nextButton);
      nextButton = screen.queryByRole('button', { name: /Next/i });
    }

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByRole('button', { name: /enter/i }));

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByText(/Excellent, welcome to the team, John Doe/i)).toBeInTheDocument();
  });
});
