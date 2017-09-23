import {goods as ajax} from 'services'
import { cloneDeep } from 'lodash'
import { mapGetters } from 'vuex'

export default {
    props: {
        title: String,
        show: Boolean,
        editForm: Object
    },
    data() {
        return {
            form: {},
            initForm: {
                id:'',
                name: '',
                parentID:'',
            },
            rules: {// 输入验证
                name: [
                    { required: true, message: '请输入商品分类名'},
                    { max: 20, message: '长度在20个字符以内'}
                ]
            }
        }
    },
    watch: {
        editForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = this.initForm
            }
            else {
                this.form = this.editForm
            }
        }
    },
    computed: {
        ...mapGetters([
            'localLoading'
        ])
    },
    methods: {
        save() {
            this.$refs.form.validate((valid) => {
                if(valid){
                    ajax.saveGoodsClassfiy(this.form).then(() => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.refresh()
                        this.close()
                    })
                }
            })
        },
        close() {
            this.$emit('close')
            this.initForm =  {
                id:'',
                name: '',
                parentID:'',
            }
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}