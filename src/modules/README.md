## Modules

按照以下方式书写，该模块则会被安装使用

```ts
import type { UserModule } from '@/types'

export const install: UserModule = ({ app, router, isClient }) => {
    // do something
}
```