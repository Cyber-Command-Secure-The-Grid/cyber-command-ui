import { JSDOM } from 'jsdom';
import { vi } from 'vitest';

export enum DeviceType {
  DESKTOP,
  MOBILE,
}

/**
 * Mock the global window to use the correct base URL for tests,
 * and mock window.matchMedia for unit tests since this is not
 * available in server-side or other non-browser environments.
 */
export function mockWindow(deviceType: DeviceType): void {
  const base = '/cyber-command-ui';
  const jsdom = new JSDOM('', { url: `http://localhost${base}/` });
  const { window } = jsdom;

  const maxWidth = (deviceType === DeviceType.DESKTOP ? '1024' : '480');

  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query === `(max-width: ${maxWidth}px)`,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

  global.window = window as unknown as Window & typeof globalThis;
  global.document = window.document;
  global.location = window.location;
}
