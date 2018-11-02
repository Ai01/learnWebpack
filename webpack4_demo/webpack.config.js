const path = require('path');
const HelloWorldPlugin = require('./plugins/exampelPlugin.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: './loaders/deconsole.js',
            options: {
              name: 'loader test'
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HelloWorldPlugin({ name: 'plugin test' })
  ]
};
