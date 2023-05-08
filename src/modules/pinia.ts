import type { App } from 'vue'
import type { PiniaPluginContext } from 'pinia'
import { createPinia } from 'pinia'

interface IPersistStrategy {
    key?: string
    storage?: Storage
    paths?: string[]
}

interface IPersistOptions {
    enabled: true
    strategies?: IPersistStrategy[]
}

type IStore = PiniaPluginContext['store']
type IPartialState = Partial<IStore['$state']>

declare module 'pinia' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export interface DefineStoreOptionsBase< S, Store> {
        persist?: IPersistOptions
    }
}

const updateStorage = (strategy: IPersistStrategy, store: IStore) => {
    const storage = strategy.storage || sessionStorage
    const storeKey = strategy.key || store.$id

    if (strategy.paths) {
        const partialState = strategy.paths.reduce((finalObj, key) => {
            finalObj[key] = store.$state[key]
            return finalObj
        }, {} as IPartialState)

        storage.setItem(storeKey, JSON.stringify(partialState))
    }
    else {
        storage.setItem(storeKey, JSON.stringify(store.$state))
    }
}

const piniaPersist = ({ options, store }: PiniaPluginContext): void => {
    if (options.persist?.enabled) {
        const defaultStrat: IPersistStrategy[] = [{
            key: store.$id,
            storage: sessionStorage,
        }]

        const strategies = options.persist?.strategies?.length ? options.persist?.strategies : defaultStrat

        strategies.forEach((strategy) => {
            const storage = strategy.storage || sessionStorage
            const storeKey = strategy.key || store.$id
            const storageResult = storage.getItem(storeKey)

            if (storageResult) {
                store.$patch(JSON.parse(storageResult))
                updateStorage(strategy, store)
            }
        })

        watch(() => store.$state, () => {
            strategies.forEach((strategy) => {
                updateStorage(strategy, store)
            })
        }, { deep: true })
    }
}

// https://pinia.esm.dev/
export const install = (app: App) => {
    const pinia = createPinia()
    // 持久化
    pinia.use(piniaPersist)
    app.use(pinia)
}
