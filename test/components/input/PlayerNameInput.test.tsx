import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { PlayerNameInput } from '../../../src/components/input/PlayerNameInput';

describe('PlayerNameInput component', () => {
  const onEnterMock = vi.fn();
  const setNameMock = vi.fn();

  const validPlayerName = 'John Doe';

  beforeEach(() => {
    vi.resetAllMocks(); // Reset all mocks before each test
  });

  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
  });

  function renderPlayerNameInput() {
    return render(<PlayerNameInput onEnter={onEnterMock} setName={setNameMock} />);
  }

  it('renders the input field and button', () => {
    renderPlayerNameInput();

    const inputField = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Enter' });

    expect(inputField).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('calls setName when input field changes', () => {
    renderPlayerNameInput();

    const inputField = screen.getByRole('textbox');
    fireEvent.change(inputField, { target: { value: validPlayerName } });

    expect(setNameMock).toHaveBeenCalledTimes(1);
    expect(setNameMock).toHaveBeenCalledWith(validPlayerName);
  });

  it('calls onEnter when Enter key is pressed if input field is non-empty', () => {
    renderPlayerNameInput();

    const inputField = screen.getByRole('textbox');
    fireEvent.change(inputField, { target: { value: validPlayerName } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });

    expect(onEnterMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onEnter when Enter key is pressed if input field is empty', () => {
    renderPlayerNameInput();

    const inputField = screen.getByRole('textbox');
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });

    expect(onEnterMock).toHaveBeenCalledTimes(0);
  });

  it('calls onEnter when button is clicked', () => {
    renderPlayerNameInput();

    const button = screen.getByRole('button', { name: 'Enter' });
    fireEvent.click(button);

    expect(onEnterMock).toHaveBeenCalledTimes(1);
  });

  function validateDeletingHighlightedTest(deletionKey: string) {
    renderPlayerNameInput();

    const fullName = 'John Alexander Smith';

    const inputField: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(inputField, { target: { value: fullName } });

    // Simulate highlighting the substring "Alexander "
    inputField.setSelectionRange(5, 15);

    fireEvent.keyDown(inputField, { key: deletionKey, code: deletionKey });

    expect(setNameMock).toHaveBeenCalledTimes(2);
    expect(setNameMock).toHaveBeenNthCalledWith(1, fullName);
    expect(setNameMock).toHaveBeenNthCalledWith(2, 'John Smith');
  }

  it('calls setName with highlighted substring deleted when Backspace key is pressed', () => {
    validateDeletingHighlightedTest('Backspace');
  });

  it('calls setName with highlighted substring deleted when Delete key is pressed', () => {
    validateDeletingHighlightedTest('Delete');
  });

  it('does not call setName when input field contains invalid characters', () => {
    renderPlayerNameInput();

    const inputField = screen.getByRole('textbox');
    fireEvent.change(inputField, { target: { value: '<John Doe>' } });

    expect(setNameMock).not.toHaveBeenCalled();
  });
});
