webpackJsonp([0],{1056:function(a,n,t){n=a.exports=t(6)(),n.push([a.i,".container[data-v-5a4d8117]{position:absolute;top:0;bottom:0;width:100%;background:#f5f5f5}.container .header[data-v-5a4d8117]{height:60px;line-height:60px;background:#20a0ff;color:#fff}.container .header .userinfo[data-v-5a4d8117]{text-align:right;padding-right:35px;float:right}.container .header .userinfo .userinfo-inner[data-v-5a4d8117]{cursor:pointer;color:#fff}.container .header .userinfo .userinfo-inner img[data-v-5a4d8117]{width:40px;height:40px;border-radius:20px;margin:10px 0 10px 10px;float:right}.container .header .logo[data-v-5a4d8117]{height:60px;font-size:22px;padding-left:20px;padding-right:20px;border-color:hsla(62,77%,76%,.3);border-right-width:1px;border-right-style:solid}.container .header .logo img[data-v-5a4d8117]{width:40px;float:left;margin:10px 10px 10px 18px}.container .header .logo .txt[data-v-5a4d8117]{color:#fff}.container .header .logo-width[data-v-5a4d8117]{width:230px}.container .header .logo-collapse-width[data-v-5a4d8117]{width:60px}.container .header .tools[data-v-5a4d8117]{padding:0 23px;width:14px;height:60px;line-height:60px;cursor:pointer}.container .main[data-v-5a4d8117]{display:flex;position:absolute;top:60px;bottom:0;overflow:hidden}.container .main aside[data-v-5a4d8117]{flex:0 0 230px;width:230px;height:100%;background:#282e37}.container .main aside .el-menu[data-v-5a4d8117]{height:100%;overflow-y:scroll;overflow-x:hidden}.container .main aside .collapsed[data-v-5a4d8117]{width:60px}.container .main aside .collapsed .item[data-v-5a4d8117]{position:relative}.container .main aside .collapsed .submenu[data-v-5a4d8117]{position:absolute;top:0;left:60px;z-index:99999;height:auto;display:none}.container .main .menu-collapsed[data-v-5a4d8117]{flex:0 0 60px;width:60px}.container .main .menu-expanded[data-v-5a4d8117]{flex:0 0 230px;width:230px}.container .main .content-container[data-v-5a4d8117]{flex:1;overflow-y:scroll;padding:20px}.container .main .content-container .breadcrumb-container[data-v-5a4d8117]{padding:0 20px;margin-bottom:20px}.container .main .content-container .breadcrumb-container .title[data-v-5a4d8117]{font-size:24px;float:left;color:#475669}.container .main .content-container .breadcrumb-container .breadcrumb-inner[data-v-5a4d8117]{float:right}.container .main .content-container .content-wrapper[data-v-5a4d8117]{box-sizing:border-box}.fade-enter-active[data-v-5a4d8117]{animation:fade-in-data-v-5a4d8117 .5s}.fade-leave-active[data-v-5a4d8117]{opacity:0}@keyframes fade-in-data-v-5a4d8117{0%{opacity:0}to{opacity:1}}",""])},1272:function(a,n,t){"use strict";var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("el-row",{staticClass:"container"},[t("el-col",{staticClass:"header",attrs:{span:24}},[t("el-col",{staticClass:"logo",class:"logo-width",attrs:{span:10}},[a._v("\n            "+a._s(a.sysName)+"\n        ")]),a._v(" "),t("el-col",{attrs:{span:10}},[t("div",{staticClass:"tools"})]),a._v(" "),t("el-col",{staticClass:"userinfo",attrs:{span:4}},[t("el-dropdown",{attrs:{trigger:"click"},on:{command:a.handleDropdown}},[t("span",{staticClass:"el-dropdown-link userinfo-inner"},[t("img",{attrs:{src:this.userInfo.head}}),a._v("\n                    "+a._s(this.userInfo.name)+"\n                ")]),a._v(" "),t("el-dropdown-menu",{slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"logout"}},[a._v("退出登录")])],1)],1)],1)],1),a._v(" "),t("el-col",{staticClass:"main",attrs:{span:24}},[t("aside",[t("el-menu",{attrs:{"default-active":"index1",theme:"dark",router:""}},a._l(a.menuList,function(n,e){return t("el-submenu",{attrs:{index:"index"+(e+1)}},[t("template",{slot:"title"},[t("i",{class:n.iconCls}),a._v("\n                        "+a._s(n.name)+"\n                    ")]),a._v(" "),a._l(n.children,function(n){return t("el-menu-item",{attrs:{index:n.path}},[a._v("\n                        "+a._s(n.name)+"\n                    ")])})],2)}))],1),a._v(" "),t("section",{staticClass:"content-container"},[t("div",{staticClass:"grid-content bg-purple-light"},[t("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[t("strong",{staticClass:"title"},[a._v("\n                        "+a._s(a.$route.meta.title)+"\n                    ")])]),a._v(" "),t("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1)],1)])])],1)},i=[],o={render:e,staticRenderFns:i};n.a=o},1392:function(a,n,t){var e=t(1056);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);t(16)("88ff4cf6",e,!0)},21:function(a,n,t){"use strict";function e(a){t(1392)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(773),o=t(1272),r=t(2),s=e,c=r(i.a,o.a,s,"data-v-5a4d8117",null);n.default=c.exports},773:function(a,n,t){"use strict";var e=t(1),i=t.n(e),o=t(922);n.a=i()({},o.a)},867:function(a,n,t){"use strict";t.d(n,"a",function(){return e});var e=[{path:"/",name:"权限管理",iconCls:"",children:[{path:"/account",name:"账号管理",iconCls:""},{path:"/role",name:"角色管理",iconCls:""}]},{path:"/",name:"商城管理",iconCls:"",children:[{path:"/mall",name:"商城管理首页",iconCls:""},{path:"/zylDecoration",name:"紫云来商城装修",iconCls:""},{path:"/ycDecoration",name:"懿城商城装修",iconCls:""},{path:"/mallorder",name:"商城订单",iconCls:""},{path:"/auctionorder",name:"拍卖订单",iconCls:""},{path:"/refundorder",name:"售后订单",iconCls:""},{path:"/logisticsManager",name:"运费模板",iconCls:""}]},{path:"/",name:"懿城管理",iconCls:"",children:[{path:"/scenicmanager",name:"景点管理",iconCls:""},{path:"/ticketType",name:"门票类型管理",iconCls:""},{path:"/scenicOrder",name:"景点订单",iconCls:""},{path:"/culturalSchedule",name:"文化课程表",iconCls:""},{path:"/culturalOrder",name:"文化课订单",iconCls:""},{path:"/hotelmanager",name:"酒店管理",iconCls:""},{path:"/housemanager",name:"房型管理",iconCls:""},{path:"/hotelOrder",name:"酒店订单",iconCls:""}]},{path:"/",name:"综合管理",iconCls:"",children:[{path:"/integration",name:"综合管理首页",iconCls:""},{path:"/InformationClassification",name:"资讯分类",iconCls:""},{path:"/information",name:"资讯中心",iconCls:""},{path:"/advertisement",name:"广告位管理",iconCls:""},{path:"/customView",name:"自定义页面",iconCls:""},{path:"/onlineService",name:"在线客服",iconCls:""},{path:"/leaveMsg",name:"留言管理",iconCls:""},{path:"/integralexchange",name:"积分兑换活动",iconCls:""},{path:"/integralgoods",name:"参与积分商品",iconCls:""},{path:"/sendintegral",name:"送积分",iconCls:""},{path:"/finance",name:"财务营收",iconCls:""}]},{path:"/",name:"用户",iconCls:"",children:[{path:"/user",name:"用户管理",iconCls:""},{path:"/userrank",name:"等级管理",iconCls:""}]},{path:"/",name:"园区管理",iconCls:"",children:[{path:"/shop",name:"商户管理",iconCls:""},{path:"/property",name:"物业管理",iconCls:""}]},{path:"/",name:"商品中心",iconCls:"",children:[{path:"/goodsList",name:"商品列表",iconCls:""},{path:"/goodsClass",name:"商品分类",iconCls:""},{path:"/goodsTag",name:"商品标签",iconCls:""}]},{path:"/",name:"拍卖",iconCls:"",children:[{path:"auctionSpecial",name:"拍品专场管理",iconCls:""},{path:"auctionGoodsList",name:"拍品管理",iconCls:""}]},{path:"/",name:"数据销售分析",iconCls:"",children:[{path:"userArea",name:"用户地区分布",iconCls:""},{path:"userIncrease",name:"用户增长分析",iconCls:""},{path:"turnoverRate",name:"老顾客回头率",iconCls:""},{path:"orderCount",name:"订单统计",iconCls:""},{path:"goodRank",name:"商品排行",iconCls:""},{path:"usersRank",name:"用户排行",iconCls:""}]}]},922:function(a,n,t){"use strict";var e=t(1),i=t.n(e),o=t(867),r=t(9);n.a={data:function(){return{sysName:"后台管理系统",userInfo:{name:"曹大大",head:""},menuList:[]}},mounted:function(){this.menuList=o.a},methods:i()({},t.i(r.mapActions)(["removeAuth"]),{handleDropdown:function(a){var n=this;"logout"===a&&this.$confirm("确定退出吗？","提示",{type:"warning"}).then(function(){n.$message.success("退出登录成功"),n.removeAuth(),n.$router.push("/log")}).catch(function(){})}})}}});