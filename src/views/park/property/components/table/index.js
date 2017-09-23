import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    data() {
        return {
            feeTypeList: [
                {
                    value: -1,
                    text: '全部'
                },
                {
                    value: 10,
                    text: '物业费'
                },
                {
                    value: 20,
                    text: '租金'
                },
                {
                    value: 30,
                    text: '水费'
                },
                {
                    value: 40,
                    text: '电费',
                },
                {
                    value: 999,
                    text: '其他'
                }
            ],

        }
    },
    methods: {
        feeType(index) {
            for (let i = 0; i < this.feeTypeList.length; i++) {
                if (this.feeTypeList[i].value == index) {
                    return this.feeTypeList[i].text
                    break
                }
            }
        },
        isPaid(item) {
            if(item.isPaid == 0){
                return '否'
            }else{
                return '是（' + item.paidTime +'）' 
            }
        },
        edit(item) {
            this.$emit('edit', item)
        },
        del(item) {
            this.$emit('del', item)
        }
    }
}