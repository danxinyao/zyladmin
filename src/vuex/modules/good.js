import * as types from '../mutationTypes'

const state = {
    goodsList: []
}

const mutations = {
    [types.SET_GOODS](state, data){
        state.goodsList = data
    }
}

export default{
    state,
    mutations
}