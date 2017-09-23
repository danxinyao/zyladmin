import { cloneDeep } from 'lodash'
import {ycManager as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        editType: Number,
        editForm: Object
    },
    data() {
        return {
            date: '',
            classType: [],
            courseList: [],
            copyClass: {
                shopId: '',
                sourceDate: {
                    begin: "",
                    end: ""
                },
                targetDate: {
                    begin: "",
                    end: ""
                }
            }
        }
    },
    watch: {
        editForm() {
            if (this.editType === 0) {
                this.date = `${this.editForm.year}-${this.changeString(this.editForm.month)}-${this.changeString(this.editForm.day)}`
                this.getDayCurriculumList(this.editForm.shopId, this.date)
            }
            if (this.editType === 2) {
                this.clearCopy()
            }
        }
    },
    mounted() {
        this.getCourseList()
    },
    methods: {
        //获取课程类型列表
        getCourseList() {
            this.classType = []
            ajax.getCourseList().then((result) => {
                this.classType = result
            })
        },
        // 获取日课表列表
        getDayCurriculumList(shopId, date) {
            this.courseList = []
            ajax.getDayCurriculumList(shopId, date).then((result) => {
                this.courseList = this.changeTime(result)
            })
        },
        // 对后台返回的数据进行处理，把开始和结束时间转化成小时和分钟的形式
        changeTime(array) {
            array.forEach((item) => {
                item.beginTime = item.beginTime.substring(11,16)
                item.endTime = item.endTime.substring(11,16)
            })
            return array
        },
        close() {
            this.$emit('close')
        },
        add() {
            let obj = {
                courseScheduleId: "",
                courseId: "",
                shopId: this.editForm.shopId,
                beginTime: "",
                endTime: ""
            }
            this.courseList.push(obj)
        },
        // 删除
        remove(item,index) {
            this.$confirm('您确定删除该课程?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                if (item.courseId != '') {
                    ajax.deleteCurriculum().then(() => {
                        this.courseList.splice(index, 1)
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                    })
                }
                else {
                    this.courseList.splice(index, 1)
                    this.$message.success('删除成功!')
                }
            })
        },
        // 保存
        save() {
            if (this.editType !==2) {
                // 输入判断和时间拼接
                if(this.testTime()) {
                    ajax.saveCurriculum(this.courseList).then(() => {
                        this.$message.success('保存成功!')
                        this.refresh()
                    }).catch((error) => {
                        this.courseList = this.changeTime(this.courseList)
                        this.$message.error(error)
                    })
                }
            }
            else {
                if (this.copyClass.sourceDate.begin == '' || this.copyClass.sourceDate.end == '' ||
                    this.copyClass.targetDate.begin == '' || this.copyClass.targetDate.end == '') {
                    this.$message.warning('时间不能为空!')
                    return
                }
                let time1 = new Date(this.copyClass.sourceDate.begin)
                let time2 = new Date(this.copyClass.sourceDate.end)
                let time3 = new Date(this.copyClass.targetDate.begin)
                let time4 = new Date(this.copyClass.targetDate.end)

                if ((time3 >= time1 && time3 <= time2) || (time4 <= time2 && time4 >= time1)) {
                    this.$message.warning('时间不能重叠!')
                    return
                }
                this.copyClass.shopId = this.editForm.shopId
                ajax.copyCurriculum(this.copyClass).then(() => {
                    this.$message.success('保存成功!')
                    this.close()
                    this.refresh()
                }).catch((error) => {
                    this.$message.error(error)
                })
            }
        },
        // 输入判断和时间拼接
        testTime() {
            let flag = true
            if (this.date == '') {
                this.$message.warning('课程日期不能为空')
                return false
            }
            this.courseList.forEach((item) => {
                if (!/^\d{2}:\d{2}$/g.test(item.beginTime)) {
                    this.$message.warning('请输入如:"08:30"形式的时间')
                    flag = false
                    return 
                }
                if (!/^\d{2}:\d{2}$/g.test(item.endTime)) {
                    this.$message.warning('请输入如:"08:30"形式的时间')
                    flag = false
                    return 
                }
                if (item.beginTime == ''|| item.endTime =='') {
                    this.$message.warning('课程开始或结束时间不能为空')
                    flag = false
                    return 
                }
                let time1 = new Date(item.beginTime)
                let time2 = new Date(item.endTime)
                if (time2 <= time1) {
                    this.$message.warning('课程开始不能大于等于结束时间')
                    flag = false
                    return 
                }
                item.beginTime=`${this.date} ${item.beginTime}:00`
                item.endTime=`${this.date} ${item.endTime}:00`
            })
            return flag
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
        // 重置 clearCurriculum
        reset() {
            if (this.editType !== 2 ) {
                this.$confirm('您确定清空该课程表?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    ajax.clearCurriculum({
                        shopId: this.editForm.shopId,
                        date: this.date
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '清空成功!'
                        })
                        this.close()
                        this.refresh()
                    }).catch((error) => {
                        this.$message.error(error)
                    })
                })
            }
            else {
                this.clearCopy()
            }
        },
        //清空复制课程表中的数据
        clearCopy() {
            this.copyClass.sourceDate.begin = ''
            this.copyClass.sourceDate.end = ''
            this.copyClass.targetDate.begin = ''
            this.copyClass.targetDate.end = ''
        },
        // 刷新
        refresh() {
            this.$emit('refresh')
        }
    }
}