// Fixture vitest config used only so the action can parse coverage thresholds.
export default {
  test: {
    coverage: {
      thresholds: {
        lines: 60,
        statements: 70,
        functions: 70,
        branches: 40,
      },
    },
  },
};
