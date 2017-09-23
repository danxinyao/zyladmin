import ajax from '../fetch'

export default{
	//今日资讯
    getNowInformationQty(auth = true) {
        return ajax({
            url: '/Statistics/GetNowInformationQty',
            method: 'get',
            auth
        })
    },
    //客户资讯
    getCustomerConsultQty(auth = true) {
        return ajax({
            url: '/Statistics/GetCustomerConsultQty',
            method: 'get',
            auth
        })
    },
    //用户统计
    getUserOriginQty(auth = true) {
        return ajax({
            url: '/Statistics/GetUserOriginQty',
            method: 'get',
            auth
        })
    },
    //七天销售额
    getSevenDaySaleroom(type, auth = true) {
        return ajax({
            url: '/Statistics/GetSevenDaySaleroom',
            method: 'get',
            auth
        })
    },
    //最新消费
    getNewConsumptionRecord(auth = true) {
        return ajax({
            url: '/Statistics/GetNewConsumptionRecord',
            method: 'get',
            auth
        })
    },
    //商城成交
    getMallOrderAmount(auth = true) {
        return ajax({
            url: '/Statistics/GetMallOrderAmount',
            method: 'get',
            auth
        })
    },
    //预订成交
    getReservationOrderAmount(type,auth = true) {
        return ajax({
            url: '/Statistics/GetReservationOrderAmount',
            method: 'get',
            auth
        })
    },
    //拍卖成交
    getAuctionOrderAmount(auth = true) {
        return ajax({
            url: '/Statistics/GetAuctionOrderAmount',
            method: 'get',
            auth
        })
    },
    //商城当天成交额
    getShopTodayOrderAmount(auth = true) {
        return ajax({
            url: '/Statistics/GetShopTodayOrderAmount',
            method: 'get',
            auth
        })
    },
    //待处理订单
    getPendingOrderQty(auth = true) {
        return ajax({
            url: '/Statistics/GetPendingOrderQty',
            method: 'get',
            auth
        })
    },
    //商城7天走势
    getSevenDayTrend(auth = true) {
        return ajax({
            url: '/Statistics/GetSevenDayTrend',
            method: 'get',
            auth
        })
    },
    //商城用户排名
    getUserSort(auth = true) {
        return ajax({
            url: '/Statistics/GetUserSort',
            method: 'get',
            auth
        })
    },
    //商城成交情况
    getDealStatus(auth = true) {
        return ajax({
            url: '/Statistics/GetDealStatus',
            method: 'get',
            auth
        })
    },
}