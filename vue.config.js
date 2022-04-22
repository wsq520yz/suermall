const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({

  chainWebpack: config => {
    // config.module
    //   .rule('images')
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .tap(options => Object.assign(options, { limit: 500000 }))
    console.log(config.module.rule('images').use('url-loader').loader('url-loader').tap(options => Object.assign(options,{limit:50000})));
  },
  configureWebpack:{
    resolve:{
      alias:{
        // @对应src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  transpileDependencies: true,
});
