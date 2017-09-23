import { account as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            form: {
                userName: 'zyl',
                password: '123456'
            },
            rules: {
                userName: [
                    { 
                        required: true, 
                        message: '请输入账号', 
                        trigger: 'blur' 
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            },
            checked: false
        }
    },
    computed: {
        ...mapGetters([
            'localLoading'
        ])
    },
    mounted() {
        this.handleSubmit()
    },
    methods: {
        ...mapActions([
            'setAuth'
        ]),

        handleSubmit() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    ajax.login(this.form).then((result) => {
                        if (result) {
                            this.setAuth(result)
                            
                            this.$message.success('登录成功')
                            setTimeout(() => {
                                this.$router.push('/sysLead')
                            }, 500)
                        }
                    }).catch((error) => {
                        this.$message.error(error)
                    })
                }
            })
        }
    }
}