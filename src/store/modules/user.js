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
            .then(userCredentials => {
                const user = userCredentials.user
                const newUser = {
                    id: user.uid,
                    email: user.email
                }
                commit('setUser', newUser);
                router.replace('/login');
                return db.collection('users').add({
                    email: user.email,
                    age: payload.age,
                    country: payload.country,
                    imageUrl: payload.imageUrl
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
    autoLogin ({commit}, payload) {
        commit('setUser', {
            id: payload.uid,
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