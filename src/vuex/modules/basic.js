// 基础数据
import * as types from '../mutationTypes'

const state = {
    stateList: [], // 省
}

const mutations = {
    // 保存省数据
    [types.GET_REGIONS] (state, data) {
        state.stateList = data
    },
} 

export default{
    state,
    mutations
}