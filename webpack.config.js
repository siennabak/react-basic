const webpack = require('webpack');
const path = require('path');

module.exports = {
  name: 'wordrelay-set',
  mode: 'production',
  devtool: 'eval',// hidden-source-map(when it's production)
  resolve: {
    extensions: ['.js', '.jsx'], //확장자를 jsx까지 추가
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules:[{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env',{
            targets: {
              browsers: ['> 5% in KR', 'dead']
            },
            debug: true
          }],
          '@babel/preset-react'],
        plugins: [],
      },
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true})
  ],
  output: {
    path: path.join(__dirname, 'dist'), //dirname: current folder
    filename: 'app.js',
  },
}