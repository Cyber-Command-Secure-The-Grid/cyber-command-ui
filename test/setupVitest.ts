import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

import { DeviceType, mockWindow } from './testUtils/TestWindow';

// Extend Vitest's expect with @testing-library/jest-dom matchers.
expect.extend(matchers);

/**
 * Mock the global window to imitate a desktop browser environment.
 *
 * Call mockWindow(DeviceType.DESKTOP) in unit tests to test
 * mobile-specific behaviour.
 */
mockWindow(DeviceType.DESKTOP);
