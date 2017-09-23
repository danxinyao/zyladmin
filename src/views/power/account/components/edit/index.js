import { cloneDeep } from 'lodash'
import {power as ajax} from 'services'
import {dropdown as ajaxs} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        type: Number,
        editForm: Object
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                loginID: '',
                login: '',//账号
                name: '',//名字
                tele: '',//联系方式
                roleID: '',//角色
            },
            // 重置密码
            resetPassword: {
                loginID: "",
                login: '',
                password: ""
            },
            roleList: [],//下拉框
            // 输入验证
            rules: {
                login: [
                    { required: true, message: '请输入账户', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入名字', trigger: 'blur' },
                ],
                tele: [
                    { required: true, message: '请填写联系方式', trigger: 'number' }
                ],
                roleID: [
                    { required: true, message: '请选择所属的角色', trigger: 'number' }
                ],
                password1: [
                    { required: true, message: '请输入新密码', trigger: 'number' }
                ],
                password2: [
                    { required: true, message: '请再次输入新密码', trigger: 'number' }
                ]
            },
        }
    },
    watch: {
        editForm(editForm) {
            // 编辑
            if (this.type === 1) {
                this.form = cloneDeep(this.editForm)
            }
            // 新增
            else if (this.type === 0) {
                this.form = cloneDeep(this.initForm)
            }
            // 重置密码
            else {
                this.form = cloneDeep(this.resetPassword)
                this.form.loginID = this.editForm.loginID
                this.form.login = this.editForm.login
            }
        }
    },
    mounted() {
        // 获取角色下拉列表
        this.getRoleList()
    }, 
    methods: {
        // 获取角色下拉列表
        getRoleList() {
            ajaxs.getRoleList().then((result) => {
                this.roleList = result
            })
        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // 验证通过
                    if (this.type !==2) {
                        ajax.saveAccount(this.form).then(() =>{
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
                    // 重置密码
                    else {
                        if (this.form.password1 !== this.form.password2) {
                            this.$message({
                                message: '两次输入的密码不一致',
                                type: 'warning'
                            })
                            return
                        }
                        else {
                            this.form.password = this.form.password1
                        }
                        ajax.resetPwd(this.form).then(() =>{
                            this.$message({
                                message: '重置成功',
                                type: 'success'
                            })
                            this.refresh()
                            this.close()
                        }).catch((error) => {
                            this.$message.error(error)
                        })
                    }
                }
            })
        },
        // 刷新页面
        refresh() {
            this.$emit('refresh')
        }
    }
}