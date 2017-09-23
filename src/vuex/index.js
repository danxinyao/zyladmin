import promisePolyfill from 'es6-promise'   // es6 promise polyfill
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import * as types from './mutationTypes'

promisePolyfill.polyfill()
Vue.use(Vuex)

import demo from './modules/demo'
import loading from './modules/loading'
import auth from './modules/auth'
import good from './modules/good'
import basic from './modules/basic'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        demo,
        loading,
        auth,
        good,
        basic
    }
})