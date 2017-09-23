import * as types from '../mutationTypes'
import { dropdown as ajax } from 'services'
// 基础数据
export default {
    // 省
    getRegionStates: ({ state, commit }) => {
        const stateList = state.basic.stateList
        if (stateList.length === 0) {
            ajax.getRegionList('').then((result) => {
                commit(types.GET_REGIONS, result)
            })
        }
    },
}