import Vue from 'vue'
import VueRouter from 'vue-router'
//import {store} from './store/store'

import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import AddArtist from './views/Artist/AddArtist.vue';
import ArtistList from './views/Artist/ArtistList.vue';
import ArtistDetails from './views/Artist/ArtistDetails.vue';

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: Register,
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
    },
    {
        path: '/artist/:id',
        props: true,
        component: ArtistDetails
    },
]

export default new VueRouter({mode: 'history', routes})