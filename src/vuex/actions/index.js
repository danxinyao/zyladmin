import * as types from '../mutationTypes'
import demo from './demo'
import loading from './loading' // 列表加载动画
import auth from './auth'
import good from './good' //积分商品的选择
import basic from './basic' //省

export default {
    ...demo,
    ...loading,
    ...auth,
    ...good,
    ...basic
}