import { cloneDeep } from 'lodash'
import {power as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                roleID: '',//角色id
                name: '',
                note: '',
                moduleList: [],
                // roleMenus: [
                //     {
                //         name: '云店',
                //         checkList: [],
                //         checkAll: false,
                //         isIndeterminate: true,
                //         subMenus: [
                //             {
                //                 name: '订单管理',
                //                 isChecked: 1
                //             },
                //             {
                //                 name: '订单导出',
                //                 isChecked: 0
                //             },
                //             {
                //                 name: '订单详情',
                //                 isChecked: 1
                //             },
                //             {
                //                 name: '订单列表',
                //                 isChecked: 0
                //             },
                //         ]
                //     },
                //     {
                //         name: '云服务',
                //         checkList: [],
                //         checkAll: false,
                //         isIndeterminate: true,
                //         subMenus: [
                //             {
                //                 name: '订单管理',
                //                 isChecked: 1
                //             },
                //             {
                //                 name: '订单导出',
                //                 isChecked: 0
                //             },
                //         ]
                //     }
                // ]
            },
            // 输入验证
            rules: {
                name: [
                    { required: true, message: '请输入角色名', trigger: 'blur' },
                ],
            },
        }
    },
    watch: {
        editForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.changeDateStructure(this.form.moduleList)
            }
            else {
                this.form = cloneDeep(this.initForm)
                //获取模块列表
                this.getModuleList()
            }
        }
    },
    mounted() {
        
    },
    methods: {
        //获取模块列表
        getModuleList() {
            ajax.getModuleList().then((result) => {
                this.form.moduleList = result
                this.changeDateStructure(this.form.moduleList)
            })
        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            console.log(this.form)
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveRole(this.form).then(() => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.refresh()
                        this.close()
                    }).catch((error) => {
                        this.$message.error(error)
                    })
                }
            })
        },
        // 刷新页面
        refresh() {
            this.$emit('refresh')
        },
        // 改变后端返回的数据结构，添加前端控制样式的字段,并判断开始时，不是全选
        changeDateStructure(moduleList) {
            moduleList.forEach((item) => {
                item.checkList = []
                item.moduleList.forEach((items) => {
                    if (items.isChecked === 1) {
                        item.checkList.push(items.isChecked)
                    }
                })
                if (item.checkList.length === item.moduleList.length) {
                    item.checkAll = true
                    item.isIndeterminate = false
                }
                else {
                    item.checkAll = false
                    item.isIndeterminate = true
                } 
            })
        },
        // 处理全选按钮
        handleCheckAllChange(val) {
            val.checkList = []
            val.moduleList.forEach((item) => {
                // 全选
                if (val.checkAll) {
                    item.isChecked = 1
                    val.checkList.push(item.isChecked)
                }
                else {
                    item.isChecked = 0
                }
            })
            val.isIndeterminate = false
        },
        // 控制全选样式
        handleCheckedItemChange(value) {
            let len = 0
            value.checkList = []
            value.moduleList.forEach((item) => {
                if (item.isChecked === 1) {
                    // len++
                    value.checkList.push(item.isChecked)
                }
                else {
                    this.$nextTick(() => {
                        value.isIndeterminate = true
                    })
                }
            })
            if (value.checkList.length === value.moduleList.length) {
                this.$nextTick(() => {
                    value.checkAll = true
                    value.isIndeterminate = false
                })
            }
            else {
                this.$nextTick(() => {
                    value.checkAll = false
                    value.isIndeterminate = true
                })
            }
            // let checkedCount = value.length;
            // value.checkAll = checkedCount === value.moduleList.length;
            // value.isIndeterminate = checkedCount > 0 && checkedCount < value.moduleList.length;
        }
    }
}