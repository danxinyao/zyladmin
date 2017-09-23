import { cloneDeep } from 'lodash'

import {property as ajax} from 'services'
import {shop as ajaxs} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: {}
    },
    data() {
        return {
            form: {},
            initForm: {
                shopID: '',
                name: '',
                mobile: '',
                amount: '',
                isPaid: 0,
                paidTime: '',
                items: []
            },
            selectShop: '',
            // 搜索条件
            query:"",
            page: 1, // 当前页码
            pageSize: 100, // 每页条数
            merchantList: [],
            ispayList: [
                {
                    name: '是',
                    value: 100
                },
                {
                    name: '否',
                    value: 0
                }
            ],
            paytypeList: [
                {
                    value: 10,
                    text: '物业费'
                },
                {
                    value: 20,
                    text: '租金'
                },
                {
                    value: 30,
                    text: '水费'
                },
                {
                    value: 40,
                    text: '电费',
                },
                {
                    value: 999,
                    text: '其他'
                }
            ],
            options: [],
            selectedOptions: [],
            items:{
                feeType: '',
                amount: '',
                content: ''             
            }
        }
    },
    mounted() {
        //this.setForm()
        this.getmerchantList()
        if (!this.isEdit) {
            this.resetForm()
        }
    },
    created() {
        this.setForm(this.editForm)
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    methods: {
        selectChange() {            
            for(var i = 0; i < this.merchantList.length; i++){
                if( this.form.shopID == this.merchantList[i].shopID ) {
                    this.form.name = this.merchantList[i].name
                    this.form.mobile = this.merchantList[i].mobile
                    this.form.amount = this.merchantList[i].amount
                    break
                }
            }
        },
        dateChange(val) {
            this.form.paidTime = val
        },
        resetForm() {
            this.form = cloneDeep(this.initForm)
            //this.selectedOptions = []
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
            }
            else {
                this.resetForm()
            }
        },
        // 新增现货类型
        addGoodsType() {
            this.form.items.push(cloneDeep(this.items))
        },
        // 删除现货类型
        delGoodsType(index, rows) {
            this.form.items.splice(index, 1)
        },      
        //获取商户
        getmerchantList(){
            ajaxs.getShopList(this.query,this.page,this.pageSize).then((result) => {
                this.merchantList = result.data
                //console.log(this.merchantList)
            })
        },
        //保存
        save() {
            //console.log(this.form)
            ajax.saveProperty(this.form).then(result=>{
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.close()
                this.$emit('refresh')
            })
            //console.log('保存') 
        },
        close() {
            this.$emit('close')
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}