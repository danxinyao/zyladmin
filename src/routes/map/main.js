const Main = resolve => require(['views/main/index.vue'], resolve) // 主页框架
const Demo = resolve => require(['views/demo/index.vue'], resolve) // demo


const Account = resolve => require(['views/power/account/index.vue'], resolve) // 账号管理
const Role = resolve => require(['views/power/role/index.vue'], resolve) // 角色管理

const Mall = resolve => require(['views/mall/index/index.vue'], resolve) // 商城管理首页
const ZylDecoration = resolve => require(['views/mall/decoration/index.vue'], resolve) // 紫云来商城装修
const YcDecoration = resolve => require(['views/mall/decoration_yc/index.vue'], resolve) // 懿城商城装修
const Mallorder = resolve => require(['views/mall/mallorder/index.vue'], resolve) // 商城订单
const Auctionorder = resolve => require(['views/mall/auctionorder/index.vue'], resolve) // 拍卖订单
const Refundorder = resolve => require(['views/mall/refundorder/index.vue'], resolve) // 售后订单
const logisticsManager = resolve => require(['views/mall/logisticsManager/index.vue'], resolve) // 运费模板配置
//const Setaddress = resolve => require(['views/mall/setAddress/index.vue'], resolve) // 发/退货地址

const Integration = resolve => require(['views/composite/integration/index.vue'], resolve) // 综合管理首页
const Information = resolve => require(['views/composite/information/index.vue'], resolve) // 资讯中心
const InformationClassification = resolve => require(['views/composite/InformationClassification/index.vue'], resolve) // 资讯分类
const Advertisement = resolve => require(['views/composite/advertisement/index.vue'], resolve) // 咨询中心
const CustomView = resolve => require(['views/composite/customView/index.vue'], resolve) // 自定义页面
const HomeSwiper = resolve => require(['views/composite/homeSwiper/index.vue'], resolve) // 轮播图
const OnlineService = resolve => require(['views/composite/onlineService/customer.vue'],resolve)  //在线客服
const LeaveMsg = resolve => require(['views/composite/leaveMsg/index.vue'],resolve)  //留言管理
const ExchangeList = resolve => require(['views/composite/integralmall/exchangeList/index.vue'],resolve)  //兑换记录

const User = resolve => require(['views/user/user/index.vue'],resolve)  //用户管理
const UserRank = resolve => require(['views/user/rank/index.vue'],resolve)  //用户等级管理

const Shop = resolve => require(['views/park/shop/index.vue'],resolve)  //商户管理
const Property = resolve => require(['views/park/property/index.vue'],resolve)  //物业管理

const Integralexchange = resolve => require(['views/composite/integralmall/integralexchange/index.vue'],resolve)  //积分兑换活动
const Integralgoods = resolve => require(['views/composite/integralmall/integralgoods/index.vue'],resolve)  //参与积分商品
const Sendintegral = resolve => require(['views/composite/integralmall/sendintegral/index.vue'],resolve)  //送积分
const Finance = resolve => require(['views/composite/finance/index.vue'],resolve)  // 财务营收

