module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./'],
          alias: {
            assets: './assets',
            components: './components',
            config: './config',
            constants: './constants',
            modules: './modules',
            services: './services',
            store: './store',
            utils: './utils',
          },
        },
      ],
    ],
  };
};
