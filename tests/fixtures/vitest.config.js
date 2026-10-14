import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        lines: 70,
        statements: 70,
        functions: 70,
        branches: 70
      }
    }
  }
});
