
import {composite as ajax} from 'services'

export default {
    
    data() {
        return {
            form: [
                {
                    ruleType: 11,
                    params: '',
                },
                {
                    ruleType: 12,
                    params: '',
                },
                {
                    ruleType: 20,
                    params: '',
                },
                {
                    ruleType: 21,
                    params: '',
                },
                {
                    ruleType: 22,
                    params: '',
                },
                {
                    ruleType: 23,
                    params: '',
                },
                {
                    ruleType: 31,
                    params: '',
                },
                {
                    ruleType: 32,
                    params: '',
                },
                {
                    ruleType: 33,
                    params: '',
                },
                {
                    ruleType: 41,
                    params: '',
                },
                {
                    ruleType: 42,
                    params: '',
                },
                {
                    ruleType: 43,
                    params: '',
                },
                {
                    ruleType: 44,
                    params: '',
                },
                {
                    ruleType: 45,
                    params: '',
                },
            ],
        }
    },
    mounted() {
        // 获取积分增加规则
        this.getGainRule()
    },
    methods: {
        // 获取积分增加规则
        getGainRule() {
            ajax.getGainRule().then((result) => {
                this.sortArray(result)
            })
        },
        // 对数组排序
        sortArray(array) {
            for (let i = 0; i < array.length; i++) {
                for(let j = 0; j < this.form.length; j++) {
                    if (this.form[j].ruleType === array[i].ruleType) {
                        this.form[j].params = array[i].params
                        break
                    }
                }
            }
        },
        // 保存
        save() {
            ajax.saveGainRule(this.form).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                // 刷新压面
                this.getGainRule()
            }).catch((error) => {
                this.$message.error(error)
            })
        }
    }
}