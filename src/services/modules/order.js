import ajax from '../fetch'

export default {
    /**
     * 获取后台订单分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getPageList(data, auth) {
        return ajax({
            url: '/Order/GetPageList',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 获取后台订单详情
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getOrderDetail(id, auth) {
        return ajax({
            url: '/Order/GetOrderDetail?id='+id,
            method: 'post',
            auth,
        })
    },
    /**
     * 修改订单金额
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    modifyAmount(data, auth) {
        return ajax({
            url: '/Order/ModifyAmount',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 修改订单支付状态
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    modifyPayState(id, auth) {
        return ajax({
            url: '/Order/ModifyPayState',
            method: 'post',
            auth,
            body: {
                id: id
            }
        })
    },
    /**
     * 修改备注
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    modifyRemark(data, auth) {
        return ajax({
            url: '/Order/ModifyRemark',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 获取退款单分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getRefundOrderPageList(data, auth) {
        return ajax({
            url: '/RefundOrder/GetPageList',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 获取退款单详情
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getDetail(data, auth) {
        return ajax({
            url: '/RefundOrder/GetDetail',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 同意退款
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    agree(id, auth) {
        return ajax({
            url: '/RefundOrder/Agree?id='+id,
            method: 'get',
            auth,
        })
    },
    /**
     * 同意退货并设置收货地址
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    agreeRefundGoods(data, auth) {
        return ajax({
            url: '/RefundOrder/AgreeRefundGoods',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 同意退货并设置收货地址
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    reject(data, auth) {
        return ajax({
            url: '/RefundOrder/Reject',
            method: 'post',
            auth,
            body: data
        })
    },
}