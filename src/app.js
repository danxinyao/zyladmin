import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import routes from './routes'
import store from './vuex'
import { sync } from 'vuex-router-sync'   
import cookie from 'js-cookie'
import Element from 'element-ui'
import Component from './components'  // 全局组件
import * as util from './util/common'
import '!style-loader!css-loader!less-loader!normalize.css'    // normalize重置浏览器样式
import '!style-loader!css-loader!less-loader!./assets/styles/theme/theme.less' // 引入主题样式
// import '!style!css!less!./assets/font/iconfont.css'   // 引入字体样式
import '!style-loader!css-loader!less-loader!./assets/styles/common.less' // 引入公共样式
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(Component)
Vue.use(Element)
Vue.prototype.util = util

// 路由实例
const router = new VueRouter({
    mode: 'history', // hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。history: 依赖 HTML5 History API 和服务器配置。
    scrollBehavior(to, from, savePosition) {   // 前进或后退,滚动到原来的位置
        if (savePosition) {
            return savePosition
        } else {
            return {
                x: 0,
                y: 0,
            }
        }
    },
    routes: [
        ...routes,
    ],
})


sync(store,router)

router.beforeEach((to, from, next) => {
    if (to.path === '/log') {
        next()
    }
    else if (!store.getters.authToken || store.getters.authToken === '') {
        next('/log')
    }
    else {
        if (to.fullPath === '/') {
            next('/log')
        }
        else {
            next()
        }
    }
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')


