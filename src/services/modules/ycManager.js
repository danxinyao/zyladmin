import ajax from '../fetch'

//商品分类模块、商品标签模块接口
export default {
    //获取景点分页面列表
    getScenicList(data, page, pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/GetAdminPageList',
            method: 'post',
            body:{condition:data,page:page, pageSize:pageSize},
            isShowFullLoading,
            auth
        })
    },
    //保存景点
    saveScenic(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/Save',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //获取景点详情
    getScenicDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/GetAdminDetail?shopId='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //启用景点
    enabledScenic(idList, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/Enabled',
            method: 'post',
            body:idList,
            isShowFullLoading,
            auth
        })
    },
    //禁用景点
    disabledScenic(idList, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/Disabled',
            method: 'post',
            body:idList,
            isShowFullLoading,
            auth
        })
    },
    //获取教室下拉列表
    getClassroomList(auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Dropdown/GetClassroomList',
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    
    //获取课程下拉列表
    getCourseList(auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Dropdown/GetCourseList',
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取门票类型列表-分页
    getTicketTypeList(data, page, pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/GetAdminTicketTypePageList',
            method: 'post',
            body:{condition:data,page:page, pageSize:pageSize},
            isShowFullLoading,
            auth
        })
    },
    //获取月课表列表
    getMonthCurriculumList(shopId, date, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Course/GetMonthCurriculumList?shopId='+shopId+'&date='+date,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //保存门票类型
    saveTicketType(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/SaveTicketType',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //获取日课表列表
    getDayCurriculumList(shopId, date, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Course/GetDayCurriculumList?shopId='+shopId+'&date='+date,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取门票类型详情
    getTicketTypeDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/GetAdminTicketTypeDetail?typeId='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //删除课表POST /api/Course/DeleteCurriculum
    deleteCurriculum(ids, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Course/DeleteCurriculum',
            method: 'post',
            isShowFullLoading,
            auth,
            body: {
                ids: ids
            }
        })
    },
    //获取启用景点下拉列表
    getAbleScenicList(auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Dropdown/GetAttractionsList',
            method: 'get',
            isShowFullLoading,
            auth
        })
    },

    //启用门票类型
    enabledTicketType(idList, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/EnabledTicketType',
            method: 'post',
            body:idList,
            isShowFullLoading,
            auth
        })
    },
    //禁用门票类型
    disabledTicketType(idList, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/DisabledTicketType',
            method: 'post',
            body:idList,
            isShowFullLoading,
            auth
        })
    },
    //保存课表POST /api/Course/SaveCurriculum
    saveCurriculum(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Course/SaveCurriculum',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //保存课表POST /api/Course/ClearCurriculum
    clearCurriculum(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Course/ClearCurriculum',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //复制课表POST /api/Course/CopyCurriculum
    copyCurriculum(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Course/CopyCurriculum',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    /**获取景点订单列表*/
    getScenicOrderList(data, page, pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/AttractionsOrder/GetAdminPageList',
            method: 'post',
            body:{condition:data,page:page, pageSize:pageSize},
            auth
        })
    },
    //兑换电子码
    changeCode(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/AttractionsOrder/ExchangeCode?orderId='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //取消未支付的景点订单
    cancelScenicOrder(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/AttractionsOrder/CancelUnpaid?orderId='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //保存景点订单
    saveScenicOrder(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/AttractionsOrder/Create',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //获取门票类型下拉列表
    getTicketTypeDropDownList(shopId, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Attractions/GetTicketTypeDropDownList?shopId='+shopId,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },



    /*-------------------酒店订单模块 ---开始----------- */
    //获取酒店订单列表
    getHotelOrderList(data, page, pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/HotelOrder/GetHotelOrderPageList',
            method: 'post',
            body:{condition:data,page:page, pageSize:pageSize},
            auth
        })
    },
    //保存酒店订单
    saveHotelOrder(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/HotelOrder/CreateOfflineOrder',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //取消未支付的酒店订单
    cancelHotelOrder(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/HotelOrder/CancelUnpaid?id='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //保存入住
    saveCheckInInfo(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/HotelOrder/SaveCheckInInfo',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //获取酒店订单详情
    getHotelOrderDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/HotelOrder/GetHotelOrderDetail?id='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取酒店下拉列表
    getHotelDropList(auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Dropdown/GetHotelList',
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取房型下拉列表
    getRoomTypeDropList(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetRoomTypeList?id='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取空闲房间下拉列表
    getFreeRoomDropDownList(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetFreeRoomDropDownList?id='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取房型详情
    getRoomTypeDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Hotel/GetRoomTypeDetail?id='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    /*-------------------酒店订单模块----结束------- */

    /**-----------文化课订单模块--------开始------ */
    //获取文化课订单列表
    getCultureOrderList(data, page, pageSize, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/CourseOrder/GetAdminPageList',
            method: 'post',
            body:{condition:data,page:page, pageSize:pageSize},
            auth
        })
    },
    //兑换文化课订单电子码
    changeCultureCode(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/CourseOrder/ExchangeCode?orderId='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },

       //取消未支付的课程订单
    cancelCultureOrder(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/CourseOrder/CancelUnpaid?orderId='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //保存课程订单
    saveCultureOrder(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/CourseOrder/Create',
            method: 'post',
            body:data,
            isShowFullLoading,
            auth
        })
    },
    //获取课程订单详情
    getCultureOrderDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/CourseOrder/GetDetail?id='+id,
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取教室下拉列表
    getCultureRoomDropDownList( auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Dropdown/GetClassroomList',
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    //获取课程下拉列表
    getCultureClassDropDownList( auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Dropdown/GetCourseList',
            method: 'get',
            isShowFullLoading,
            auth
        })
    },
    /**-----------文化课订单模块--------结束------ */
    
}