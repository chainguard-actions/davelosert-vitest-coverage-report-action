import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        lines: 75,
        branches: 75,
        functions: 75,
        statements: 75
      }
    }
  }
});
