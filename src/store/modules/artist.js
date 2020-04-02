import * as firebase from 'firebase'
import router from '../../router'

const state = {
    artistList: []
};

const mutations = {
    setArtists(state, payload) {
        state.artistList = payload
    },
    addArtist(state, payload) {
        state.artistList.push(payload)
    },
};

const actions = {
    listArtists({ commit }) {
        firebase.database().ref('artists').once('value')
            .then((data) => {
                const artists = []
                const obj = data.val()
                for (let key in obj) {
                    artists.push({
                        id: key,
                        name: obj[key].name,
                        description: obj[key].description,
                        imageUrl: obj[key].imageUrl,
                    })
                }
                commit('setArtists', artists)
            })
            .catch(err => {
                console.log(err);
            })
    },
    addArtist({ commit }, payload) {
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
    },
};

const getters = {
    loadedArtists(state) {
        return state.artistList.sort((a, b) => {
            return a.name > b.name
        });
    },
    loadedArtist (state) {
        return (artistId) => {
          return state.artistList.find((artist) => {
            return artist.id === artistId
          })
        }
      }
};

export default {
    state,
    mutations,
    actions,
    getters
}