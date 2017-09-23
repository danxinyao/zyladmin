// 登录token
import * as types from '../mutationTypes'

const state = {
    // 登录token
    authToken: ''
}

const mutations = {
    /**
     * 登录token
     */
    [types.AUTH] (state, token) {
        state.authToken = token
    },
    [types.REMOVE_AUTH] (state) {
        state.authToken = ''
    }
} 

export default{
    state,
    mutations
}