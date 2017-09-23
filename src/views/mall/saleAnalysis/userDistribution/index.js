import echarts from 'echarts'
import chinaJson from '../../../../data/china.json'
export default {
    
    data() {
        return {
           province: [
           		{
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '其他',
	           		value: 20
	            },
	            {
	           		name: '广东',
	           		value: 2
	            }
           ]
        
        }
    },
    mounted() {
    	this.drawUserAreaMap()
    },
    methods: {
    	drawUserAreaMap() {
    		const user_area = echarts.init(document.getElementById('userDistribution'))  //用户统计表格
    		echarts.registerMap('china', chinaJson); // 注册地图

    		let options = {
			    title: {
			        text: '全国用户分布',
			        left: 'center'
			    },
			    tooltip: {
			        trigger: 'item'
			    },
			    visualMap: {
			        min: 0,
			        max: 2500,
			        left: 'left',
			        top: 'bottom',
			        text: ['高','低'],           // 文本，默认为数值文本
			        calculable: true
			    },
			    
			    series: [
			        {
			            name: '用户数量',
			            type: 'map',
			            mapType: 'china',
			            roam: false,			     
			            label: {
			                normal: {
			                    show: true
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			            data:[
			                {name: '北京',value: 45 },
			                {name: '天津',value: 21 },
			                {name: '上海',value: 12 },
			                {name: '重庆',value: 54 },
			                {name: '河北',value: 63 },
			                {name: '河南',value: 45 },
			                {name: '云南',value: 13 },
			                {name: '辽宁',value: 56 },
			                {name: '黑龙江',value: 36 },
			                {name: '湖南',value: 45 },
			                {name: '安徽',value: 64 },
			                {name: '山东',value: 34 },
			                {name: '新疆',value: 45 },
			                {name: '江苏',value: 32 },
			                {name: '浙江',value: 71 },
			                {name: '江西',value: 12 },
			                {name: '湖北',value: 9 },
			                {name: '广西',value: 95 },
			                {name: '甘肃',value: 441 },
			                {name: '山西',value: 23 },
			                {name: '内蒙古',value: 45},
			                {name: '陕西',value: 73 },
			                {name: '吉林',value: 65 },
			                {name: '福建',value: 86 },
			                {name: '贵州',value: 82 },
			                {name: '广东',value: 93 },
			                {name: '青海',value: 23 },
			                {name: '西藏',value: 35 }
			            ]
			        }
			    ]
	    	}
	    	user_area.setOption(options,true)
		}
    }
}