import {information as ajax} from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        isFirst: Boolean,
        editForm: Object
    },
    data() {
        return {
            form: {},
            initForm: {
                articleCategoryID:'',
                name: '',
                parentID:'',
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
    methods: {
        save() {
            ajax.saveArticleClassfiy(this.form).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.refresh()
                this.close()
            })
            // if (this.isFirst && !this.isEdit) {
            // }
            // else if (!this.isFirst && !this.isEdit) {
            //     ajax.addSubDept({
            //         Name: this.form.label,
            //         ParentID: this.form.value
            //     }).then(() => {
            //         this.$message({
            //             message: '保存成功',
            //             type: 'success'
            //         })
            //         this.refresh()
            //         this.close()
            //     })
            // }
            // else if (this.isEdit && !this.isFirst) {
            //     ajax.editDept({
            //         Name: this.form.label,
            //         DeptID: this.form.value
            //     }).then(() => {
            //         this.$message({
            //             message: '修改成功',
            //             type: 'success'
            //         })
            //         this.refresh()
            //         this.close()
            //     })
            // }
        },
        close() {
            this.$emit('close')
            this.initForm =  {
                articleCategoryID:'',
                name: '',
                parentID:'',
            }
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}