import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

import homeRoute from '../routes/home'

const routes = [
    ...homeRoute,
]

// https://router.vuejs.org/zh/guide/
export const install = (app: App) => {
    const router = createRouter({
        history: createWebHashHistory(),
        routes: [
            ...routes,
            // {
            //     path: '/404',
            //     name: '404',
            //     component: () => import('@/layouts/404.vue'),
            // },
        ],
    })

    router.beforeEach((to, from, next) => {
        next()
    })

    router.afterEach((to) => {
        const onDeviceReady = () => {
            if (window.StatusBar) {
                const toolbar = to.meta.toolbar as any

                if (toolbar) {
                    if (toolbar.transparent) {
                        window.StatusBar.overlaysWebView(true)
                        window.StatusBar.backgroundColorByHexString('#00000000')
                        window.StatusBar.styleDefault()
                    }
                    else {
                        window.StatusBar.show()
                        window.StatusBar.overlaysWebView(false)
                        window.StatusBar.backgroundColorByHexString(toolbar.bgColor || '#fff')
                        window.StatusBar.styleDefault()
                    }
                }
                else {
                    window.StatusBar.show()
                    window.StatusBar.overlaysWebView(false)
                    window.StatusBar.backgroundColorByHexString('#fff')
                    window.StatusBar.styleDefault()
                }
            }
        }

        document.addEventListener('deviceready', onDeviceReady, false)
    })

    app.use(router)
}
