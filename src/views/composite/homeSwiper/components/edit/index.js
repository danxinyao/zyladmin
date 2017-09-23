import { cloneDeep } from 'lodash'
import {composite as ajax} from 'services'

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
                advertisingPositionID: '',
                positionType: 0,
                url: '',
                imgUrl: ''
            },
        }
    },
    watch: {
        editForm(editForm) {
            // 编辑
            this.setForm()
        }
    },
    mounted() {
        
    }, 
    methods: {
        resetForm() { 
            this.form = cloneDeep(this.initForm)         
            this.form.positionType= this.editForm.pageType
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                // this.$refs.upload.imageUrl = this.form.imgUrl
                // this.$nextTick(() => {
                //     if (this.$refs.upload) {
                //         this.$refs.upload.imgUrl = this.form.imgUrl
                //         console.log(this.$refs.upload.imgUrl)
                //     }
                // })
            }
            else {
                this.resetForm()
            }
        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            //校验地址格式是否正确
            //let url = this.form.url
            if(this.form.url !='') {
               let flag = this.form.url.substring(0,7) =="http://"
               let flags = this.form.url.substring(0,8) =="https://"
               if(!flag && !flags) {
                    this.$message.error('请填写带正确抬头的链接地址（抬头："http://或者https://）')
                    return false
               }
            }
       

            ajax.saveSlideShow(this.form).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.refresh()
                this.close()
            }).catch((error) =>{
                this.$message.error(error)
            })
        },
        // 单图
        uploadSuccess(file) {
            this.form.imgUrl = file
        },
        // 刷新页面
        refresh() {
            this.$emit('refresh')
        },
    }
}