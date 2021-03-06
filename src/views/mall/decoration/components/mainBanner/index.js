import {composite as ajax} from 'services'

export default {
    data() {
        return {
        	pageType: '12',
            list:[]
        }
    },
    mounted() {
    	this.getSlideShowList()
    },
    methods: {
    	getSlideShowList() {
            ajax.getSlideShowList(this.pageType).then((result) => {
                //console.log(result)
                this.list = result
            })
        },
    }
}