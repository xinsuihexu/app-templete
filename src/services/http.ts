import axios from 'axios'
import { Toast } from 'vant'
import { useUserStore } from '@/stores/user'

const instance = axios.create({
    baseURL: 'http://www.test.cn:8099/',
    timeout: 30000,
})

instance.interceptors.request.use((config) => {
    const userStore = useUserStore()
    const token = userStore.getToken

    if (token && config.headers)
        config.headers.Authorization = token

    return config
})

instance.interceptors.response.use(({ data }) => {
    if (data.code === 400)
        Toast.fail('出小差啦')

    return data
}, (e) => {
    console.log('fetch>>>>>>', e)

    if (e.response?.status === 403) {
        const userStore = useUserStore()
        userStore.deleteUserInfo()

        Toast.fail('授权已过期，请重新登录')

        window.location = '' as unknown as Location
    }
    else {
        Toast.fail('出小差啦')
    }
})

export default instance
