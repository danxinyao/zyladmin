import echarts from 'echarts'

export default {
    
    data() {
        return {
           	pickerOptions2: {
          		shortcuts: [
	          		{
	            	text: '最近一周',
		            onClick(picker) {
		              const end = new Date()
		              const start = new Date()
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', [start, end])
		            }
			        }, 
			        {
			            text: '最近一个月',
			            onClick(picker) {
			              const end = new Date()
			              const start = new Date()
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			              picker.$emit('pick', [start, end])
			            }
			         }, 
			         {
			            text: '最近三个月',
			            onClick(picker) {
			              const end = new Date()
			              const start = new Date()
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			              picker.$emit('pick', [start, end])
			            }
          			}
          		]
        	},
        	timeRange: ''
        }
    },
    mounted() {
    	this.drawUserAreaMap()
    },
    methods: {
    	drawUserAreaMap() {
    		const user_area = echarts.init(document.getElementById('userConrast'))  //用户增长统计

    		let options = {
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['当日购买人数','老会员','新会员']
			    },
			    xAxis:  {
			        type: 'category',
			        boundaryGap: false,
			        data: ['周一','周二','周三','周四','周五','周六','周日']
			    },
			    yAxis: {
			        type: 'value',
			        axisLabel: {
			            formatter: '{value} 个'
			        }
			    },
			    
			    series: [
			        {
			            name: '当日购买人数',
			            type: 'line',
			            data: [11, 11, 15, 13, 12, 13, 10],
			            markPoint: {
			                data: [
			                    {type: 'max', name: '最大值'},
			                    {type: 'min', name: '最小值'}
			                ]
			            },
			            markLine: {
			                data: [
			                    {type: 'average', name: '平均值'}
			                ]
			            }
			        },
			        {
			            name: '老会员',
			            type: 'line',
			            data: [5, 4, 3, 8, 9, 7, 6],
			            markPoint: {
			                data: [
			                    {type: 'max', name: '最大值'},
			                    {type: 'min', name: '最小值'}
			                ]
			            },
			            markLine: {
			                data: [
			                    {type: 'average', name: '平均值'}
			                ]
			            }
			        },
			        {
			            name: '新会员',
			            type: 'line',
			            data: [6, 7, 12, 5, 3, 6, 4],
			            markPoint: {
			                data: [
			                    {type: 'max', name: '最大值'},
			                    {type: 'min', name: '最小值'}
			                ]
			            },
			            markLine: {
			                data: [
			                    {type: 'average', name: '平均值'}
			                ]
			            }
			        }
			    ]
	    	}
	    	user_area.setOption(options,true)
		}
    }
}