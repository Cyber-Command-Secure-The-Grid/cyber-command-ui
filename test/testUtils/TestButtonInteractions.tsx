import { fireEvent, screen } from '@testing-library/react';

const BUTTON_ROLE = 'button';
const ENTER_BUTTON_SELECTOR = { name: /Enter/ };
const NEXT_BUTTON_SELECTOR = { name: /Next/ };

export enum BUTTON_NAME {
  ENTER = 'Enter',
  NEXT = 'Next',
}

const BUTTON_SELECTORS: Record<BUTTON_NAME, { name: RegExp }> = {
  [BUTTON_NAME.ENTER]: ENTER_BUTTON_SELECTOR,
  [BUTTON_NAME.NEXT]: NEXT_BUTTON_SELECTOR,
};

export function clickButton(buttonName: BUTTON_NAME): void {
  const nextButton = getButton(buttonName);
  fireEvent.click(nextButton);
}

export function getButton(buttonName: BUTTON_NAME): HTMLButtonElement {
  return screen.getByRole(BUTTON_ROLE, BUTTON_SELECTORS[buttonName]);
}

export function queryButton(buttonName: BUTTON_NAME): HTMLButtonElement | null {
  return screen.queryByRole(BUTTON_ROLE, BUTTON_SELECTORS[buttonName]);
}