const userArea = resolve => require(['views/mall/saleAnalysis/userDistribution/index.vue'],resolve)  // 用户地区分布
const userIncrease = resolve => require(['views/mall/saleAnalysis/userIncrease/index.vue'],resolve)  // 用户增长统计
const turnoverRate = resolve => require(['views/mall/saleAnalysis/turnoverRate/index.vue'],resolve)  // 老顾客回头率
const orderCount = resolve => require(['views/mall/saleAnalysis/orderCount/index.vue'],resolve)  // 订单统计
const goodRank = resolve => require(['views/mall/saleAnalysis/goodRank/index.vue'],resolve)  // 商品排行
const usersRank = resolve => require(['views/mall/saleAnalysis/userRank/index.vue'],resolve)  // 用户排行

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
                path: '/demo',
                name: 'demo',
                component: Demo
            },
            {
                path: '/account',
                name: 'account',
                component: Account,
                meta: {
                    title: '账号管理'
                }
            },
            {
                path: '/role',
                name: 'role',
                component: Role,
                meta: {
                    title: '角色管理'
                }
            },
            {
                path: '/integration',
                name: 'integration',
                component: Integration,
                meta: {
                    title: '综合管理首页',
                }
            },
            {
                path: '/InformationClassification',
                name: 'InformationClassification',
                component: InformationClassification,
                meta: {
                    title: '资讯分类',
                }
            },
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
            {
                path: '/customView',
                name: 'customView',
                component: CustomView,
                meta: {
                    title: '自定义页面',
                }
            },
            {
                path: '/homeSwiper',
                name: 'homeSwiper',
                component: HomeSwiper,
                meta: {
                    title: '轮播图',
                }
            },
            {
                path: '/onlineService',
                name: 'onlineService',
                component: OnlineService,
                meta: {
                    title: '在线客服',
                }
            },
            {
                path: '/leaveMsg',
                name: 'leaveMsg',
                component: LeaveMsg,
                meta: {
                    title: '留言管理',
                }
            },
            {
                path: '/user',
                name: 'user',
                component: User,
                meta: {
                    title: '用户管理',
                }
            },
            {
                path: '/userrank',
                name: 'userrank',
                component: UserRank,
                meta: {
                    title: '用户等级管理',
                }
            },
            {
                path: '/shop',
                name: 'shop',
                component: Shop,
                meta: {
                    title: '商户管理',
                }
            },
            {
                path: '/property',
                name: 'property',
                component: Property,
                meta: {
                    title: '物业管理',
                }
            },
            {
                path: '/integralexchange',
                name: 'integralexchange',
                component: Integralexchange,
                meta: {
                    title: '积分兑换活动',
                }
            },
            {
                path: '/integralgoods',
                name: 'integralgoods',
                component: Integralgoods,
                meta: {
                    title: '参与积分商品',
                }
            },
            {
                path: '/sendintegral',
                name: 'sendintegral',
                component: Sendintegral,
                meta: {
                    title: '送积分',
                }
            },
            {
                path: '/finance',
                name: 'finance',
                component: Finance,
                meta: {
                    title: '财务营收',
                }
            },            
            {
                path: '/mall',
                name: 'mall',
                component: Mall,
                meta: {
                    title: '商城管理首页',
                }
            },
            {
                path: '/zylDecoration',
                name: 'zylDecoration',
                component: ZylDecoration,
                meta: {
                    title: '紫云来商城装修',
                }
            },
            {
                path: '/ycDecoration',
                name: 'ycDecoration',
                component: YcDecoration,
                meta: {
                    title: '懿城商城装修',
                }
            },
            {
                path: '/mallorder',
                name: 'mallorder',
                component: Mallorder,
                meta: {
                    title: '商城订单',
                }
            },
            {
                path: '/auctionorder',
                name: 'auctionorder',
                component: Auctionorder,
                meta: {
                    title: '拍卖订单',
                }
            },
            {
                path: '/refundorder',
                name: 'refundorder',
                component: Refundorder,
                meta: {
                    title: '售后订单',
                }
            },
            {
                path: '/logisticsManager',
                name: 'logisticsManager',
                component: logisticsManager,
                meta: {
                    title: '运费模板',
                }
            },
            // {
            //     path: '/setaddress',
            //     name: 'setaddress',
            //     component: Setaddress,
            //     meta: {
            //         title: '发/退货地址',
            //     }
            // },            
            {
                path: '/exchangeList',
                name: 'exchangeList',
                component: ExchangeList,
                meta: {
                    title: '兑换记录',
                }
            },
            {
                path: '/userArea',
                name: 'userArea',
                component: userArea,
                meta: {
                    title: '用户地区分布',
                }
            },
            {
                path: '/userIncrease',
                name: 'userIncrease',
                component: userIncrease,
                meta: {
                    title: '用户增长统计',
                }
            },
            {
                path: '/turnoverRate',
                name: 'turnoverRate',
                component: turnoverRate,
                meta: {
                    title: '老顾客回头率',
                }
            },
            {
                path: '/orderCount',
                name: 'orderCount',
                component: orderCount,
                meta: {
                    title: '订单统计',
                }
            },
            {
                path: '/goodRank',
                name: 'goodRank',
                component: goodRank,
                meta: {
                    title: '商品排行',
                }
            },
            {
                path: '/usersRank',
                name: 'usersRank',
                component: usersRank,
                meta: {
                    title: '用户排行',
                }
            },
        ]
    }
]