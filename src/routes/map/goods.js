// 商品中心
const Main = resolve => require(['views/main/index.vue'], resolve) // 主页框架
const GoodsList = resolve => require(['views/goods/goodsList/index.vue'], resolve) // 商品列表
const GoodsClass = resolve => require(['views/goods/goodsClass/index.vue'], resolve) //商品分类
const GoodsTag = resolve => require(['views/goods/goodsTag/index.vue'], resolve) //商品标签


export default [
    {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            title: '管理系统'
        },
        children: [
            {
                path: '/goodsList',
                name: 'goodsList',
                component: GoodsList,
                meta: {
                    title: '商品列表'
                }
            },
            {
                path: '/goodsClass',
                name: 'goodsClass',
                component: GoodsClass,
                meta: {
                    title: '商品分类'
                }
            },
            {
                path: '/goodsTag',
                name: 'goodsTag',
                component: GoodsTag,
                meta: {
                    title: '商品标签'
                }
            },
        ]
    }
]