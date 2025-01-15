import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { GamePage } from '../../src/pages/GamePage';

describe('GamePage', () => {
  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
  });

  it('renders the initial dialog with input textbox', () => {
    render(<GamePage />);

    expect(screen.getByText(/You must be our new Chief/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders the welcome message after entering name', () => {
    render(<GamePage />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByRole('button', { name: /enter/i }));

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByText(/Excellent, welcome to the team, John Doe/i)).toBeInTheDocument();
  });

  it('increments the count when the button is clicked', () => {
    render(<GamePage />);
    const button = screen.getByRole('button', { name: /count is/i });

    expect(button).toHaveTextContent('count is 0');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });
});
