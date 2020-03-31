import * as firebase from 'firebase'
import router from '../../router'

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
            comments: [],
            gigs: []
        }
        firebase.database().ref('artists').push(artist)
        .then(data => {
            const key = data.key
            commit('addArtist', {
                ...artist,
                id: key,
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