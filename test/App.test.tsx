import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';
import { GAME_TITLE } from '../src/constants/GameMetadata';

describe('App component', () => {
  it('renders the homepage', () => {
    render(
      <App />
    );

    expect(screen.getByText(GAME_TITLE)).toBeInTheDocument();
  });
});
