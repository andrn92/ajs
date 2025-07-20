const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // catalog for result build
    filename: 'index.js', // file name with result build (must coincide with entry point)
    library: 'ajs', // name our library
    libraryTarget: 'umd', // UMD (Universal Module Definition https://github.com/umdjs/umd) - template, which get use RequireJS and browser
    libraryExport: 'default', // export name default
    globalObject: 'this', // what use so global object, otherwise generated window, but it doesn't exist on Node.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }, 
      },
    ],
  },
}
