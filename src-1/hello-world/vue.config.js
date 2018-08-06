'use strict'
// Template version: 1.2.1
// see http://vuejs-templates.github.io/webpack for documentation.

// https://stackoverflow.com/questions/40315451/proxy-requests-to-a-separate-backend-server-with-vue-cli
// https://stackoverflow.com/questions/48851677/how-to-direct-vue-cli-to-put-built-project-files-in-different-directories
// https://blog.logrocket.com/vue-cli-3-the-deep-dive-41dff070ac4a
// https://webpack.js.org/configuration/
// https://alligator.io/vuejs/demistifying-vue-webpack/
// https://stackoverflow.com/questions/47677256/path-to-static-assets-in-vue-js-application
// => https://github.com/vuejs/vue-cli/issues/869
// https://cli.vuejs.org/guide/build-targets.html#library
// https://blog.usejournal.com/getting-to-know-the-new-vue-cli-3-user-interface-a173b00128bd
module.exports = {

    baseUrl: process.env.NODE_ENV === 'production' ? '/dist/' : '/',

    assetsDir: './',

    devServer: {

        /*
        // https://vuejs-templates.github.io/webpack/static.html
        build: {
            //assetsPublicPath: './',
            assetsPublicPath: '/',
            assetsSubDirectory: 'static'
        },
        */

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
