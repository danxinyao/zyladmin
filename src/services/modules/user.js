import ajax from '../fetch'

//用户模块接口
export default{
    //修改用户信息
    modifyUserInfo(data, auth = true) {
        return ajax({
            url: '/User/ModifyUserInfo',
            method: 'post',
            body: data,
            auth
        })
    },
    //修改用户等级信息
    modifyLevel(data, auth = true) {
        return ajax({
            url: '/User/ModifyLevel',
            method: 'post',
            body: data,
            auth
        })
    },
    //获取用户分页列表
    getPageList(data, page, pageSize, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/User/GetPageList',
            method: 'post',
            body:{"condition":data,
                    "pageSize": pageSize,
                    "page": page,
                },
            isShowFullLoading,
            auth
        })
    },
    //导出用户
    exportCsvUser(data, page, pageSize, auth = true) {
        return ajax({
            url: '/User/ExportCsvUser',
            method: 'post',
            body:{"condition":data,
                    "pageSize": pageSize,
                    "page": page,
                },
            auth
        })
    },
    //获取等级分页列表
    getLevelPageList(page, pageSize, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/User/GetLevelPageList',
            method: 'post',
            body:{
                    "pageSize": pageSize,
                    "page": page,
                },
            isShowFullLoading,
            auth
        })
    },
    //保存等级
    saveLevel(data, auth = true) {
        return ajax({
            url: '/User/SaveLevel',
            method: 'post',
            body:data,
            auth
        })
    },
    //删除等级
    deleteLevel(id, auth = true) {
        return ajax({
            url: '/User/DeleteLevel?id=' + id,
            method: 'get',
            auth
        })
    },
    //获取单个用户等级
    getLevelByID(id, auth = true) {
        return ajax({
            url: '/User/GetLevelByID?id=' + id,
            method: 'get',
            auth
        })
    },

}