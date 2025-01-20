import { JSDOM } from 'jsdom';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with @testing-library/jest-dom matchers
expect.extend(matchers);

// Update the global window to use the correct base URL for tests
const base = '/cyber-command-ui';
const jsdom = new JSDOM('', { url: `http://localhost${base}/` });
const { window } = jsdom;

global.window = window as unknown as Window & typeof globalThis;
global.document = window.document;
global.location = window.location;
