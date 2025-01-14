import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { gameTagLine, gameTitle, HomePage } from '../../src/pages/HomePage';

describe('HomePage', () => {
  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
  });

  it('renders the Cyber Command logo', () => {
    render(<HomePage />);
    const logo = screen.getByAltText('Cyber Command logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the main headings', () => {
    render(<HomePage />);
    const mainHeading = screen.getByRole('heading', { level: 1 });
    const subHeading = screen.getByRole('heading', { level: 3 });

    expect(mainHeading).toHaveTextContent(gameTitle);
    expect(subHeading).toHaveTextContent(gameTagLine);
  });

  it('increments the count when the button is clicked', () => {
    render(<HomePage />);
    const button = screen.getByRole('button', { name: /count is/i });

    expect(button).toHaveTextContent('count is 0');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });

  it('renders the GitHub link', () => {
    render(<HomePage />);
    const githubLink = screen.getByRole('link', { name: /Project source code/i });
    const githubLogo = screen.getByAltText('GitHub logo');

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/msayson/cyber-command-ui');
    expect(githubLogo).toBeInTheDocument();
  });
});
