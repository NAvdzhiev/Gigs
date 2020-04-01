import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import AddArtist from './views/AddArtist.vue';
import ArtistList from './views/ArtistList.vue';

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
    },
    {
        path: '/add-artist',
        component: AddArtist
    },
    {
        path: '/artist-list',
        component: ArtistList
    }
]

export default new VueRouter({mode: 'history', routes})