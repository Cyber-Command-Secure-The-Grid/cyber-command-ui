import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';
import { gameTitle } from '../src/pages/HomePage';

describe('App component', () => {
  it('renders the homepage', () => {
    render(
      <App />
    );

    expect(screen.getByText(gameTitle)).toBeInTheDocument();
  });
});
