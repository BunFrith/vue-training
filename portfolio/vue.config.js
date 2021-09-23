const path = require('path')



// module.exports = {
//   devServer: {
//     proxy: {
//       '/wp-json': {
//         target: 'http://www.bun-frith.pp.ua',
//         secure: false,
//         changeOrigin: true
//       }
//     }
//   }
// }

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/sass/style.sass"'
      }
    }
  }
};