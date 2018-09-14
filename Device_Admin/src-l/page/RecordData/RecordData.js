let list = {
  	name: 'RecordData',
  	data () {
    	return {
    		timesdata:'',
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
	},
	//方法
	methods:{
		
	},
	//使用的组件
  	components:{
		
	}
};
export default list;