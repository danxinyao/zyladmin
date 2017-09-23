webpackJsonp([30],{1053:function(t,e,i){e=t.exports=i(6)(),e.push([t.i,".el-row[data-v-52792611]{margin-top:10px}.el-form-item[data-v-52792611]{margin-right:0;width:33%}.el-table[data-v-52792611]{margin-bottom:20px}.remind[data-v-52792611]{color:red;font-size:12px}",""])},1171:function(t,e,i){"use strict";function o(t){i(1389)}var n=i(819),s=i(1266),a=i(2),r=o,l=a(n.a,s.a,r,"data-v-52792611",null);e.a=l.exports},1172:function(t,e,i){"use strict";var o=i(820),n=i(1278),s=i(2),a=s(o.a,n.a,null,null,null);e.a=a.exports},1266:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pg-dialog",{attrs:{title:t.title,isShow:t.show},on:{close:t.close}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"90px",inline:!0}},[i("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"商户"}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:t.selectChange},model:{value:t.form.shopID,callback:function(e){t.form.shopID=e},expression:"form.shopID"}},t._l(t.merchantList,function(t){return i("el-option",{attrs:{label:t.customerName,value:t.shopID}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"店铺名"}},[t._v(t._s(t.form.name))]),t._v(" "),i("el-form-item",{attrs:{label:"手机号"}},[t._v(t._s(t.form.mobile))]),t._v(" "),i("el-form-item",{attrs:{label:"合计"}},[t._v(t._s(t.form.amount))]),t._v(" "),i("el-form-item",{attrs:{label:"收讫"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.isPaid,callback:function(e){t.form.isPaid=e},expression:"form.isPaid"}},t._l(t.ispayList,function(t){return i("el-option",{attrs:{label:t.name,value:t.value}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"收讫时间"}},[i("el-date-picker",{attrs:{type:"datetime",disabled:0==t.form.isPaid},on:{change:t.dateChange},model:{value:t.form.paidTime,callback:function(e){t.form.paidTime=e},expression:"form.paidTime"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"100%"}},[i("el-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"primary",size:"small"},on:{click:t.addGoodsType}},[t._v("新增")])],1),t._v(" "),i("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:t.form.items,border:""}},[i("el-table-column",{attrs:{resizable:"",fixed:"",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini",icon:"delete"},on:{click:function(i){t.delGoodsType(e.$index,t.list)}}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"收费类型",resizable:"","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.row.feeType,callback:function(t){e.row.feeType=t},expression:"scope.row.feeType"}},t._l(t.paytypeList,function(t){return i("el-option",{attrs:{label:t.text,value:t.value}})}))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"金额",resizable:"","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("el-input",{model:{value:t.row.amount,callback:function(e){t.row.amount=e},expression:"scope.row.amount"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"说明",resizable:"","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("el-input",{model:{value:t.row.content,callback:function(e){t.row.content=e},expression:"scope.row.content"}})]}}])})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("el-button",{on:{click:t.close}},[t._v("取消")])],1)],1)],1)},n=[],s={render:o,staticRenderFns:n};e.a=s},1278:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"highlight-current-row":"",border:"",stripe:""}},[i("el-table-column",{attrs:{align:"center",prop:"name",label:"商户",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"mobile",label:"手机号",width:"200"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"shopName",label:"店铺名称",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"address",label:"店铺地址",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"",label:"收费类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.feeType,function(e){return i("div",[t._v(t._s(t.feeType(e)))])})}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"amount",label:"金额",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.amount,function(e){return i("div",[t._v(t._s(e))])})}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"content",label:"说明",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.content,function(e){return i("div",[t._v(t._s(e))])})}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"totalAmount",label:"合计",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"isPaid",label:"收讫",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t.isPaid(e.row))+"\n        ")]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"createTime",label:"录入时间",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"creater",label:"操作人",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("pg-button-group",[0==e.row.isPaid?i("pg-button",{attrs:{icon:"xiugai"},on:{click:function(i){t.edit(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),i("pg-button",{attrs:{icon:"shezhidengji"},on:{click:function(i){t.del(e.row)}}},[t._v("删除")])],1)]}}])})],1)},n=[],s={render:o,staticRenderFns:n};e.a=s},1282:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"customer"},[i("pg-search-form",{attrs:{"default-form":t.defaultQuery,more:t.moreQuery,"is-show-more":t.isShowMoreQuery},on:{openMore:t.toggleOpen,search:t.search},slot:"search-form",model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),i("div",{staticClass:"pg_content"},[i("pg-operations",{attrs:{btns:t.operations},on:{add:t.add}}),t._v(" "),i("pg-table",{attrs:{id:"print_table",list:t.customerList},on:{del:t.del,edit:t.edit}}),t._v(" "),i("pg-pagination",{attrs:{"page-size":t.pageSize,total:t.total},on:{"size-change":t.sizeChange,"current-change":t.currentChange},slot:"pagination"})],1),t._v(" "),i("pg-goods",{attrs:{title:t.费用录入,show:t.isShowGoods,isEdit:t.isEdit,editForm:t.editForm},on:{close:t.closeGoods,refresh:t.search}})],1)},n=[],s={render:o,staticRenderFns:n};e.a=s},1389:function(t,e,i){var o=i(1053);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(16)("27dfd012",o,!0)},272:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(821),n=i(1282),s=i(2),a=s(o.a,n.a,null,null,null);e.default=a.exports},819:function(t,e,i){"use strict";var o=i(1),n=i.n(o),s=i(968);e.a=n()({},s.a)},820:function(t,e,i){"use strict";var o=i(1),n=i.n(o),s=i(969);e.a=n()({},s.a)},821:function(t,e,i){"use strict";var o=i(1),n=i.n(o),s=i(970);e.a=n()({},s.a)},968:function(t,e,i){"use strict";var o=i(46),n=(i.n(o),i(30));e.a={props:{title:String,show:Boolean,isEdit:Boolean,editForm:{}},data:function(){return{form:{},initForm:{shopID:"",name:"",mobile:"",amount:"",isPaid:0,paidTime:"",items:[]},selectShop:"",query:"",page:1,pageSize:100,merchantList:[],ispayList:[{name:"是",value:100},{name:"否",value:0}],paytypeList:[{value:10,text:"物业费"},{value:20,text:"租金"},{value:30,text:"水费"},{value:40,text:"电费"},{value:999,text:"其他"}],options:[],selectedOptions:[],items:{feeType:"",amount:"",content:""}}},mounted:function(){this.getmerchantList(),this.isEdit||this.resetForm()},created:function(){this.setForm(this.editForm)},watch:{editForm:function(t){this.setForm(this.editForm)}},methods:{selectChange:function(){for(var t=0;t<this.merchantList.length;t++)if(this.form.shopID==this.merchantList[t].shopID){this.form.name=this.merchantList[t].name,this.form.mobile=this.merchantList[t].mobile,this.form.amount=this.merchantList[t].amount;break}},dateChange:function(t){this.form.paidTime=t},resetForm:function(){this.form=i.i(o.cloneDeep)(this.initForm)},setForm:function(t){this.isEdit?this.form=i.i(o.cloneDeep)(this.editForm):this.resetForm()},addGoodsType:function(){this.form.items.push(i.i(o.cloneDeep)(this.items))},delGoodsType:function(t,e){this.form.items.splice(t,1)},getmerchantList:function(){var t=this;n.h.getShopList(this.query,this.page,this.pageSize).then(function(e){t.merchantList=e.data})},save:function(){var t=this;n.g.saveProperty(this.form).then(function(e){t.$message({message:"保存成功",type:"success"}),t.close(),t.$emit("refresh")})},close:function(){this.$emit("close")},refresh:function(){this.$emit("refresh")}}}},969:function(t,e,i){"use strict";i(30);e.a={props:{list:Array},data:function(){return{feeTypeList:[{value:-1,text:"全部"},{value:10,text:"物业费"},{value:20,text:"租金"},{value:30,text:"水费"},{value:40,text:"电费"},{value:999,text:"其他"}]}},methods:{feeType:function(t){for(var e=0;e<this.feeTypeList.length;e++)if(this.feeTypeList[e].value==t)return this.feeTypeList[e].text},isPaid:function(t){return 0==t.isPaid?"否":"是（"+t.paidTime+"）"},edit:function(t){this.$emit("edit",t)},del:function(t){this.$emit("del",t)}}}},970:function(t,e,i){"use strict";var o=i(1172),n=i(1171),s=i(30);e.a={components:{PgTable:o.a,PgGoods:n.a},data:function(){return{isShowMoreQuery:!1,query:{shopID:"",mobile:"",shopName:"",time:"",beginTime:"",endTime:"",feeType:-1},page:1,pageSize:15,total:0,editTitle:"编辑",editForm:{},isEdit:!1,showEdit:!1,isShowGoods:!1,operations:[{name:"费用录入",action:"add",type:"primary"}],shopList:[],customerList:[]}},computed:{defaultQuery:{get:function(){return[{type:"select",label:"商家",model:"shopID",text:"customerName",value:"shopID",options:this.shopList},{type:"input",label:"手机号码",model:"mobile"}]}},moreQuery:{get:function(){return[{type:"input",label:"店铺名称",model:"shopName"},{type:"timeRange",label:"录入时间段",model:"time",start:"beginTime",end:"endTime"},{type:"select",label:"收费类型",text:"text",value:"value",model:"feeType",options:[{value:-1,text:"全部"},{value:10,text:"物业费"},{value:20,text:"租金"},{value:30,text:"水费"},{value:40,text:"电费"},{value:999,text:"其他"}]}]}}},mounted:function(){this.search(),this.getShopList()},methods:{toggleOpen:function(t){this.isShowMoreQuery=t},currentChange:function(t){this.page=t,this.getCustomerList()},sizeChange:function(t){this.pageSize=t,this.getCustomerList()},search:function(){this.page=1,this.getCustomerList()},edit:function(t){var e=this;s.g.getDetail(t.paySheetID).then(function(t){e.title="编辑",e.isEdit=!0,e.isShowGoods=!0,e.editForm=t}).catch(function(t){e.$message.error(t)})},add:function(){this.title="新增",this.isEdit=!1,this.isShowGoods=!0,this.editForm={}},del:function(t){var e=this;this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.g.deleteProperty(t.paySheetID).then(function(t){e.$message.success("删除成功"),e.search()})}).catch(function(){})},closeGoods:function(){this.isShowGoods=!1},getCustomerList:function(){var t=this;s.g.getPageList(this.query,this.page,this.pageSize).then(function(e){t.total=e.totalCount,t.customerList=[];for(var i=0;i<e.data.length;i++){var o=t.customerList.length;if(0===t.customerList.length)t.customerList.push(e.data[i]),t.customerList[o].feeType=t.stringToArray(t.customerList[o].feeType),t.customerList[o].amount=t.stringToArray(t.customerList[o].amount),t.customerList[o].content=t.stringToArray(t.customerList[o].content);else{for(var n=!1,s=0;s<t.customerList.length;s++)if(t.customerList[s].paySheetID==e.data[i].paySheetID){n=!0,t.customerList[s].feeType.push(e.data[i].feeType),t.customerList[s].amount.push(e.data[i].amount),t.customerList[s].content.push(e.data[i].content);break}0==n&&(t.customerList.push(e.data[i]),t.customerList[o].feeType=t.stringToArray(t.customerList[o].feeType),t.customerList[o].amount=t.stringToArray(t.customerList[o].amount),t.customerList[o].content=t.stringToArray(t.customerList[o].content))}}})},stringToArray:function(t){var e=[];return e.push(t),e},getShopList:function(){var t=this;s.h.getShopList("",this.page,this.pageSize).then(function(e){t.shopList=e.data})}}}}});