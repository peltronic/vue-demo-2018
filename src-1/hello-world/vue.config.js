'use strict'
// Template version: 1.2.1
// see http://vuejs-templates.github.io/webpack for documentation.

// https://stackoverflow.com/questions/40315451/proxy-requests-to-a-separate-backend-server-with-vue-cli
module.exports = {
    devServer: {
        // Paths
        //assetsSubDirectory: 'static',
        publicPath: '/', //assetsPublicPath: '/',
        proxy: {
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
