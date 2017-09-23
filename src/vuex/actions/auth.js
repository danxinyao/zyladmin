import * as types from '../mutationTypes'

export default {
    /**
     * 保存登录token
     */
    setAuth: ({ commit }, token) => {
        commit(types.AUTH, token)
    },
    removeAuth: ({ commit }) => {
        commit(types.REMOVE_AUTH)
    }
}