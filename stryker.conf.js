/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: { name: 'javascript', excludedMutations: ['StringLiteral'] },
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  testRunner: 'jest',
  transpilers: [],
  coverageAnalysis: 'off',
  files: [
    'src/**/*.js',
    'tests/**/*.js',
    'data/*.*',
  ]
};
