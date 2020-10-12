module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/stryker.conf.js',
    '/.stryker-tmp/*',
    '/.reports/*'
  ],
};
