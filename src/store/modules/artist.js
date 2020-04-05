import db from '../../firebaseInit'
import router from '../../router'

const state = {
    artistList: []
};

const mutations = {
    addArtist(state, payload) {
        state.artistList.push(payload)
    },
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
                    'comments': doc.data().comments,
                    'gigs': doc.data().gigs
                }
                state.artistList.push(data);
            })
        })
    },
    addArtist({commit}, payload) {
        db.collection('artists').add({
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