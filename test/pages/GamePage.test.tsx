import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { GamePage } from '../../src/pages/GamePage';

describe('GamePage', () => {
  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
  });

  it('renders initial dialog with Next button', () => {
    render(<GamePage />);

    expect(screen.getByText(/You must be our new Chief/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('allows player to click Next through dialogs and submit player name', () => {
    render(<GamePage />);

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
