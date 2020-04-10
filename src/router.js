import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import AddArtist from './views/Artist/AddArtist.vue';
import ArtistList from './views/Artist/ArtistList.vue';
import ArtistDetails from './views/Artist/ArtistDetails.vue';
import Profile from './views/User/Profile.vue';
import Whishlist from './views/User/Whishlist.vue';
import Concerts from './views/User/Concerts.vue';
import AuthGuard from './authGuard';

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
        component: AddArtist,
        beforeEnter: AuthGuard
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
    {
        path: '/profile/:id',
        props: true,
        component: Profile
    },
    {
        path: '/whishlist/:id',
        props: true,
        component: Whishlist
    },
    {
        path: '/my-concerts/:id',
        props: true,
        component: Concerts
    }
]

export default new VueRouter({ mode: 'history', routes })