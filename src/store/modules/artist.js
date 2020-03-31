import axios from 'axios';
import router from 'vue-router';

const state = {
    artistList: []
};

const mutations = {
    addArtist(state, payload) {
        state.artistList.push(payload)
    }
};

const actions = {
    addArtist({commit}, payload) {
        const artist = {
            name: payload.name,
            description: payload.description,
            imageUrl: payload.imageUrl,
            gigs: payload.gigs
        }
        axios.post('/artistList.json', {
            artist
        })
        .then(res => {
            console.log(res);
            commit('addArtist', {
                ...artist
            })
            router.replace('/');
        })
        .catch(err => {
            console.log(err);
            
        }) 
    }
};

const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}