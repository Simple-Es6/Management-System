let list ={
  name: 'AdminPage',
  data () {
    return {
    		timeType:1,
	    	axis:{
	    		nameData:['浏览量','独立访客','IP统计'],
	    		timeData:['周一','周二','周三','周四','周五','周六','周日'],
	    		recordData:[
			        {
			            name:'浏览量',
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'独立访客',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'IP统计',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        }
			    ]
	    	},
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
      	dataObj:{
      		myChart1:'',
      		myChart2:'',
      		myChart3:'',
      		tadayspecial:0,//今天专题数  
      		tadaymusic:0,//今天音乐数  
      		tadayuser:0,//今天注册用户数 
      		tadayxw_sn:0,//今天绑定音响数 
      		specialcount:0,//专题总数 
      		musiccount:0,//音乐总数  
      		usercount:0,//用户总数  
      		xw_sncont:0//绑定音响总数
      	}
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData();
	},
	//页面渲染完成事件
	mounted(){
		let that = this;
		this.myChart1 = this.$echarts.init(this.$refs.AdPieChart1);
		this.myChart2 = this.$echarts.init(this.$refs.AdPieChart2);
		this.myChart3 = this.$echarts.init(this.$refs.AdAxis);
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
		this.myChart3.setOption({
			title: {
	        text: '折线图堆叠'
	    },
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
	},
	//方法
	methods:{
		//请求数据
		getData(){
			let that = this;
			that.$axios('post',that.Global.PATH.queryguanliyuan,{},function(res){
  			if(res.code==200){
  				that.dataObj = res.data;
  			};
  		});
		}
	},
	//使用的组件
  components:{
		
	}
};
export default list;