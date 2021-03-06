// Jest configuration
// https://facebook.github.io/jest/docs/en/configuration.html

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

module.exports = {
  // Modules can be explicitly auto-mocked using jest.mock(moduleName).
  // https://facebook.github.io/jest/docs/en/configuration.html#automock-boolean
  automock: false, // [boolean]

  // Respect Browserify's "browser" field in package.json when resolving modules.
  // https://facebook.github.io/jest/docs/en/configuration.html#browser-boolean
  browser: false, // [boolean]

  // This config option can be used here to have Jest stop running tests after the first failure.
  // https://facebook.github.io/jest/docs/en/configuration.html#bail-boolean
  bail: false, // [boolean]

  // The directory where Jest should store its cached dependency information.
  // https://facebook.github.io/jest/docs/en/configuration.html#cachedirectory-string
  // cacheDirectory: '/tmp/<path>', // [string]

  // Indicates whether the coverage information should be collected while executing the test.
  // Because this retrofits all executed files with coverage collection statements,
  // it may significantly slow down your tests.
  // https://facebook.github.io/jest/docs/en/configuration.html#collectcoverage-boolean
  // collectCoverage: false, // [boolean]

  // https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],

  // https://facebook.github.io/jest/docs/en/configuration.html#coveragedirectory-string
  coverageDirectory: '<rootDir>/coverage', // [string]

  // coveragePathIgnorePatterns: // [array<string>]
  // coverageReporters: [], // [array<string>]
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98
    }
  }, // [object]

  globals: {
    __DEV__: true
  },

  // https://facebook.github.io/jest/docs/en/configuration.html#mapcoverage-boolean
  // mapCoverage: false, // [boolean]

  // The default extensions Jest will look for.
  // https://facebook.github.io/jest/docs/en/configuration.html#modulefileextensions-array-string
  moduleFileExtensions: ['js', 'json', 'jsx', 'mjs', 'node'],

  moduleDirectories: ['node_modules', 'src'],

  // A map from regular expressions to module names that allow to stub out resources,
  // like images or styles with a single module.
  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy',
    '~/(.*)$': '<rootDir>/src/$1'
  },

  // modulePathIgnorePatterns: // [array<string>]
  // modulePaths: // [array<string>]
  // notify: false, // [boolean]
  // preset: // [string]
  // projects: // [array<string>]
  // clearMocks: // [boolean]
  // reporters: // [array<moduleName | [moduleName, options]>]
  // resetMocks: // [boolean]
  // resetModules: // [boolean]
  // resolver: // [string]
  // rootDir: // [string]
  // roots: // [array<string>]
  setupFiles: ['whatwg-fetch', 'raf/polyfill'], // [array]
  // setupTestFrameworkScriptFile: // [string]
  // snapshotSerializers: // [array<string>]
  // testEnvironment: 'node', // [string]
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ], // [array<string>]
  // testPathIgnorePatterns: // [array<string>]
  // testRegex: // [string]
  // testResultsProcessor: // [string]
  // testRunner: // [string]
  testURL: 'http://localhost', // [string]
  // timers: // [string]

  transform: {
    '\\.(js|jsx|mjs)$': require.resolve('babel-jest'),
    '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)':
      '<rootDir>/config/jest/fileTransform.js'
  },

  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'], // [array<string>]
  // unmockedModulePathPatterns: // [array<string>]

  verbose: true // [boolean]
};
