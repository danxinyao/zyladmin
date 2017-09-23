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
            form: {
                condition: {
                    sheet: '',
                    mobile: '',
                    name: '',
                    platformType: 1,
                    goodName: '',
                    orderTime: {
                        begin: '',
                        end: ''
                    },
                    linkMan: '',
                    state: '',
                    city: '',
                    district: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            resetForm: {
                condition: {
                    sheet: '',
                    mobile: '',
                    name: '',
                    platformType: 1,
                    goodName: '',
                    orderTime: {
                        begin: '',
                        end: ''
                    },
                    linkMan: '',
                    state: '',
                    city: '',
                    district: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            classList: [],
            active: 0,//当前的订单状态
            // state: '',
            // city: '',
            // district: '',
        }
    },
    watch: {
        editForm(editForm) {
            // 控制显示订单状态所在的状态
            this.active = 0
            if (this.type == 1 && this.editForm.orderFlagTimeLine.length !== 0) {
                this.editForm.orderFlagTimeLine.forEach((item) => {
                    if (item.hasValue) {
                        this.active++
                    }
                })
            }
            if (this.type == 0) {
                // this.form.condition.state = '00000000-0000-0000-0000-000000010006'
                // this.form.condition.city = '00000000-0000-0000-0000-000000010076'
                // this.form.condition.district = '00000000-0000-0000-0000-000000010694'
            }
        }
    }, 
    methods: {
        // 返回
        close() {
            this.$emit('close')
            this.reset()
        },
        // 保存
        save() {
            this.form.condition.platformType = this.editForm.condition.platformType
            this.$emit('searchOrder', this.form)
            this.close()
        },
        // 清空搜索内容
        reset() {
            this.form = cloneDeep(this.resetForm)
            this.form.condition.state = ''
            this.form.condition.city = ''
            this.form.condition.district = ''
        }
    }
}