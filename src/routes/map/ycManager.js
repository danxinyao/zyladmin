// 懿城管理
const Main = resolve => require(['views/main/index.vue'], resolve) // 主页框架
const scenicmanager  = resolve => require(['views/ycManager/scenicmanager/index.vue'], resolve) // 景点管理
const ticketType  = resolve => require(['views/ycManager/ticketType/index.vue'], resolve) // 门票类型管理
const scenicOrder  = resolve => require(['views/ycManager/scenicOrder/index.vue'], resolve) // 景点订单

const culturalSchedule  = resolve => require(['views/ycManager/culturalSchedule/index.vue'], resolve) // 文化课程表
const culturalOrder  = resolve => require(['views/ycManager/culturalOrder/index.vue'], resolve) // 文化课订单


const Hotelmanager  = resolve => require(['views/ycManager/hotelmanager/index.vue'], resolve) // 酒店管理
const Housemanager  = resolve => require(['views/ycManager/housemanager/index.vue'], resolve) // 房型管理
const hotelOrder  = resolve => require(['views/ycManager/hotelOrder/index.vue'], resolve) // 景点订单


export default [
    {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            title: '管理系统',
        },
        children: [
            {
                path: '/scenicmanager',
                name: 'scenicmanager',
                component: scenicmanager,
                meta: {
                    title: '景点管理',
                }
            },
            {
                path: '/ticketType',
                name: 'ticketType',
                component: ticketType,
                meta: {
                    title: '门票类型管理',
                }
            },
            {
                path: '/scenicOrder',
                name: 'scenicOrder',
                component: scenicOrder,
                meta: {
                    title: '景点订单',
                }
            },
            {
                path: '/culturalSchedule',
                name: 'culturalSchedule',
                component: culturalSchedule,
                meta: {
                    title: '文化课程表',
                }
            },
            {
                path: '/culturalOrder',
                name: 'culturalOrder',
                component: culturalOrder,
                meta: {
                    title: '文化课订单',
                }
            },
            {
                path: '/hotelmanager',
                name: 'hotelmanager',
                component: Hotelmanager,
                meta: {
                    title: '酒店管理',
                }
            },
            {
                path: '/housemanager',
                name: 'housemanager',
                component: Housemanager,
                meta: {
                    title: '房型管理',
                }
            },
            {
                path: '/hotelOrder',
                name: 'hotelOrder',
                component: hotelOrder,
                meta: {
                    title: '酒店订单',
                }
            },              
        ]
    }

]