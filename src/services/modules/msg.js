import ajax from '../fetch'

export default{
	//分页查询
    getPageList(data, page, pageSize, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/MsgBoard/GetPageList',
            method: 'post',
            body:{
                "condition":data,
                  "pageSize": pageSize,
                  "page": page,
                },
            isShowFullLoading,
            auth
        })
    },
    //增加留言
    add(data, isShowFullLoading = true, auth = true){
        return ajax({
            url: '/MsgBoard/Add',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
}