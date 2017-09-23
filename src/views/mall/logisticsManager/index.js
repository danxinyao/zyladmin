import echarts from 'echarts'
import PgEdit from './components/edit/index.vue'
import LogisList from './components/logisticsList/index.vue'
import AddPlace from './components/AddPlace/index.vue'

import {logisticsManager as ajax} from 'services'

export default {
    components: {
        PgEdit,
        LogisList,
        AddPlace
    },
    data() {
        return{
            isCircle: true,
            orderNum: 0,
            isShow:false,//是否显示新增窗口
            isShowAddPlace:false,//是否显示新增地区的窗口
            provinceList:[],//省级列表
            addPlaceParam:{flag:'', index:0, checkedPlace:[]},//选中的地址
            editItem:{},//详情
            orderList: [
                {
                    from: '零售',
                    num: 0
                },
                {
                    from: '采购',
                    num: 0
                },
                {
                    from: '拍卖',
                    num: 0
                }
            ],
            userMsgList: [
                {
                    from: '线上用户',
                    num: 0
                },
                {
                    from: '线下用户',
                    num: 0
                }
            ],
            lists: [],
        }
    },
    mounted() {
        this.init()
        this.getProvinceList()
        this.queryModelList();
    },
    methods: {
        init() {
                          
        },
        //获取省级地区列表
        getProvinceList() {
            ajax.getProvinceList().then(result=>{
                if(result && result.length>0) {
                    this.provinceList = result
                    this.provinceList.splice(0,0,{regionID: "全国",name: "全国"})
                }
            })
        },
        //显示编辑地区
        showNewPlace(param) {
            this.isShowAddPlace = true
            this.addPlaceParam = param
        },
        //关闭编辑地区
        closePlace() {
            this.isShowAddPlace = false;
            // if( this.isShowAddPlace ) {
            //     console.info(param);
            // }
            
        },
        edit(param) {
            if(param&&param !='') {
                this.getModelDetail(param)
            } else {
                this.editItem = null;
            }
            this.isShow = !this.isShow
            if(!this.isShow){
                this.queryModelList();
            }
        },
        //添加地区
        addPlace(param) {
            console.info("主页");
            console.info(param)
            this.addPlaceParam.checkedPlace = param
            this.closePlace()
        },
        //获取文本列表
        queryModelList() {
            ajax.getModelList().then(result=>{
                this.lists = result
                console.log(result)
            })
        },
        //获取模板详情
        getModelDetail(id) {
             ajax.getModelDetail(id).then(result=>{
                this.editItem = result
            })
        },
        //删除模板
        deleteM(id) {
             this.$confirm('确定删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    ajax.deleteModel(id).then(result=>{
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.queryModelList();
                    }).catch((error)=>{
                        this.$message.error(error)
                    })
                })
            
        }
    }
}