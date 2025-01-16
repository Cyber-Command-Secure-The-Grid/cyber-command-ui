import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Dialog } from '../../src/components/Dialog';
import { DialogMetadata } from '../../src/config/dialog';

describe('Dialog component', () => {
  beforeEach(() => {
    vi.resetAllMocks(); // Reset all mocks before each test
  });

  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
  });

  const onOptionSelect = vi.fn();

  it('renders dialog text', () => {
    const dialogMetadata: DialogMetadata = {
      id: 'test-dialog',
      text: ['Hello, world!', 'This is a test dialog.'],
    };

    render(<Dialog dialog={dialogMetadata} onOptionSelect={onOptionSelect} />);

    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    expect(screen.getByText('This is a test dialog.')).toBeInTheDocument();
  });

  it('renders options when present', () => {
    const dialogMetadata: DialogMetadata = {
      id: 'test-dialog',
      text: ['Hello, world!', 'This is a test dialog.'],
      options: [
        { text: 'Option 1', nextDialogId: 'option-1' },
        { text: 'Option 2', nextDialogId: 'option-2' },
      ],
    };

    render(<Dialog dialog={dialogMetadata} onOptionSelect={onOptionSelect} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('does not render options when not present', () => {
    const dialogMetadata: DialogMetadata = {
      id: 'test-dialog',
      text: ['Hello, world!', 'This is a test dialog.'],
    };

    render(<Dialog dialog={dialogMetadata} onOptionSelect={onOptionSelect} />);

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  it('calls onOptionSelect when an option is clicked', () => {
    const dialogMetadata: DialogMetadata = {
      id: 'test-dialog',
      text: ['Hello, world!', 'This is a test dialog.'],
      options: [
        { text: 'Option 1', nextDialogId: 'option-1' },
        { text: 'Option 2', nextDialogId: 'option-2' },
      ],
    };

    render(<Dialog dialog={dialogMetadata} onOptionSelect={onOptionSelect} />);

    const optionButton = screen.getByText('Option 1');
    fireEvent.click(optionButton);

    expect(onOptionSelect).toHaveBeenCalledTimes(1);
    expect(onOptionSelect).toHaveBeenCalledWith('option-1');
  });
});
