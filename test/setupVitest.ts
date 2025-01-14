import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with @testing-library/jest-dom matchers
expect.extend(matchers);
