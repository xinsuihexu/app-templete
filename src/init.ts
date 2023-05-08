import type { App } from 'vue'
import { useTitle } from '@vueuse/core'
import { SplashScreen } from '@capacitor/splash-screen'

import { install as installPinia } from './modules/pinia'
import { install as installRouter } from './modules/router'
import { install as installUI } from './modules/ui'

const useSpashScreen = async () => {
    await SplashScreen.hide()

    // 采用延时手动关闭，解决启动屏之后出现的短暂白屏
    setTimeout(() => {
        SplashScreen.hide()
    }, 2000)

    setTimeout(() => {
        SplashScreen.hide()
    }, 3000)

    await SplashScreen.show({
        showDuration: 2000,
        autoHide: false,
    })
}

// install all modules under `modules/`
const installModules = (app: App) => {
    [installRouter, installPinia, installUI].forEach(f => f(app))
    // Object.values(import.meta.glob('./modules/*.ts', { eager: true })).forEach(i => (i as any).install?.(app))
}

const initGlobalInfo = () => {
    useTitle('五老星')
}

export default async function init(app: App) {
    await installModules(app)
    await useSpashScreen()

    initGlobalInfo()
}
