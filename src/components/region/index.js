import { dropdown as ajax } from 'services'

export default {
    name: 'PgRegion',
    props: {
        state: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        district: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            stateRegionID: this.state,
            cityRegionID: this.city,
            districtRegionID: this.district,
            stateList: [],
            cityList: [],
            districtList: [],
        }
    },
    mounted() {
        // 获取省列表
        this.getStateList()
        // 如果开始时，省市区有数据的时候，初始化省市区列表
        if (this.stateRegionID != '') {
            this.getCityList(this.stateRegionID)
        }
        if (this.cityRegionID != '') {
            this.getdistrictList(this.cityRegionID)
        }
    },
    watch: {
        // 清空省市区组件中已有的数据
        state() {
            if (this.state == '') {
                this.stateRegionID = ''
                this.cityRegionID = ''
                this.cityList = []
                this.districtRegionID = ''
                this.districtList = []
            }
        },
        stateRegionID() {
            this.cityRegionID = ''
            this.cityList = []
            this.districtRegionID = ''
            this.districtList = []
            if (this.stateRegionID != '') {
                this.getCityList(this.stateRegionID)
            }   
           
        },
        cityRegionID() {
            this.districtRegionID = ''
            this.districtList = []
            if (this.cityRegionID != '') {
                this.getdistrictList(this.cityRegionID)
            }
        },
        districtRegionID() {
            // 显式更新父组件的state字段
            this.$emit('update:state', this.stateRegionID)
            // 显式更新父组件的city字段
            this.$emit('update:city', this.cityRegionID)
            // 显式更新父组件的district字段
            this.$emit('update:district', this.districtRegionID)
        },
    },
    methods: {
        // 获取省列表
        getStateList() {
            let parentID = ''
            ajax.getRegionList(parentID).then((result) => {
                this.stateList = result
            })
        },
        // 获取是列表
        getCityList(parentID) {
            ajax.getRegionList(parentID).then((result) => {
                this.cityList = result
            })
        },
        // 获取区列表
        getdistrictList(parentID) {
            ajax.getRegionList(parentID).then((result) => {
                this.districtList = result
            })
        }
    }
}














