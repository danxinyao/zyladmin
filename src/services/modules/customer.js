import ajax from '../fetch'

export default{
	//获取未查看消息数
    getUnReadMessageCount(auth = true) {
        return ajax({
            url: '/CustomerService/GetUnReadMsgCount',
            method: 'get',
            auth
        })
    },
    //获取当前聊天记录
    getCurrentDateLog(session) {
        return ajax({
            url: '/CustomerService/GetCurrentDateLog?session='+session,
            method: 'get'
        })
    },
    //获取历史聊天记录
    getHistoryLog(session, auth = true) {
        return ajax({
            url: '/CustomerService/GetHistoryLog?session='+session,
            method: 'get',
            auth
        })
    },
    //回复消息
    sendMessage(data, auth = true) {
        return ajax({
            url: '/CustomerService/ReplyMessage',
            method: 'post',
            body:data,
            auth
        })
    },
}