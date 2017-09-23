import ajax from '../fetch'

export default{
	//获取装修栏目
    getColumns(type, auth = true) {
        return ajax({
            url: '/Decoration/GetColumns?type=' + type,
            method: 'get',
            auth
        })
    },
    //获取商城首页装修信息
    getShopHomePage(type) {
        return ajax({
            url: '/Decoration/GetShopHomePage?type=' + type,
            method: 'get'
        })
    },
    //保存装修栏目
    saveColumn(data, auth = true){
        return ajax({
            url: '/Decoration/SaveColumn',
            method: 'post',
            body:data,
            auth
        })
    },
    //保存装修栏目商品
    saveColumnGoods(data, auth = true){
        return ajax({
            url: '/Decoration/SaveColumnGoods',
            method: 'post',
            body:data,
            auth
        })
    },
    //显示栏目
    enabledColumn(data, auth = true){
        return ajax({
            url: '/Decoration/EnabledColumn',
            method: 'post',
            body:data,
            auth
        })
    },
    //隐藏栏目
    disableColumn(data, auth = true){
        return ajax({
            url: '/Decoration/DisableColumn',
            method: 'post',
            body:data,
            auth
        })
    },
    //移动栏目
    moveColumn(data, auth = true){
        return ajax({
            url: '/Decoration/MoveColumn',
            method: 'post',
            body:data,
            auth
        })
    },
    //获取商品分类树列表
    getClassifyTreeList(auth = true) {
        return ajax({
            url: '/Goods/GetClassifyTreeList',
            method: 'get',
            auth
        })
    },
}