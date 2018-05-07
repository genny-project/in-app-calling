// production config
const { resolve } = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const commonConfig = require( './common' );

module.exports = {
  ...commonConfig,
  entry: ['./index.jsx'],
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.min.js',
    path: resolve( __dirname, '../../dist/web' ),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html.ejs' }),
  ],
};
