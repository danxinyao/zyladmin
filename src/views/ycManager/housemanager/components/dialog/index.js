import { hotelManager as ajax } from 'services'
export default {
    props: {
        showDialog: Boolean,
        size: String,
        hotelRoomTypeID: Object
    },
    data() {
        return {
            form: {
                hotelRoomTypeID: "",
                name: "",
            },
          // 输入验证
            rules: {
                'name': [
                    { required: true, message: '请输入房间名称/号'},
                ],
            },            
        }
    },
    watch: {
        "hotelRoomTypeID.roomTypeID"() {
           this.form.hotelRoomTypeID = this.hotelRoomTypeID.roomTypeID 
        } 
    },
    mounted() {
       console.log(this.hotelRoomTypeID) 
    },
    methods: {
        // 关闭
        close() {
            this.$emit('closeDialog')
        },
        // 保存
        // save() {
        //     ajax.saveRoom(this.form).then((result) => {
        //         this.$message({
        //             message: '添加成功',
        //             type: 'success'
        //         })
        //         this.refresh()
        //         this.close()                

        //     }).catch((error) => {
        //             this.$message.error(error)
        //         })
        // }, 
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveRoom(this.form).then((result) => {
                        this.$message.success('添加成功')
                        this.refresh()
                        this.close()
                    }).catch((error) => {
                        this.$message.error(error)
                    })
                }
            })
        },              
        // 刷新页面
        refresh() {
            this.$emit('refresh')
        }
    }
}