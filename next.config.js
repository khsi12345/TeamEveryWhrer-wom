const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withSass({
    target: 'server',
    webpack(config, options) {
      config.module.rules.push(
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        },
        // (config.resolve.modules = [...config.resolve.modules, './src']),
      );
      return config;
    },
    plugins: [
      'module-resolver',
      {
        alias: {
          '~/*': '.',
        },
      },
    ],
  }),
);
