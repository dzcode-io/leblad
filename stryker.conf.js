/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
	mutator: 'javascript',
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
