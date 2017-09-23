import { cloneDeep } from 'lodash'
import {ycManager as ajax} from 'services'
import PgEdit from './components/edit/index.vue'

export default {
    components: {
        PgEdit
    },
    data() {
        return {
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            editType: 0, // 编辑类型
            showEdit: false, // 是否显示新增弹出窗口
            classRoomList: [],
            yearmonth: '',
            month: '',
            year: '',
            shopId: '',
            calender: []
        }
    },
    watch: {
        yearmonth() {
            this.year = this.yearmonth.getFullYear()
            this.month = this.yearmonth.getMonth()
            this.getCalender(this.year, this.month)
            this.getMonthCurriculumList()
        },
        shopId() {
            this.getMonthCurriculumList()
        },
    },
    mounted() {
        this.getClassroomList()
        // 开始时，日历默认显示的月份
        this.yearmonth = new Date()
        this.year = this.yearmonth.getFullYear()
        this.month = this.yearmonth.getMonth()
        this.getCalender(this.year, this.month)
    },
    methods: {
        // 获取课室
        getClassroomList() {
            ajax.getClassroomList().then((result) => {
                this.classRoomList = result
            })
        },
        // 获取课程月列表
        getMonthCurriculumList() {
            if (this.shopId == '') {
                return
            }
            if (this.year == '' || this.month == '') {
                return
            }
            let str = ''+this.year+'-'+(this.month+1)+'-'+'01'
            ajax.getMonthCurriculumList(this.shopId, str).then((result) => {
                this.updateColor(result)
            })
        },
        // 更新颜色的显示
        updateColor(array) {
            // 课室变化的时候，先把之前的颜色标志初始化
            for(let i = 0; i < this.calender.length; i++ ) {
                for(let j = 0; j < 7; j++) {
                    this.$set(this.calender[i][j], 'hasEdit', false)
                }
            }
            array.forEach((item) => {
                for(let i = 0; i < this.calender.length; i++ ) {
                    for(let j = 0; j < 7; j++) {
                        if(this.calender[i][j].date == item.courseDate) {
                            this.$set(this.calender[i][j], 'hasEdit', true)
                            break
                        }
                       
                    }
                }
            })
            this.$forceUpdate() // 强制刷新dom
        },
        closeEdit() {
            this.showEdit = false
        },
        // 根据年月生成日历
        getCalender(year, month) {
            let time = new Date()
            time.setFullYear(year,month,1)
            let first = time.getDay()
            let totalDay = this.getTotalDay(year, month)
            let beign = 1
            for(let i = 0; i < 6; i++ ) {
                this.calender[i] = []
                for(let j = 0; j < 7; j++) {
                    if (i === 0) {
                        if (j < first) {
                            this.calender[i].push({
                                hasEdit: false,
                                date: '',
                                value: ''
                            })
                        }
                        else {
                            this.calender[i].push({
                                hasEdit: false,
                                date: `${year}-${this.changeString(month+1)}-${this.changeString(beign)}`,
                                value: beign
                            })
                            beign++
                        }
                    }
                    else {
                        if (beign <= totalDay) {
                            this.calender[i].push({
                                hasEdit: false,
                                date: `${year}-${this.changeString(month+1)}-${this.changeString(beign)}`,
                                value: beign
                            })
                            beign++
                        }
                        else {
                            this.calender[i].push({
                                hasEdit: false,
                                date: '',
                                value: ''
                            })
                        }
                    }
                }
            }
            if (this.calender[5][0].value == '') {
                this.calender.length = 5
            }
        },
        // 把小于10的月份和日转化成二位数的字符串
        changeString(number) {
            if (number < 10) {
                return `0${number}`
            }
            else {
                return `${number}`
            }
        },
        // 根据年月计算这个的天数
        getTotalDay(year, month) {
            return new Date(year, month+1, 0).getDate()
        },
        // 排课
        showDialog(day,flag) {
            if (day.value == '') {
                return
            }
            if (this.shopId == '') {
                this.$message.warning('请先选择课室')
                return
            }
            if (flag === 0) {
                let obj = {}
                obj.year = this.year
                obj.month = this.month+1
                obj.day = day.value
                obj.shopId = this.shopId
                this.editType = 0
                this.editForm = cloneDeep(obj)
            }
            else if(flag === 1) {
                let obj = {}
                obj.shopId = this.shopId
                this.editType = 1
                this.editForm = cloneDeep(obj)
            }
            else if (flag === 2) {
                let obj = {}
                obj.shopId = this.shopId
                this.editType = 2
                this.editForm = cloneDeep(obj)
            }
            this.showEdit = true
        },
        // 刷新
        refresh() {
            this.getMonthCurriculumList()
        }
    }
}