import * as types from '../mutationTypes.js'

export default {
    selectGoods: ({ commit }, data) => {
        commit(types.SET_GOODS, data)
    }
}