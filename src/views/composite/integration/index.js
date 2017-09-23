import echarts from 'echarts'
import PgInfoBox from './components/infoBox/index.vue'
import PgList from './components/list/index.vue'
import PgLinks from './components/links/index.vue'

import {integration as ajax} from 'services'

export default {
    components: {
        PgInfoBox,
        PgList,
        PgLinks
    },
    data() {
        return{
            isCircle: true,
            todayMsgNum: 0,
            todayMsgList: [
                {
                    from: '门户',
                    num: 0
                },
                {
                    from: '茶都',
                    num: 0
                },
                {
                    from: '懿城',
                    num: 0
                }
            ],
            customMsgNum: 0,
            customMsgList: [
                {
                    from: '在线咨询',
                    num: 0
                },
                {
                    from: '留言',
                    num: 0
                }
            ],
            userMsgList: [
                {
                    from: '线上用户',
                    num: 0
                },
                {
                    from: '线下用户',
                    num: 0
                }
            ],
            payList: [],
            sevenDaySaleType: ['景点订单','酒店订单','课程订单','会员订单'],
            sevenDaySaleList: [],
            s_ec: null,
            s_ec_options: {},
            shopSaleType: [],
            shopSaleList: [],
            linkList:[
                {
                    icon: 'money',
                    title: '门户咨询',
                    path: '/information'
                },
                {
                    icon: 'money',
                    title: '轮播图',
                    path: '/homeSwiper'
                },
                {
                    icon: 'money',
                    title: '在线客服',
                    path: '/onlineService'
                },
                {
                    icon: 'money',
                    title: '留言管理',
                    path: '/leaveMsg'
                }
            ]
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.getNowInformationQty()
            this.getCustomerConsultQty()
            this.getUserOriginQty()
            this.getNewConsumptionRecord()        
            
            this.getSevenDaySaleroom()
            //this.drawSevenDaySaleroomMap()
            this.initShopSaleroomMap()
            this.getMallOrderAmount()                      
        },
        //今日资讯
        getNowInformationQty() {
            ajax.getNowInformationQty().then((result) => {
                this.todayMsgNum = result.totalQty
                this.todayMsgList[0].num = result.portalQty
                this.todayMsgList[1].num = result.teaQty
                this.todayMsgList[2].num = result.portalQty
                //console.log(result)
            })
        },
        //客户咨询
        getCustomerConsultQty() {
            ajax.getCustomerConsultQty().then((result) => {
                this.customMsgNum = result.totalQty
                this.customMsgList[0].num = result.onlineQty
                this.customMsgList[1].num = result.levelMsgQty
                //console.log(result)
            })
        },
        //用户统计
        getUserOriginQty() {
            ajax.getUserOriginQty().then((result) => {
                this.userMsgList[0].num = result.onlineQty
                this.userMsgList[1].num = result.offlineQty
                //console.log(result)
                this.drawUserOriginMap()
            })
        },
        //绘制用户统计表格
        drawUserOriginMap() {
            const c_ec = echarts.init(document.getElementById('circleChart'))  //用户统计表格
            const c_ec_options = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}({d}%)"
                },
                series: [
                    {
                        name: '用户统计',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%','60%'],
                        data:[
                            {value:this.userMsgList[0].num, name:this.userMsgList[0].from},
                            {value:this.userMsgList[1].num, name:this.userMsgList[1].from}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            c_ec.setOption(c_ec_options)
        },
        //获取7天销售额
        getSevenDaySaleroom() {
            ajax.getSevenDaySaleroom().then((result) => {
                this.sevenDaySaleList[0] = result.scienSale
                this.sevenDaySaleList[1] = result.hotelSale
                this.sevenDaySaleList[2] = result.courseSale
                this.sevenDaySaleList[3] = result.memberSale
                //console.log(this.sevenDaySaleList)

                this.drawSevenDaySaleroomMap()
            })
        },
        //获取7天销售额的日期
        getSevenDaySaleroomDate() {
            var day = []
            for( var i = 0; i < this.sevenDaySaleList.length; i++ ) {
                if( this.sevenDaySaleList[i] && this.sevenDaySaleList[i].length > 0 && day.length == 0 ) {
                    for( var j = 0; j < this.sevenDaySaleList[i].length; j++ ) {
                        day.push(this.sevenDaySaleList[i][j].day) 
                    }
                }
            }
            return day
        },
        //获取7天销售额的数量
        getSevenDaySaleroomTotal() {
            var series = []
            var total = []
            for( var i = 0; i < this.sevenDaySaleList.length; i++ ) {
                if( this.sevenDaySaleList[i] && this.sevenDaySaleList[i].length > 0 ) {
                    total[i] = []
                    for( var j = 0; j < this.sevenDaySaleList[i].length; j++ ) {
                        total[i].push(this.sevenDaySaleList[i][j].totalAmount)
                    }
                }else {
                    total[i] = []
                }
                series[i] = {
                    name: this.sevenDaySaleType[i],
                    type: 'line',
                    data: total[i]
                }
            }
            return series
        },
        //绘制7天销售额表格
        drawSevenDaySaleroomMap() {
            //console.log(this.sevenSaleList)
            const u_ec = echarts.init(document.getElementById('userChart'))  //7天统计表格
            const u_ec_options = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: this.sevenDaySaleType
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        formatter: function (value, idx) {
                            var date = new Date(value);
                            return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
                        }
                    },
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    data: this.getSevenDaySaleroomDate()
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 人'
                    }
                },
                series: this.getSevenDaySaleroomTotal()
            }
            u_ec.setOption(u_ec_options)
        },
        //最新消费
        getNewConsumptionRecord() {
            ajax.getNewConsumptionRecord().then((result) => {
                this.payList = result
            })
        },
        //商城成交
        getMallOrderAmount() {
            ajax.getMallOrderAmount().then((result) => {
                this.clearShopSaleroom()
                this.shopSaleList[0] = result

                this.shopSaleType = ['商城成交']
                this.s_ec_options.legend.data = this.shopSaleType
                this.s_ec_options.xAxis.data = this.getShopSaleroomDate()
                this.s_ec_options.series = this.getShopSaleroomTotal()
                this.s_ec.setOption(this.s_ec_options,true)
            })
        },
        //预订成交
        getReservationOrderAmount() {
            ajax.getReservationOrderAmount().then((result) => {
                this.clearShopSaleroom()
                this.shopSaleList[0] = result.scienOrder
                this.shopSaleList[1] = result.hotelOrder
                this.shopSaleList[2] = result.courseOrder

                this.shopSaleType = ['景点订单','酒店订单','课程订单']
                this.s_ec_options.legend.data = this.shopSaleType
                this.s_ec_options.xAxis.data = this.getShopSaleroomDate()
                this.s_ec_options.series = this.getShopSaleroomTotal()
                this.s_ec.setOption(this.s_ec_options,true)
            })
        },
        //拍卖成交
        getAuctionOrderAmount() {
            ajax.getAuctionOrderAmount().then((result) => {
                this.clearShopSaleroom()
                this.shopSaleList[0] = result

                this.shopSaleType = ['拍卖成交']
                this.s_ec_options.legend.data = this.shopSaleType
                this.s_ec_options.xAxis.data = this.getShopSaleroomDate()
                this.s_ec_options.series = this.getShopSaleroomTotal()
                this.s_ec.setOption(this.s_ec_options,true)
            })
        },
        //清空商城表格数据
        clearShopSaleroom() {
            this.shopSaleList = []
        },
        //获取商城销售额的日期
        getShopSaleroomDate() {
            var day = []
            for( var i = 0; i < this.shopSaleList.length; i++ ) {
                if( this.shopSaleList[i] && this.shopSaleList[i].length > 0 && day.length == 0 ) {
                    for( var j = 0; j < this.shopSaleList[i].length; j++ ) {
                        day.push(this.shopSaleList[i][j].hour) 
                    }
                }
            }
            return day
        },
        //获取商城销售额的数量
        getShopSaleroomTotal() {
            var series = []
            var total = []
            for( var i = 0; i < this.shopSaleList.length; i++ ) {
                if( this.shopSaleList[i] && this.shopSaleList[i].length > 0 ) {
                    total[i] = []
                    for( var j = 0; j < this.shopSaleList[i].length; j++ ) {
                        total[i].push(this.shopSaleList[i][j].totalAmount)
                    }                    
                }else {
                    total[i] = []
                }
                series[i] = {
                    name: this.shopSaleType[i],
                    type: 'bar',
                    data: total[i]
                }              
            }
            return series
        },
        //绘制商城表格
        initShopSaleroomMap() {
            this.s_ec = echarts.init(document.getElementById('sellChart'))  //成交表格
            this.s_ec_options = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: []
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        formatter: function (value, idx) {
                            var hour = value.split(' ')[1] + ':00'
                            var date = new Date(value.split(' ')[0]);
                            return [date.getDate(),hour].join('日');
                        }
                    },
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: []
            }
        },
        tabClick(tab,event) {
            //console.log(tab, event);
            if( tab.index == 0 ) {
                this.getMallOrderAmount()
            }else if( tab.index == 1 ){
                this.getReservationOrderAmount()
            }else if( tab.index == 2 ){
                this.getAuctionOrderAmount()
            }
        }
    }
}