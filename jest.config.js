
module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
  testTimeout: 60000,
  transform: {
    '^.+\\.(j|t)s(x)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    `/node_modules/(?!${nodeModules}).+\\.js$`,
  ],
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).{js,ts,tsx,mjs}'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
