import 'echarts/map/js/china.js';
let list = {
  	name: 'AccessData',
  	data () {
    	return {
    		timesdata:'',
    		playbackData:{
    			data1: ['周一','周二','周三','周四','周五','周六','周日'],
    			data2: [320, 302, 301, 334, 390, 330, 320]
    		},
      		axis:{
	    		nameData:['浏览量'],
	    		timeData:['周一','周二','周三','周四','周五','周六','周日'],
	    		recordData:[
			        {
			            name:'浏览量',
			            type:'line',
			            stack: '总量',
			            data:[1, 13002, 100001, 10034,111190,222230,4333210]
			        }
			    ]
	    	},
	    	axisRegion:{
                title: {
		            text: '地域分布',
//		            subtext: '人口密度数据来自Wikipedia'
		        },
		        tooltip: {
		            trigger: 'item',
		            formatter: '{b}:{c}'
		        },
		        toolbox: {
		            show: true,
		            orient: 'vertical',
		            left: 'right',
		            top: 'center',
		            feature: {
		                dataView: {readOnly: false},
		                restore: {},
		                saveAsImage: {}
		            }
		        },
		        visualMap: {
		            min:0,
		            max:1000,
		            text:['High','Low'],
		            realtime: false,
		            calculable: true,
		            inRange: {
		                color: ['lightskyblue','yellow', 'orangered']
		            }
		        },
                series : [
                    {
                        name: '用户数',
                        type: 'map',
                        map: 'china',
                        roam: false,
                        itemStyle: {
		                    normal:{label:{
		                        show:true,
		                        formatter:'{b}',
		                        textStyle: {fontSize: 10,fontWeight : 'bold'}
		                    }},
		                    emphasis:{label:{show:true}}
		                },
                        data:[
                            {name: '北京',value: Math.round(Math.random()*1000)},
                            {name: '天津',value: Math.round(Math.random()*1000)},
                            {name: '上海',value: Math.round(Math.random()*1000)},
                            {name: '重庆',value: Math.round(Math.random()*1000)},
                            {name: '河北',value: Math.round(Math.random()*1000)},
                            {name: '河南',value: Math.round(Math.random()*1000)},
                            {name: '云南',value: Math.round(Math.random()*1000)},
                            {name: '辽宁',value: Math.round(Math.random()*1000)},
                            {name: '黑龙江',value: Math.round(Math.random()*1000)},
                            {name: '湖南',value: Math.round(Math.random()*1000)},
                            {name: '安徽',value: Math.round(Math.random()*1000)},
                            {name: '山东',value: Math.round(Math.random()*1000)},
                            {name: '新疆',value: Math.round(Math.random()*1000)},
                            {name: '江苏',value: Math.round(Math.random()*1000)},
                            {name: '浙江',value: Math.round(Math.random()*1000)},
                            {name: '江西',value: Math.round(Math.random()*1000)},
                            {name: '湖北',value: Math.round(Math.random()*1000)},
                            {name: '广西',value: Math.round(Math.random()*1000)},
                            {name: '甘肃',value: Math.round(Math.random()*1000)},
                            {name: '山西',value: Math.round(Math.random()*1000)},
                            {name: '内蒙古',value: Math.round(Math.random()*1000)},
                            {name: '陕西',value: Math.round(Math.random()*1000)},
                            {name: '吉林',value: Math.round(Math.random()*1000)},
                            {name: '福建',value: Math.round(Math.random()*1000)},
                            {name: '贵州',value: Math.round(Math.random()*1000)},
                            {name: '广东',value: Math.round(Math.random()*1000)},
                            {name: '青海',value: Math.round(Math.random()*1000)},
                            {name: '西藏',value: Math.round(Math.random()*1000)},
                            {name: '四川',value: Math.round(Math.random()*1000)},
                            {name: '宁夏',value: Math.round(Math.random()*1000)},
                            {name: '海南',value: Math.round(Math.random()*1000)},
                            {name: '台湾',value: Math.round(Math.random()*1000)},
                            {name: '香港',value: Math.round(Math.random()*1000)},
                            {name: '澳门',value: Math.round(Math.random()*1000)},
                            {name: '南海诸岛',value: Math.round(Math.random()*1000)}
                        ]
                   	}
                ]
            },
	    	timeType:1
    	}
  	},
  	//组件生成时执行事件
  	created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		let that = this;
		this.myChart1 = this.$echarts.init(this.$refs.recordAxis);
		this.myChart2 = this.$echarts.init(this.$refs.regionAxis);
		this.myChart2.setOption(this.axisRegion);
		this.myChart1.setOption({
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:that.axis.nameData
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    toolbox: {
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: that.axis.timeData
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: that.axis.recordData
		});
		this.myChart3 = this.$echarts.init(this.$refs.playbackAxis);
		this.myChart3.setOption({
			title: {
		        text: '全国播放排行',
		        //subtext: '数据来自网络'
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        data: ['播放量']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        boundaryGap: [0, 0.01]
		    },
		    yAxis: {
		        type: 'category',
		        data: ['山东','山西','北京','上海','深圳','山东','山西','北京','上海','深圳']
		    },
		    series: [
		        {
		            name: '播放量',
		            type: 'bar',
		            data: [18203, 23489, 29034, 104970, 131744,18203, 23489, 29034, 104970, 131744]
		        }
		    ]
		});
	},
	//方法
	methods:{
		
	},
	//使用的组件
  	components:{
		
	}
};
export default list;