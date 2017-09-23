import ajax from '../fetch'

//资讯模块接口
export default{
    //获取分页文章列表
    getArticlePageList(data, page, pageSize, isShowFullLoading = true) {
        return ajax({
            url: '/Article/GetPageList',
            method: 'post',
            body:{"condition":data,
                    "pageSize": pageSize,
                    "page": page,
                },
            isShowFullLoading,
        })
    },
    //保存文章
    saveArticle(data, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/Article/Save',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //获取文章分类下拉列表
    getArticleTypeList(parentId, auth = true) {
        return ajax({
            url: '/Dropdown/GetArticleClassifyList?parentId='+parentId,
            method: 'get',
            auth
        })
    },
    //删除文章
    deleteArticle(id, auth = true) {
        return ajax({
            url: '/Article/Delete?id='+id,
            method: 'get',
            auth
        })
    },
    //获取文章详情
    getArticleDetail(id, auth = true) {
        return ajax({
            url: '/Article/GetDatail?id='+id,
            method: 'get',
            auth
        })
    },
    //获取文章归属列表
    getArticleBaseType(auth = true) {
        return ajax({
            url: '/Dropdown/GetArticleTypeList',
            method: 'get',
            auth
        })
    },
    //获取文章分类树列表
    getArticleTree(auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Article/GetClassifyTreeList',
            method: 'get',
            auth,
            isShowFullLoading
        })
    },

    //保存文章分类
    saveArticleClassfiy(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Article/SaveClassify',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },

    //删除文章分类
    deleteArticleType(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Article/DeleteClassify?id='+id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },

    //文章分类上下移动
    moveArticleClassfiy(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Article/MoveClassify',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },

}