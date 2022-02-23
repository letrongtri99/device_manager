const alias = require('./config/alias');

module.exports = {
  extends: '@snowpack/app-scripts-react/babel.config.json',
  env: {
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
      ],
    },
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias,
      },
    ],
    '@emotion',
  ],
};
