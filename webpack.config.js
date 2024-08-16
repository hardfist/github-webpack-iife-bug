const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    iife: false,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
    },
  },
  optimization: {
    minimize: false,
  },
};
