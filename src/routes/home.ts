import type { RouteRecordRaw } from 'vue-router'
const home: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                    toolbar: {
                        transparent: true,
                    },
                },
            },
        ],
    },
]

export default home
