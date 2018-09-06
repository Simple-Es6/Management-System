let list ={
  name: 'AdminPage',
  data () {
    return {
      PieChart1:{
      	legendData:[
      			'0-10分钟',
      			'10-30分钟',
      			'30-60分钟',
      			'60分钟上'
      	],
      	seriesData:[
      			{
      				name:'0-10分钟',
      				value:20
      			},
      			{
      				name:'10-30分钟',
      				value:20
      			},
      			{
      				name:'30-60分钟',
      				value:20
      			},
      			{
      				name:'60分钟上',
      				value:20
      			}
      	]
      },
      PieChart2:{
      	legendData:[
      			'0-10分钟',
      			'10-30分钟',
      			'30-60分钟',
      			'60分钟上'
      	],
      	seriesData:[
      			{
      				name:'0-10分钟',
      				value:20
      			},
      			{
      				name:'10-30分钟',
      				value:20
      			},
      			{
      				name:'30-60分钟',
      				value:20
      			},
      			{
      				name:'60分钟上',
      				value:20
      			}
      	],
      	
      },
      myChart1:'',
      myChart2:'',
    }
  },
  //组件生成时执行事件
  created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		console.log(this.$refs);
		let that = this;
		this.myChart1 = this.$echarts.init(this.$refs.AdPieChart1);
		this.myChart2 = this.$echarts.init(this.$refs.AdPieChart2);
		this.myChart1.setOption({
			title : {
		        text: 'APP播放时长统计',
		        subtext: '总播放此时'+18888,
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        type: 'scroll',
		        orient: 'vertical',
		        left: 0,
		        top: 40,
		        bottom: 20,
		        data: that.PieChart1.legendData,
		        selected: that.PieChart1.legendData
		    },
		    series : [
		        {
		            name: '播放次数',
		            type: 'pie',
		            radius : '55%',
		            center: ['55%', '60%'],
		            data: that.PieChart1.seriesData,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		});
		this.myChart2.setOption({
			title : {
		        text: '音箱播放时长统计',
		        subtext: '总播放此时'+18888,
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        type: 'scroll',
		        orient: 'vertical',
		        right: 0,
		        top: 40,
		        bottom: 20,
		        data: that.PieChart2.legendData,
		        selected: that.PieChart2.legendData
		    },
		    series : [
		        {
		            name: '播放次数',
		            type: 'pie',
		            radius : '55%',
		            center: ['45%', '60%'],
		            data: that.PieChart2.seriesData,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		});
	},
	//方法
	methods:{
		getData(){
			
		}
	},
	//使用的组件
  components:{
		
	}
};
export default list;