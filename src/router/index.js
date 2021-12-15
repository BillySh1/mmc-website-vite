import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

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