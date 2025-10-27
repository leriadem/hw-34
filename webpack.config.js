const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входу
  output: {
    filename: '[name].[contenthash].js', // Хешування
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  mode: 'production', // або 'development'
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Підтримка CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource', // Робота з зображеннями
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        type: 'asset/resource', // Робота зі шрифтами
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // очищає dist/
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack Project',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Оптимізація бібліотек
    },
  },
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
};
