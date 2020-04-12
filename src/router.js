import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import AddArtist from './components/Artist/AddArtist.vue';
import ArtistList from './components/Artist/ArtistList.vue';
import ArtistDetails from './components/Artist/ArtistDetails.vue';
import Profile from './components/User/Profile.vue';
import Wishlist from './components/User/Whishlist.vue';
import Concerts from './components/User/Concerts.vue';
import AuthGuard from './authGuard';

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        component: Home,
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
        component: Profile,
        beforeEnter: AuthGuard
    },
    {
        path: '/wishlist/:id',
        props: true,
        component: Wishlist,
        beforeEnter: AuthGuard
    },
    {
        path: '/my-concerts/:id',
        props: true,
        component: Concerts,
        beforeEnter: AuthGuard
    },
    {
        path: '*',
        redirect: '/'
    }
]

export default new VueRouter({ mode: 'history', routes })