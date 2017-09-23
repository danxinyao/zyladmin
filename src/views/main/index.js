import { menuList } from '../../data/menu.js'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sysName: '后台管理系统',
            userInfo: {
                name: '曹大大',
                head: ''
            },
            menuList: []
        }
    },
    mounted() {
        this.menuList = menuList
    },
    methods: {
        ...mapActions([
            'removeAuth'
        ]),
        handleDropdown(command) {
            if (command === 'logout') {
                this.$confirm('确定退出吗？', '提示', { type: 'warning' }).then(() => {
                    this.$message.success('退出登录成功')
                    this.removeAuth()
                    this.$router.push('/log')
                }).catch(() => {

                })
            }
        }
    }
}