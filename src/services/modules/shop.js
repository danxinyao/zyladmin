import ajax from '../fetch'

export default{
	//获取商户分页列表
    getShopList(name, page, pageSize, localLoading = 'getShopList', auth = true) {
        return ajax({
            url: '/Shop/GetPageList',
            method: 'post',
            body: {
                condition: {
                    name: name
                },
                page: page,
                pageSize: pageSize
            },
            localLoading,
            auth
        })
    },

    /**
     * 删除商户
     * @param  {[type]} id   [商户id]
     * @param  {[type]} auth [令牌]
     * @return {[type]}      [description]
     */
    deleteShop(id, auth) {
    	return ajax({
            url: '/Shop/Delete?id='+id,
            method: 'get',
            auth,
        })
    },

    /**
     * 新增商户
     * @param  {[type]}  data              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    saveShop(data, localLoading = 'saveShop', auth = true) {
        return ajax({
            url: '/Shop/Save',
            method: 'post',
            body: data,
            localLoading,
            auth
        })
    },


    /**
     * 获取商户详情
     * @param  {[type]} id   [description]
     * @param  {[type]} auth [description]
     * @return {[type]}      [description]
     */
    detailShop(id, auth) {
    	return ajax({
            url: '/Shop/GetDetail?id='+id,
            method: 'get',
            auth
        })
    },
}