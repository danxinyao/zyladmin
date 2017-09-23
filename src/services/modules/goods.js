import ajax from '../fetch'

//商品分类模块、商品标签模块接口
export default {
    //获取商品分类树列表
    getGoodsTree(auth = true) {
        return ajax({
            url: '/Goods/GetClassifyTreeList',
            method: 'get',
            auth
        })
    },

    //保存商品分类
    saveGoodsClassfiy(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Goods/SaveClassify',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },

    //删除商品分类
    deleteGoodsType(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Goods/DeleteClassify?id='+id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },

    //商品分类上下移动
    moveGoodsClassfiy(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Goods/MoveClassify',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },

    //获取商品标签列表
    getGoodsTagList(page,pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Goods/GetLabelPageList',
            method: 'post',
            body:{
                'page': page,
                'pageSize': pageSize
            },
            isShowFullLoading,
            auth
        })
    },

    //保存商品标签列表
    saveGoodsTag(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Goods/SaveLabel',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },

    //删除商品标签
    deleteGoodsTag(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Goods/DeleteLabel?id='+id,
            method: 'post',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 保存商品
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    saveGoods(data, auth = true, localLoading = 'saveGoods') {
        return ajax({
            url: '/Goods/Save',
            method: 'post',
            auth,
            localLoading,
            body: data
        })
    },
    /**
     * 获取商品列表
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getPageList(data, auth = true, localLoading = 'getPageList') {
        return ajax({
            url: '/Goods/GetPageList',
            method: 'post',
            auth,
            localLoading,
            body: data
        })
    },
    /**
     * 获取商品详情
     * @param  {[type]}  id   [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getGoodsDetail(id, auth = true, localLoading = 'getGoodsDetail') {
        return ajax({
            url: '/Goods/GetDetail?id=' + id,
            method: 'get',
            localLoading,
            auth
        })
    },
    /**
     * 删除商品
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    delGoods(data, auth = true) {
        return ajax({
            url: '/Goods/Delete',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 上架商品
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    putGoods(data, auth = true, localLoading = 'put') {
        return ajax({
            url: '/Goods/Putaway',
            method: 'post',
            auth,
            localLoading,
            body: data
        })
    },
    /**
     * 下架商品
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    pullGoods(data, auth = true, localLoading = 'pull') {
        return ajax({
            url: '/Goods/SoldOut',
            method: 'post',
            auth,
            localLoading,
            body: data
        })
    }
}