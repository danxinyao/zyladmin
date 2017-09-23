export default {
    name: 'PgAddPlace',
    props: {
        show: Boolean,
        provinceList:Array,
        eidtCheckedPlace: Array,
    },
    data() {
        return{
            checkedCities:[],//选中的地址名称数组
            hadChecked:[],//已经选中的
        }
    },
    watch: {
        eidtCheckedPlace(eidtCheckedPlace) {
           this.setCheckedCities(eidtCheckedPlace)
            
        }
    },
    methods: {
        setCheckedCities(eidtCheckedPlace){
            this.checkedCities = []
            for (let i=0 ;i<eidtCheckedPlace.length;i++) {
                this.checkedCities.push(eidtCheckedPlace[i].name)
            }
        }
        ,
        close(){
            this.$emit('closePlace')
        },
        //选择地址
        handleCheckedCitiesChange(value) {
            console.info(value)
        },
        add() {
            this.hadChecked = []
            for (var i=0 ;i<this.checkedCities.length;i++){
                for(var j = 0;j<this.provinceList.length; j++){
                    if(this.checkedCities[i] == this.provinceList[j].name){
                        this.hadChecked.push(this.provinceList[j])
                        break
                    }
                }
            }
            this.$emit('add',this.hadChecked);
        }
    }
}