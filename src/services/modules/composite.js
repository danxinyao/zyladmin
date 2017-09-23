import ajax from '../fetch'

export default {
    /**
     * 获取广告位模块
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getModuleList(auth) {
        return ajax({
            url: '/ADPosition/GetModuleList',
            method: 'get',
            auth,
        })
    },
    /**
     * 轮播图列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getSlideShowList(pageType, auth) {
        return ajax({
            url: '/ADPosition/GetSlideShowList?pageType='+pageType,
            method: 'get',
            auth,
        })
    },
    /**
     * 删除轮播图
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    deleteSlideShow(id, auth) {
        return ajax({
            url: '/ADPosition/DeleteSlidesShow?advertisingPositionID='+id,
            method: 'get',
            auth,
        })
    },
    /**
     * 保存轮播图
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    saveSlideShow(condition, auth) {
        return ajax({
            url: '/ADPosition/SaveSlideShow',
            method: 'post',
            auth,
            body: condition
        })
    },
    /**
     * 广告位排序
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    sortSlideShow(condition, auth) {
        return ajax({
            url: '/ADPosition/SortSlideShow',
            method: 'post',
            auth,
            body: condition
        })
    },
    /**
     * 获取自定义页面分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getCustomPageList(data, auth) {
        return ajax({
            url: '/CustomPage/GetPageList',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 保存自定义页面
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    saveCustomPageList(data, auth) {
        return ajax({
            url: '/CustomPage/Save',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 删除自定义页面
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    deleteCustomPageList(id, auth) {
        return ajax({
            url: '/CustomPage/Delete?id='+id,
            method: 'get',
            auth,
        })
    },
    /**
     * 获取自定义页面详情
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getDetail(id, auth) {
        return ajax({
            url: '/CustomPage/GetDetail?id='+id,
            method: 'get',
            auth,
        })
    },
    /**
     * 获取积分活动分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getActivePageList(data, auth) {
        return ajax({
            url: '/Integral/GetActivePageList',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 获取积分活动详情
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getActiveDetail(id, auth) {
        return ajax({
            url: '/Integral/GetActiveDetail?id='+id,
            method: 'get',
            auth,
        })
    },
    /**
     * 获取会员等级
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getMemberGrade( auth) {
        return ajax({
            url: '/Integral/GetMemberGrade',
            method: 'get',
            auth,
        })
    },
    /**
     * 保存积分活动
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    saveActive( data, auth) {
        return ajax({
            url: '/Integral/SaveActive',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 选择活动商品分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getExchangeGoodsPageList( data, auth) {
        return ajax({
            url: '/Integral/GetExchangeGoodsPageList',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 结束积分活动
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    finishActive( id, auth) {
        return ajax({
            url: '/Integral/FinishActive?id='+id,
            method: 'get',
            auth,
        })
    },
    /**
     * 删除积分活动
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    deleteActive( id, auth) {
        return ajax({
            url: '/Integral/DeleteActive?id='+id,
            method: 'get',
            auth,
        })
    },
    /**
     * 获取积分增加规则
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getGainRule( auth) {
        return ajax({
            url: '/Integral/GetGainRule',
            method: 'get',
            auth,
        })
    },
    /**
     * 保存积分增加规则
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    saveGainRule(data, auth) {
        return ajax({
            url: '/Integral/SaveGainRule',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 复制积分活动
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    copyActive(id, auth) {
        return ajax({
            url: '/Integral/CopyActive?id='+id,
            method: 'get',
            auth
        })
    },
    /**
     * 获取积分商品分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getGoodsPageList(data, auth) {
        return ajax({
            url: '/Integral/GetGoodsPageList',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 获取兑换记录分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getExchangeLogPageList(data, auth) {
        return ajax({
            url: '/Integral/GetExchangeLogPageList',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 下架积分活动商品
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    soldOutGoods(id, auth) {
        return ajax({
            url: '/Integral/SoldOutGoods?id='+id,
            method: 'post',
            auth,
        })
    },
}