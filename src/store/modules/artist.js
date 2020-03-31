const state = {
    artistList: []
};

const mutations = {
    addArtist(state, payload) {
        state.artistList.push(payload)
    }
};

const actions = {
    
};

const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}