module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  // coverageThreshold: undefined,
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
