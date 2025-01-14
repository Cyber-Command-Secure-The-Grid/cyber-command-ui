import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { GamePage } from '../../src/pages/GamePage';

describe('GamePage', () => {
  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
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
