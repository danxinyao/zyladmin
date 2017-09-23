const Information = resolve => require(['views/composite/information/index.vue'], resolve) // 资讯中心
const Advertisement = resolve => require(['views/composite/advertisement/index.vue'], resolve) // 咨询中心

export default [
    {
        path: '/information',
        name: 'information',
        component: Information,
        meta: {
            title: '资讯中心',
        }
    },
    {
        path: '/advertisement',
        name: 'advertisement',
        component: Advertisement,
        meta: {
            title: '广告位管理',
        }
    },
]