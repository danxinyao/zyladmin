import {goods as ajax} from 'services'
export default {
    props: {
        title: String,
        tableData: Object,
    },
    data() {
        return{
            table:{}
        }
    },
    
    methods: {
        edit() {
            this.$emit('edit', this.tableData.freightTemplateID)
        },
        deleteM(){
           this.$emit('deleteM', this.tableData.freightTemplateID) 
        }
    }
}