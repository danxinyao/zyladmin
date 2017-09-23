import ajax from '../fetch'

export default {
    /**
     * 登录获取token
     * @param  {object} data 登录信息
     * @return {[type]}      [description]
     */
    login(data, localLoading = 'login') {
        return ajax({
            url: '/Account/AdminLogin',
            method: 'post',
            body: data,
            localLoading
        })
    },
    /**
     * 刷新登录token
     * @param  {[type]} token [description]
     * @return {[type]}       [description]
     */
    refreshToken(token) {
        return ajax({
            url: '/Account/RefreshToken?token=' + token,
            method: 'post'
        })
    }
}