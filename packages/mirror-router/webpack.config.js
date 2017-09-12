const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, '../..', 'dist'),
    filename: '[name].js',
    library: `mirror-router`,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
