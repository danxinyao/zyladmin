import ajax from '../fetch'

//物业模块接口
export default{
    //获取物业分页列表
    getPageList(data, page, pageSize, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/Estate/GetPageList',
            method: 'post',
            body:{"condition":data,
                    "pageSize": pageSize,
                    "page": page,
                },
            isShowFullLoading,
            auth
        })
    },
    //保存
    saveProperty(data, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/Estate/Save',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //删除
    deleteProperty(id, auth = true) {
        return ajax({
            url: '/Estate/Delete/'+id,
            method: 'post',
            auth
        })
    },
    getDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Estate/GetDetail?id=' + id,
            auth,
            isShowFullLoading
        })
    }
}