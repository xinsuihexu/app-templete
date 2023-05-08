import type { App } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
import VideoPlay from 'vue3-video-play'

import {
    ActionSheet,
    Area,
    Badge,
    Button,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    CountDown,
    DatetimePicker,
    Divider,
    Field,
    Icon,
    Image,
    Lazyload,
    List,
    Loading,
    NavBar,
    Popup,
    PullRefresh,
    Radio,
    RadioGroup,
    Search,
    Skeleton,
    Stepper,
    Sticky,
    Swipe,
    SwipeItem,
    Switch,
    Tab,
    Tabs,
    Tag,
    TreeSelect,
    Uploader,
} from 'vant'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vue3-video-play/dist/style.css'

const baseComponentList = [
    Button,
    Field,
    CellGroup,
    Icon,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    CountDown,
    Sticky,
    Image,
    Popup,
    TreeSelect,
    Lazyload,
    Cell,
    NavBar,
    Swipe,
    SwipeItem,
    ActionSheet,
    Uploader,
    DatetimePicker,
    Divider,
    Tag,
    Area,
    Badge,
    Search,
    List,
    Skeleton,
    Tab,
    Tabs,
    Switch,
    Loading,
    PullRefresh,
    Loading,
    Stepper,
]

const registerBaseComponent = (app: App, baseComponentList: any[]) => {
    baseComponentList.forEach(component => app.use(component))

    app.component('VideoPlay', VideoPlay)
}

// TODO 阿里iconfont cdn 无法使用，后续等正常可以使用再切换回去

const registerIcon = (app: App) => {
    const Icon = createFromIconfontCN({
        // scriptUrl: '../assets/icon/iconfont.js',
        scriptUrl: 'https://at.alicdn.com/t/c/font_3525404_qfg9dxbnmzi.js',
    })

    app.component('Icon', Icon)
}

export const install = (app: App) => {
    registerBaseComponent(app, baseComponentList)
    // registerBusinessComponent(app, businessComponentList)

    registerIcon(app)
}
