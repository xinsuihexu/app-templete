declare interface Window {
    // extend the window
    _AMapSecurityConfig: Record<string, unknown>
    StatusBar: any
    xunbei: Record<string, unknown>
    cordova: any
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'mpvue-calendar/dist/lunar'
declare module 'mpvue-calendar'
declare module '*.png'
declare module 'vue3-video-play'
declare module '*.svg'
