const path = require('path');

module.exports = {
  mode: 'production',
  entry: './codeasthram.html',
  output: {
    filename: 'bundle.js', // Specify the output file name
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
  },
};