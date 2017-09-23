import {decoration as ajax} from 'services'

export default {
    data() {
        return {
        	list: [],
        }
    },
    mounted() {
    	this.getClassifyTreeList()
    },
    methods: {
    	getClassifyTreeList() {
    		ajax.getClassifyTreeList().then((result) => {
                //console.log(result)
                this.list = result[0]
            })
    	}
    }
}