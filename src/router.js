import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    }
]

export default new VueRouter({mode: 'history', routes})