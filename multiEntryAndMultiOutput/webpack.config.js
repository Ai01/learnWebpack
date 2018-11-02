const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    index2: './src/index2.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js', // 表示输出的js文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: './src/index.html',
      title: 'test',
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['index2'],
      filename: 'index2.html',
      template: './src/index2.html',
      title: 'test2',
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};
