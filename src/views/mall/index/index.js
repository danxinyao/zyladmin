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
            amountList: {
                todayAmount: 0,
                yesterDayAmount: 0,
                scale: 0
            },
            orderNum: 0,
            orderList: [
                {
                    from: '商城',
                    num: 0
                },
                {
                    from: '拍卖',
                    num: 0
                },
                {
                    from: '售后',
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
            //sevenDaySaleType: ['会员订单'],
            sevenDaySaleList: [],
            //s_ec: null,
            //s_ec_options: {},
            //shopSaleType: [],
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
            this.getShopTodayOrderAmount()
            this.getPendingOrderQty()
            this.getUserOriginQty()
            //this.getNewConsumptionRecord()        
            
            this.getSevenDaySaleroom()
            this.getDealStatus()                      
        },
        //今日成交额
        getShopTodayOrderAmount() {
            ajax.getShopTodayOrderAmount().then((result) => {
                this.amountList = result
                //console.log(result)
            })
        },
        //待处理订单
        getPendingOrderQty() {
            ajax.getPendingOrderQty().then((result) => {
                this.orderNum = result.totalQty
                this.orderList[0].num = result.shopQty
                this.orderList[1].num = result.auctionQty
                this.orderList[2].num = result.afterSaleQty
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
            ajax.getSevenDayTrend().then((result) => {
                this.sevenDaySaleList = result.memberOst
                console.log(result)
                //console.log(this.sevenDaySaleList)

                this.drawSevenDaySaleroomMap()
            })
        },
        //获取7天销售额的日期
        getSevenDaySaleroomDate() {
            var day = []
            if(this.sevenDaySaleList) {
                for( var i = 0; i < this.sevenDaySaleList.length; i++ ) {
                    day.push(this.sevenDaySaleList[i].day) 
                }
            }
            return day
        },
        //获取7天销售额的数量
        getSevenDaySaleroomTotal() {
            var total = []
            if(this.sevenDaySaleList) {
                for( var i = 0; i < this.sevenDaySaleList.length; i++ ) {
                    total.push(this.sevenDaySaleList[i].totalAmount)
                }
            }            
            var series = {
                //name: this.sevenDaySaleType[0],
                type: 'line',
                data: total
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
            ajax.getUserSort().then((result) => {
                this.payList = result
            })
        },
        //商城成交
        getDealStatus() {
            ajax.getDealStatus().then((result) => {
                this.shopSaleList = result.memberDealAmount
                console.log(result)

                //this.shopSaleType = ['商城成交']
                this.drawShopSaleroomMap()
            })
        },
        //获取商城销售额的日期
        getShopSaleroomDate() {
            var day = []
            if(this.shopSaleList) {
                for( var i = 0; i < this.shopSaleList.length; i++ ) {
                    day.push(this.shopSaleList[i].hour) 
                }
            }
            return day
        },
        //获取商城销售额的数量
        getShopSaleroomTotal() {
            var total = []
            if(this.shopSaleList) {
                for( var i = 0; i < this.shopSaleList.length; i++ ) {
                    total.push(this.shopSaleList[i].totalAmount)                           
                }
            }
            var series = {
                //name: this.shopSaleType[i],
                type: 'bar',
                data: total
            }   
            return series
        },
        //绘制商城表格
        drawShopSaleroomMap() {
            const s_ec = echarts.init(document.getElementById('sellChart'))  //成交表格
            const s_ec_options = {
                tooltip: {
                    trigger: 'axis'
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
                    data: this.getShopSaleroomDate()
                },
                yAxis: {
                    type: 'value'
                },
                series: this.getShopSaleroomTotal()
            }
            s_ec.setOption(s_ec_options,true)
        },
    }
}