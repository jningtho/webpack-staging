//const config = {
//    entry: {
//        src: './src/index.js',
//    }
//    output: {
//        filename: 'bundle.js',
//        path: './build'
//    }
//};

//module.exports = config;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
