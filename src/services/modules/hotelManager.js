/*
* @Author: danxinwu
* @Date:   2017-09-07 10:48:36
* @Last Modified by:   danxinwu
* @Last Modified time: 2017-09-08 09:50:54
*/
import ajax from '../fetch'

//酒店管理及酒店订单接口
export default {
    //获取酒店管理分页面列表
    getHotePagelList(data, page, pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetAdminPageList',
            method: 'post',
            body:{
                condition: data,
                page: page, 
                pageSize: pageSize
            },
            isShowFullLoading,
            auth
        })
    }, 
    //启用酒店
    enabledHotel(ids, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/Enabled',
            method: 'post',
            body:ids,
            isShowFullLoading,
            auth
        })
    },
    //禁用酒店
    disabledHotel(ids, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/Disabled',
            method: 'post',
            body:ids,
            isShowFullLoading,
            auth
        })
    },
    //获取酒店详情-后台
    getHotelDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetAdminDetail?id=' + id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    }, 
    ///api/Hotel/Save保存酒店
    saveHotel(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/Save',
            body: data,
            method: 'post',
            isShowFullLoading,
            auth
        })
    },  

    //获取房型分页列表
    getRoomPagelList(data, page, pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetRoomTypePageList',
            method: 'post',
            body:{
                condition: data,
                page: page, 
                pageSize: pageSize
            },
            isShowFullLoading,
            auth
        })
    }, 
    //启用房型
    enabledRoomType(ids, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/EnabledRoomType',
            method: 'post',
            body:ids,
            isShowFullLoading,
            auth
        })
    },
    //禁用房型
    disabledRoomType(ids, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/DisabledRoomType',
            method: 'post',
            body:ids,
            isShowFullLoading,
            auth
        })
    },
    //获取房型详情
    getRoomDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetRoomTypeDetail?id=' + id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    }, 
    //保存房型
    saveRoomType(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/SaveRoomType',
            body: data,
            method: 'post',
            isShowFullLoading,
            auth
        })
    }, 
    //获取酒店下拉列表 
    getDropdownHotelList( auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Dropdown/GetHotelList',
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //保存房间
    saveRoom(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/SaveRoom',
            body: data,
            method: 'post',
            isShowFullLoading,
            auth
        })
    },   
    //获取房间列表
    getRoomList(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetRoomList?id=' +id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    }, 
    //启用房间
    enabledRoom(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/EnabledRoom',
            method: 'post',
            body:id,
            isShowFullLoading,
            auth
        })
    },
    //禁用房间
    disabledRoom(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/DisabledRoom',
            method: 'post',
            body:id,
            isShowFullLoading,
            auth
        })
    },                             
}