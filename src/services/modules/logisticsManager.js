import ajax from '../fetch'

//资讯模块接口
export default{
    // //获取分页文章列表
    // getArticlePageList(data, page, pageSize, isShowFullLoading = true) {
    //     return ajax({
    //         url: '/Article/GetPageList',
    //         method: 'post',
    //         body:{"condition":data,
    //                 "pageSize": pageSize,
    //                 "page": page,
    //             },
    //         isShowFullLoading,
    //     })
    // },
    //获取省级列表
    getProvinceList(auth = true) {
        return ajax({
            url: '/Delivery/GetStateList',
            method: 'get',
            auth
        })
    },
    //保存运费模板
    saveFreightTemplate(data,auth = true) {
        return ajax({
            url: '/Delivery/SaveFreightTemplate',
            method: 'post',
            body:data,
            auth
        })
    },

    //获取运费模板列表 
    getModelList(auth = true, isShowFullLoading = true) {
       return ajax({
            url: '/Delivery/GetFreightTemplateList',
            method: 'get',
            isShowFullLoading,
            auth
        }) 
    },
    //获取模板详情
    getModelDetail(id, auth = true, isShowFullLoading = true) {
       return ajax({
            url: '/Delivery/GetFreightTemplateDetail?FreightTemplateID='+id,
            method: 'get',
            isShowFullLoading,
            auth
        }) 
    },
    //删除模板
    deleteModel(id, auth = true, isShowFullLoading = true) {
       return ajax({
            url: '/Delivery/DeleteFreightTemplate',
            method: 'post',
            body:{id:id},
            isShowFullLoading,
            auth
        }) 
    },

}