import ajax from '../fetch'

export default {
    /**
     * 获取角色列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getRoleList(page, pageSize, auth) {
        return ajax({
            url: '/Dropdown/GetRoleList',
            method: 'get',
            auth,
        })
    },
    /**
     * 获取区域列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getRegionList(id, auth) {
        return ajax({
            url: '/Dropdown/GetRegionList?id='+id,
            method: 'get',
            auth,
        })
    },
    /*
     * 获取供应商下拉列表
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getSupplierList(auth = true) {
        return ajax({
            url: '/Dropdown/GetSupplierList',
            method: 'get',
            auth
        })
    },
    /**
     * 获取品牌列表
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getBrandList(auth = true) {
        return ajax({
            url: '/Dropdown/GetBrandList',
            method: 'get',
            auth
        })
    },
    /**
     * 获取商品标签
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getGoodsFlagList(auth = true) {
        return ajax({
            url: '/Dropdown/GetGoodsLabelList',
            method: 'get',
            auth
        })
    },
    /**
     * 获取运费模板
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getFreightTemplateList(auth = true) {
        return ajax({
            url: '/Dropdown/GetFreightTemplateList',
            method: 'get',
            auth
        })
    }
}