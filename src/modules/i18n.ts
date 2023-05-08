import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

// const messages = Object.fromEntries(
//     Object.entries(
//         import.meta.glob('../locales/*.y(a)?ml', { eager: true }),
//     ).map(([key, value]) => {
//         return [(key.split('/').pop() as any).split('.')[0], (value as any).default]
//     }),
// )

export const install = (app: App): void => {
    const i18n = createI18n({
        legacy: false,
        // TODO 需动态取值 => localstorage
        locale: 'en',
        // messages,
    })

    app.use(i18n)
}
