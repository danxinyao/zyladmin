import {goods as ajax} from 'services'
export default {
    props: {
        list: Array,
        roomList: Array
    },
    methods: {
        //编辑
        edit(item) {
            this.$emit('edit', item)
        },
        //录入房型
        editRoomType(item) {
            this.$emit('editRoomType', item)
        },        
        selectChange(val) {
            this.$emit('select-change', val)
        },
        expand(val) {
            this.$emit('expand',val)
        },  
        enabledRoom(val) {
            this.$emit('enabledRoom', val)
        },
        disabledRoom(val) {
            this.$emit('disabledRoom', val)
        },                  
    }
}