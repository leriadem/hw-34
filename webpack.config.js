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
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'], // Підтримка LESS
      },

      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Підтримка SCSS
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
      },
      
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
  resolve: {
  extensions: ['.ts', '.js'],
},
};
