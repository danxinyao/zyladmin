import { cloneDeep } from 'lodash'
import {logisticsManager as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: String,
        editForm: Object,
        isNew:Boolean,
        articleBaseType:Array,
        checkedPlace:Array,
    },
    data() {
        return {
            addPlaceParam:{},//添加地区参数
            checked:false,//是否指定包邮（选填）
            form: {
                freightTemplateID: "",
                name: "",
                priceFlag: 0,
                isShowFreeAct:false,
                basFreightTemplatePriceList:[],
                basFreightTemplateFreeList:[],
                isShowFreeAct:false,
            },
           //默认的运送方式
            defaultText:'件',//默认运费的文本
            // 初始表单
            initForm: {
                freightTemplateID: "",
                name: "",
                priceFlag: 0,
                isShowFreeAct:false,
                basFreightTemplatePriceList:[],
                basFreightTemplateFreeList:[],
                isShowFreeAct:false,
            },
            typeOption:[
                {
                    value: 0,
                    label: '件数'
                }, 
                {
                    value: 1,
                    label: '金额'
                },
                {
                    value: 2,
                    label: '件数+金额'
                }, 
            ],

        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        },
        //监听添加的地址
        checkedPlace(checkedPlace){
            this.addPlaceParam.checkedPlace = checkedPlace
            if(this.addPlaceParam.flag =="send") {
                this.form.basFreightTemplatePriceList[this.addPlaceParam.index].region = checkedPlace
            } else {
                this.form.basFreightTemplateFreeList[this.addPlaceParam.index].region = checkedPlace
            }
        }
    },
    created() {
        this.setForm(this.editForm)
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.addPlaceParam ={}
        },
        setForm(editForm) {
            this.resetForm()
            if (editForm != null) {
                this.form = editForm
            }else {
                this.resetForm()
            }

        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            //保存信息
            ajax.saveFreightTemplate(this.form).then(result=>{
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.close()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        //删除价格信息
        deletePrice(index){
            this.form.basFreightTemplatePriceList.splice(index,1)
        },
        //包邮增加地区
        freeAddPlace(index,list) {
            this.addPlaceParam = {flag:'free', index:index, checkedPlace:list}
            this.addPlace()
        },
        //运送方式增加地区
        sendAddPlace(index,list) {
            this.addPlaceParam = {flag:'send', index:index, checkedPlace:list}
            this.addPlace()
        },
        //增加地区
        addPlace() {
            this.$emit("addPlace", this.addPlaceParam);

        },
        //删除包邮信息
        deletePostFree(index) {
            this.form.basFreightTemplateFreeList.splice(index,1)
        },


        //增加包邮信息
        addPostFreeInfo() {
            let one = {
                        "freightTemplatePriceID": "",
                        "freightTemplateID": "",
                        "regionID": "",
                        "region": [],
                        "conditionFlag": 0,
                        "qty": '',
                        "amount": ''
                    }
            this.form.basFreightTemplateFreeList.push(one)
        },
        //增加运送方式信息
        addSendTable(){
            let one = {
                        "freightTemplatePriceID": "",
                        "freightTemplateID": "",
                        "regionID": "",
                        "region": [],
                        "firstUnit": '',
                        "firstPrice": '',
                        "nextUnit": '',
                        "nextPrice": '',
                    }
            this.form.basFreightTemplatePriceList.push(one);
        },
        //选择价格方式
        priceFlagRadio(val){
            if(val == 0){
                this.defaultText = "件"
            }else if(val == 1){
                this.defaultText = "千克"
            }else if(val == 2){
                this.defaultText = "立方米"
            }
        },
        //包邮方式的下拉框选择后的change事件
        freeSelelctChange(index){
            this.form.basFreightTemplateFreeList[index].qty =  ''
            this.form.basFreightTemplateFreeList[index].amount =  ''
        }
    }
}