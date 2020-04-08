import db from '../../firebaseInit'
import router from '../../router'

const state = {
    artistList: []
};

const mutations = {
    addArtist(state, payload) {
        state.artistList.push(payload)
    },

    updateArtist (state, payload) {
        const artist = state.artistList.find(artist => {
          return artist.id === payload.id
        })
        if (payload.name) {
          artist.name = payload.name
        }
        if (payload.description) {
          artist.description = payload.description
        }
        if (payload.imageUrl) {
            artist.imageUrl = payload.imageUrl
        }
      }
};

const actions = {
    listArtists() {
        db.collection('artists').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'name': doc.data().name,
                    'description': doc.data().description,
                    'imageUrl': doc.data().imageUrl,
                    'reviews': doc.data().reviews,
                    'gigs': doc.data().gigs
                }
                state.artistList.push(data);
            })
        })
    },
    addArtist({ commit }, payload) {
        db.collection('artists').set({
            name: payload.name,
            description: payload.description,
            imageUrl: payload.imageUrl,
        })
            .then(docRef => {
                commit('addArtist', docRef)
                router.replace('/artist-list')
            })
            .catch(err => {
                console.log(err);

            })
    },
    updateArtist({commit}, payload) {
        const updateObj = {};
        if (payload.name) {
            updateObj.name = payload.name
        }
        if (payload.description) {
            updateObj.description = payload.description
        }
        if (payload.imageUrl) {
            updateObj.imageUrl = payload.imageUrl
        }
        db.collection('artists').doc(payload.id).update(
            updateObj
        )
        .then(() => {
            commit('updateArtist', payload)
            router.replace('/artist-list')
        })
    }
};

const getters = {
    loadedArtists(state) {
        return state.artistList.sort((a, b) => {
            return a.name > b.name
        });
    },
    loadedArtist(state) {
        return (artistId) => {
            return state.artistList.find((artist) => {
                return artist.id === artistId
            })
        }
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}