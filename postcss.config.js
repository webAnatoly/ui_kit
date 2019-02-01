// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev

// module.exports = {
//   plugins: [
//     require('autoprefixer'), // to edit target browsers: use "browserslist" field in package.json
//     // require('css-mqpacker'),
//     // require('cssnano')
//   ]
// }

module.exports = {
  plugins: {
    'autoprefixer': {},
    'cssnano': {}
  }
}