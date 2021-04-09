/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: { excludedMutations: ['StringLiteral'] },
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  testRunner: 'jest',
  coverageAnalysis: 'off',
  files: ['src/**/*.js', 'tests/**/*.js', 'data/*.*'],
};
