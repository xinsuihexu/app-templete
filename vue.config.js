const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
    transpileDependencies: true,

    publicPath: './',

    configureWebpack: {
        plugins: [
            require('unplugin-auto-import/webpack')({
                imports: [
                    'vue',
                    'vue-router',
                    'vue-i18n',
                ],
                dts: 'src/auto-imports.d.ts',
            }),

            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },

    devServer: {
        open: false,
        // proxy: {
        //     '/api': {
        //         target: 'http://10.10.99.23:7220/',
        //         changeOrigin: true,
        //         pathRewrite: { '^/api': '' },
        //     },
        // },
    },

    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    },
})
