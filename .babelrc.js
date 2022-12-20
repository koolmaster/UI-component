const env = process.env.NODE_ENV;

module.exports = {
  presets: [['@babel/preset-env', { modules: env === 'test' ? 'auto' : false }], '@babel/preset-react'],
  plugins: [
    'babel-plugin-styled-components',
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
