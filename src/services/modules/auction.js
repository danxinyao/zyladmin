import ajax from '../fetch'

//拍卖模块接口
export default{
    //获取拍卖活动分页列表
    getAuctionPageList(data , page , pageSize , auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Auction/GetPageList',
            method: 'post',
            body:{
            	"condition":data,
                "pageSize": pageSize,
                "page": page
            },
            auth,
            isShowFullLoading
        })
    },

    //保存拍卖活动专场
    saveAuction(data , auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Auction/Save',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },

    // 启用拍卖活动
    auctionEnabled(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Auction/Enabled',
            method: 'post',
            body: {
                "ids": data
            },
            auth,
            isShowFullLoading
        })
    },

    // 禁用拍卖活动
    auctionDisabled(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Auction/Disable',
            method: 'post',
            body: {
                "ids": data
            },
            auth,
            isShowFullLoading
        })
    },
    // 保存拍品
    saveGoods(data, auth = true, localLoading = 'saveGoods') {
        return ajax({
            url: '/Auction/SaveGoods',
            method: 'post',
            body: data,
            auth,
            localLoading
        })
    },
    // 获取拍品分页列表
    getGoodsPageList(data, auth = true, localLoading = 'getGoodsPageList') {
        return ajax({
            url: '/Auction/GetGoodsPageList',
            method: 'post',
            auth,
            localLoading,
            body: data
        })
    },
    // 获取拍品详情
    getGoodsDetail(auctionItemID, auth = true, localLoading = 'getGoodsDetail') {
        return ajax({
            url: '/Auction/GetGoodsDetail?id=' + auctionItemID,
            method: 'get',
            auth,
            localLoading
        })
    },
    // 启用拍品
    enableGoods(ids, auth = true, localLoading = 'enableGoods') {
        return ajax({
            url: '/Auction/EnabledGoods',
            method: 'post',
            auth,
            localLoading,
            body: {
                ids: ids
            }
        })
    },
    // 禁用拍品
    disableGoods(ids, auth = true, localLoading = 'disableGoods') {
        return ajax({
            url: '/Auction/DisableGoods',
            method: 'post',
            auth,
            localLoading,
            body: {
                ids: ids
            }
        })
    }
}
