'use strict'
// Template version: 1.2.1
// see http://vuejs-templates.github.io/webpack for documentation.

// https://stackoverflow.com/questions/40315451/proxy-requests-to-a-separate-backend-server-with-vue-cli
module.exports = {

    baseUrl: process.env.NODE_ENV === 'production' ? '/dist/' : '/',

    devServer: {

        // https://vuejs-templates.github.io/webpack/static.html
        build: {
            //assetsPublicPath: './',
            assetsPublicPath: '/',
            assetsSubDirectory: 'static'
        },

        // Paths
        //assetsSubDirectory: 'static',
        publicPath: '/', //assetsPublicPath: '/',
        proxy: {
            '/img': {
                target: 'http://localhost:3000/img/',
                changeOrigin: true,
                pathRewrite: {
                    '^/img': ''
                }
            },
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    }
};
