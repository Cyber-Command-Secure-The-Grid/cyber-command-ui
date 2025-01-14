import { configDefaults, defineConfig } from 'vitest/config';

import testCoverageExclusions from './testCoverageExclusions.json';

export default defineConfig({
  test: {
    ...configDefaults,
    environment: 'jsdom',
    setupFiles: './test/setupVitest.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'json'],
      exclude: testCoverageExclusions.exclude,
      thresholds: {
        statements: 80, // minimum code coverage
        branches: 80, // minimum branch coverage
        functions: 80, // minimum functions coverage
        lines: 80, // minimum lines coverage
      },
    },
  }
});
