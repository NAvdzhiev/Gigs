import db from '../../firebaseInit'
import router from '../../router'

const state = {
    artistList: []
};

const mutations = {
    addArtist(state, payload) {
        state.artistList.push(payload)
    },

    addReview(state, payload) {
        state.artistList.push(payload)
    },

    addGig(state, payload) {
        state.artistList.push(payload)
    },

    updateArtist(state, payload) {
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
        db.collection('artists').orderBy('name').limit(6).onSnapshot(snapshot => {
            state.artistList = []
            snapshot.forEach(doc => {
                state.artistList.push({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    imageUrl: doc.data().imageUrl,
                    reviews: doc.data().reviews,
                    gigs: doc.data().gigs,
                    creatorId: doc.data().creatorId
                })
            })
        })
        .catch(err => {
            console.log(err);
        })
    },
    addArtist({ commit, getters }, payload) {
        db.collection('artists').add({
            name: payload.name,
            description: payload.description,
            imageUrl: payload.imageUrl,
            creatorId: getters.user.id
        })
            .then(docRef => {
                commit('addArtist', docRef)
                router.replace('/')
            })
            .catch(err => {
                console.log(err);

            })
    },
    addReview({ commit }, payload) {
        const reviewObj = {
            text: payload.text,
            date: payload.date
        };
        db.collection('artists').doc(payload.id).collection('reviews').add(
            reviewObj
        )
            .then(() => {
                commit('addReview', payload)
            })
            .catch(err => {
                console.log(err);

            })
    },
    addGig({ commit }, payload) {
        const gigObj = {
            name: payload.name,
            location: payload.location,
            venue: payload.venue,
            venueImg: payload.venueImg,
            date: payload.date,
            ticketPrice: payload.ticketPrice

        };
        db.collection('artists').doc(payload.id).collection('gigs').add(
            gigObj
        )
            .then(() => {
                commit('addGig', payload)
            })
            .catch(err => {
                console.log(err);
            })
    },
    updateArtist({ commit }, payload) {
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
            .catch(err => {
                console.log(err);

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