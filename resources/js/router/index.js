import Vue from 'vue'
import VueRouter from 'vue-router'

import Page404 from "@/pages/Page404";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HomeView.vue')
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: () => import('../pages/AdminView.vue')
    },
    {
        path: "*",
        component:Page404,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
