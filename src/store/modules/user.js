import db from '../../firebaseInit';
import * as firebase from 'firebase';
import router from '../../router';


const state = {
    user: null
};

const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
};

const actions = {
    register({ commit }, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                const newUser = {
                    id: user.uid,
                }
                commit('setUser', newUser)
                router.replace('/login')
                return db.collection('users').doc(user.uid).set({
                    age: payload.age,
                    imageUrl: payload.imageUrl,
                    country: payload.country,
                    gigs: []
                })  
            })
    },
    login({ commit }, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                const newUser = {
                    id: user.uid,
                }
                commit('setUser', newUser)
                router.replace('/')
            })
    },
    logout({ commit }) {
        firebase.auth().signOut()
        commit('setUser', null)
        router.replace('/')
    }
};

const getters = {
    user(state) {
        return state.user
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}