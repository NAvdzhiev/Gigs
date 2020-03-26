import Vue from 'vue'
import Vuex from 'vuex'
//import axios from '../../axios-auth'
//import globalAxios from 'axios'

//import router from '../../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null,
        roles: null
    },
   
})