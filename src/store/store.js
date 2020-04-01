import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import artist from './modules/artist';

//import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: user,
        artist: artist
    }
});