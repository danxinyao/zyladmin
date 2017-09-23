export default {
    demoList: (state) => state.demo.demoList,
    isShowFullLoading: (state) => state.loading.isShowFullLoading, // 显示全局加载动画
    localLoading: (state) => state.loading.localLoading, // 显示局部加载动画
    authToken: (state) => state.auth.authToken, // 登录token
    goodsList: (state) => state.good.goodsList, // 积分商品选择
    regionStateList: state => state.basic.stateList, // 省
}