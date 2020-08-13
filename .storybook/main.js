// const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    // '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    // '@storybook/addon-actions',
    // '@storybook/addon-knobs',
    // '@storybook/addon-links',
  ],

  // webpackFinal: (config) => console.dir(config, { depth: null }) || config,
  
  webpackFinal: async (config) => {

    // Make whatever fine-grained changes you need

    config.module.rules.push({
      test: /\.css$/,
      loader: "css-loader"
    })

    config.module.rules.push({
      test: /\.less$/,
      loaders: [ "style-loader", "css-loader", "less-loader" ] 
    })
    
    // Return the altered config
    return config;
  }
}



