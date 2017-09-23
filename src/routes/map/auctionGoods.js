// 拍卖商品
const Main = resolve => require(['views/main/index.vue'], resolve) // 主页框架
const AuctionGoodsList = resolve => require(['views/auctionGoods/auctionGoodsList/index.vue'], resolve) // 拍卖商品列表
const AuctionSpecial = resolve => require(['views/auctionGoods/auctionSpecial/index.vue'], resolve) // 拍卖专场管理


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
                path: '/auctionGoodsList',
                name: 'auctionGoodsList',
                component: AuctionGoodsList,
                meta: {
                    title: '拍品管理'
                }
            },
            {
                path: '/auctionSpecial',
                name: 'auctionSpecial',
                component: AuctionSpecial,
                meta: {
                    title: '拍卖专场管理'
                }
            },
        ]
    }
]