import { cloneDeep } from 'lodash'
import {composite as ajax} from 'services'
import { mapGetters, mapActions } from 'vuex'

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
                integralExchangeID: '',
                name: '',
                imgUrl: '',
                note: '',
                description: '',
                memberGradeList: [],
                beginTime: '',
                endTime: '',
                activeGoodsList: []
            },
            // 输入验证
            rules: {
                name: [
                    { required: true, message: '请输入活动名', trigger: 'blur' },
                ],
            },
            isIndeterminate: true,
            checkAll: false,
            memberList: [],  //会员等级列表
            memberGradeList: []
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        },
    },
    computed: {
        ...mapGetters([
            'goodsList'
        ]),
    },
    mounted() {
        this.getMemberGrade()//获取会员等级
    },
    methods: {
        ...mapActions([
            'selectGoods'
        ]),
        resetForm() {
            this.form = cloneDeep(this.initForm)
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                // 把活动条件中的html中的<br>换成\n
                this.form.description = this.form.description.replace(/<br>/g,'\n')
                this.checkAll = false
                this.isIndeterminate = true
                if (this.form.memberGradeList.length === this.memberList.length) {
                    this.checkAll = true
                    this.isIndeterminate = false
                }
                this.memberGradeList = []
                this.form.memberGradeList.forEach((item) => {
                    this.memberGradeList.push(item.memberGradeID)
                })
                this.selectGoods(this.form.activeGoodsList)
            }
            else {
                this.resetForm()
            }
        },
        // 获取会员等级
        getMemberGrade() {
            ajax.getMemberGrade().then((result) => {
                this.memberList = result
            })
        },
        // 删除
        del(item,index) {
            this.goodsList.pop(index-1)
        },
        // 返回
        close() {
            this.$emit('close')
            // 每次关闭弹出框的时候，清空vuex中的商品列表
            this.selectGoods([])
        },
        // 保存
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // 获取活动条件说明输入框中的换行符,并把它转化成<br>标签
                    this.form.description = this.form.description.replace(/\n/g,'<br>')
                    this.form.activeGoodsList = this.goodsList
                    ajax.saveActive(this.form).then(() => {
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
        // 图片上传
        uploadSuccess(file) {
            this.form.imgUrl = file
        },
        // 新增商品
        addGoods() {
            this.$emit('addGoods')
        },
        handleCheckAllChange(event) {
            this.form.memberGradeList = event.target.checked ? this.memberList : []
            this.isIndeterminate = false
            this.memberGradeList = []
            if (event.target.checked) {
                this.memberList.forEach((item) => {
                    this.memberGradeList.push(item.memberGradeID)
                })
            }
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length
            this.checkAll = checkedCount === this.memberList.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.memberList.length
            this.form.memberGradeList = []
            this.memberGradeList.forEach((item) => {
                this.memberList.forEach((items) => {
                    if (item === items.memberGradeID) {
                        this.form.memberGradeList.push(items)
                    }
                })
            })
        },
        //刷新页面
        refresh() {
            this.$emit('refresh')
        }
    }
}