import { cloneDeep } from 'lodash'
import {information as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: String,
        editForm: Object,
        isNew:Boolean,
        articleBaseType:Array
    },
    data() {
        return {
            form: {
                articleID: "",
                name: "",
                articleCategoryID: "",
                description: "",
                articleType:'',
                imgUrl: "",
                recommendFlag: 0,
                content: "",
            },
            imgurl:'',
            // 初始表单
            initForm: {
                articleID: "",
                name: "",
                articleCategoryID: "",
                description: "",
                articleType:'',
                imgUrl: "",
                recommendFlag: 0,
                content: "",

            },
            content: '', // 编辑器初始显示值
            FArticleType:[
                
            ],//一级文章分类
            SArticleType:[
                
            ],//二级文章分类

            first:'',//一级分类
            second:'',//二级分类
            checked:false,//是否上咨询轮播
        }
    },
    watch: {
        editForm(editForm) {
            this.getArticleType('');
            this.setForm(this.editForm)
        }
    },
    created() {
        this.setForm(this.editForm)
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.content = ''
            this.first = ''//一级分类
            this.second = ''//二级分类
            this.checked = false//是否上咨询轮播
            this.imgurl = ''
        },
        setForm(editForm) {
            if (this.isEdit == "0" || this.isEdit == "2") {
                this.form = cloneDeep(this.editForm)
                this.content = this.form.content // 初始化编辑器内容
                this.imgurl = this.form.imgUrl
                this.$nextTick(() => {
                    if(this.form.parentArticleCategoryID == null || this.form.parentArticleCategoryID == ''){
                        this.first = this.form.articleCategoryID
                        this.second = ''
                    }else {
                        this.first = this.form.parentArticleCategoryID
                        this.second = this.form.articleCategoryID
                    }
                    
                    
                })
                
            }else {
                this.resetForm()
            }

            // this.$nextTick(() => {
            //     if (this.$refs.contentEditor) {
            //         this.$refs.contentEditor.updateEditor()
            //     }
            // })
        },
        // 返回
        close(index) {
            this.$emit('close',index)
        },
        // 保存
        save() {
            if(this.second ==''){
                this.form.articleCategoryID = this.first
            } else {
                this.form.articleCategoryID = this.second
            }
            if(this.checked){
                this.form
            }
            ajax.saveArticle(this.form).then(result=>{
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.close('1')
            })
        },
        //一级文章类型选择触发
        changeF(val) {
            this.second = ''
            this.getArticleType(val)
            console.info(val)
        },
        //获取文章文类型
        getArticleType(id) {
            ajax.getArticleTypeList(id).then(result=>{
                if(id != '' && id != null){
                    this.SArticleType = result
                } else {
                    this.FArticleType = result
                }
                
            })
        },
        //上传成功
        success(file) {
            console.log(file)
            this.form.imgUrl = file
        },
    }
}