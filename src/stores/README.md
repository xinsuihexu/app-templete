## 状态管理
[`pinia`](https://pinia.vuejs.org/)

## 状态持久化
[`pinia-persist`](../plugins/pinia-persist.ts)

- 基本用法：
默认情况下整个状态将存储在 sessionStorage 中,store id用作存储键（可设置自定义存储键）
```typescript
// store/user.ts
export const useUserStore = defineStore({
    id: 'store-user',
    state () {
        return {
            firstName: 'S',
            lastName: 'L',
            accessToken: 'xxxxxxxxxxxxx',
        }
    },
    persist: {
        enabled: true,
    },
})

```

- 自定义存储key以及使用localstorage存储状态
```typescript
// store/user.ts
export const useUserStore = defineStore({
    id: 'store-user',
    state () {
        return {
            firstName: 'S',
            lastName: 'L',
            accessToken: 'xxxxxxxxxxxxx',
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
              key: 'store-user-uuid',
              storage: localStorage,
            },
        ],
    },
})
```

- 保持部分状态用法：
默认情况下，整个状态都是持久化的，但是可以通过paths来指定要持久化的状态键。
在本例中，我们将firstName和lastName保存在 sessionStorage 中，并将accessToken保存在 localStorage 中。
```typescript
// store/user.ts
export const useUserStore = defineStore({
    id: 'store-user',
    state () {
        return {
            firstName: 'S',
            lastName: 'L',
            accessToken: 'xxxxxxxxxxxxx',
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: sessionStorage, paths: ['firstName', 'lastName']},
            { storage: localStorage, paths: ['accessToken']},
        ],
    },
})
```

- 自定义存储用法：
需在对象内实现getItem (key) {} 以及 setItem (key, state) {}, 以下demo通过js-cookie展示如何存储accessToken到cookie
```typescript
// store/user.ts
import Cookies from 'js-cookie'

const cookiesStorage: Storage = {
    setItem (key, state) {
        return Cookies.set('accessToken', state.accessToken, { expires: 3 })
    },
    getItem (key) {
      return JSON.stringify({
          accessToken: Cookies.get('accessToken'),
      })
    },
}


export const useUserStore = defineStore({
    id: 'store-user',
    state () {
        return {
            firstName: 'S',
            lastName: 'L',
            accessToken: 'xxxxxxxxxxxxx',
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: cookiesStorage,
                paths: ['accessToken'],
            },
        ],
    },
})
```

