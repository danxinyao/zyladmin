import ajax from '../fetch'

export default {
    /**
     * 获取角色分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getPageList(page, pageSize, auth) {
        return ajax({
            url: '/Role/GetPageList',
            method: 'post',
            auth,
            body: {
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**获取角色详情获取角色分页列表
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    getDetail(id, auth) {
        return ajax({
            url: '/Role/GetDetail?id='+id,
            method: 'get',
            auth,
        })
    },
    /**保存角色
     * @param  {object} data 分页信息
     * @return {[type]}      [description]
     */
    saveRole(condition, auth) {
        return ajax({
            url: '/Role/Save',
            method: 'post',
            auth,
            body: condition
        })
    },
    /**删除角色
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    deleteRole(id, auth) {
        return ajax({
            url: '/Role/Delete?id='+id,
            method: 'get',
            auth,
        })
    },
    /**获取模块列表
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    getModuleList(auth) {
        return ajax({
            url: '/Role/GetModuleList',
            method: 'get',
            auth
        })
    },
    /**获取账号分页列表
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    getAccountPageList(page, pageSize, auth) {
        return ajax({
            url: '/SysAccount/GetPageList',
            method: 'post',
            auth,
            body: {
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**获取账号详情
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    getAccountDetail(id, auth) {
        return ajax({
            url: '/SysAccount/GetDetail?id='+id,
            method: 'get',
            auth,
        })
    },
    /**保存账号
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    saveAccount(condition, auth) {
        return ajax({
            url: '/SysAccount/Save',
            method: 'post',
            auth,
            body: condition
        })
    },
    /**启用账号
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    enabledAccount(id, auth) {
        return ajax({
            url: '/SysAccount/Enabled?id='+id,
            method: 'get',
            auth,
        })
    },
    /**禁用账号
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    disabledAccount(id, auth) {
        return ajax({
            url: '/SysAccount/Disable?id='+id,
            method: 'get',
            auth,
        })
    },
    /**删除账号
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    deleteAccount(id, auth) {
        return ajax({
            url: '/SysAccount/Delete?id='+id,
            method: 'get',
            auth,
        })
    },
    /**重置密码
     * @param  {object} data 角色信息
     * @return {[type]}      [description]
     */
    resetPwd(condition, auth) {
        return ajax({
            url: '/SysAccount/ResetPwd',
            method: 'post',
            auth,
            body: condition
        })
    },
}