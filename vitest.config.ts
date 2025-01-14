import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    ...configDefaults,
    environment: 'jsdom',
    setupFiles: './test/setupVitest.ts'
  }
});
