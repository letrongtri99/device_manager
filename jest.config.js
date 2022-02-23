module.exports = {
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
