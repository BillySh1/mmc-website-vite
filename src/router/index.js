import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: () => import('../components/layout.vue')
        }
       
    ]
})

export default router


