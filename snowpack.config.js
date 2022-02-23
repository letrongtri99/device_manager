const alias = require('./config/alias');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias,
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-babel',
    'snowpack-plugin-svgr',
  ],
  exclude: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
  },
  packageOptions: {
    knownEntrypoints: ['@emotion/styled/base'],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
