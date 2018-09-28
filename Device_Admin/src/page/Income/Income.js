let list = {
  	name: 'Income',
  	data () {
	    return {
	    	radioType:0,
	    	radioDay:7,
	      	tableData1:[],
	      	currentPage1:1,
	      	total1:0,
	      	pageSize1:10,
	      	tableData2:[],
	      	currentPage2:1,
	      	total2:0,
	      	pageSize2:10,
	      	tableData3:[],
	      	currentPage3:1,
	      	total3:0,
	      	pageSize3:10,
	      	integral:0,
	      	assets_bp:0,
	      	zuoassets_bp:0,
	      	zuointegral:0,
	      	axisBack:[],
	      	axisTime:[],
	      	axisFen:[],
	      	mountedTrue:false
	    }
  	},
  	//组件生成时执行事件
  	created:function(){
  		this.getData1(1);
  		this.getData();
  		
	},
	//页面渲染完成事件
	mounted(){
		this.mountedTrue = true;
	},
	//方法
	methods:{
		changeData(){
			let that = this;
			this.myChart1 = this.$echarts.init(this.$refs.incomeitemaxis);
			this.myChart1.setOption({
				title: {
			        text: '收益趋势'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['黑珍珠','分贝']
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
			        data:that.axisTime
			    },
			    yAxis: {
			        type:'value'
			    },
			    series:[
			        {
			            name:'黑珍珠',
			            type:'line',
			            stack: '总量',
			            data:that.axisBack
			        },
			        {
			            name:'分贝',
			            type:'line',
			            stack: '总量',
			            data:that.axisFen
			        }
			    ]
			});
		},
		dayChange(val){
			this.getData1(1);
		},
		handleSizeChange1(val) {
	    	console.log(`每页 ${val} 条`);
	    	this.pageSize = val;
	    	this.getData(this.currentPage1);
	  	},
	  	handleCurrentChange1(val) {
	    	console.log(`当前页: ${val}`);
	    	console.log(this.currentPage1);
	    	this.getData(val);
	  	},
	  	handleSizeChange2(val) {
	    	console.log(`每页 ${val} 条`);
	    	this.pageSize = val;
	    	this.getData(this.currentPage2);
	  	},
	  	handleCurrentChange2(val) {
	    	console.log(`当前页: ${val}`);
	    	console.log(this.currentPage2);
	    	this.getData(val);
	  	},
	  	handleSizeChange3(val) {
	    	console.log(`每页 ${val} 条`);
	    	this.pageSize = val;
	    	this.getData(this.currentPage3);
	  	},
	  	handleCurrentChange3(val) {
	    	console.log(`当前页: ${val}`);
	    	console.log(this.currentPage3);
	    	this.getData(val);
	  	},
	  	getData(){
	  		let that = this,
	  		obj = {};
	  		if(that.radioType==0){
	  			obj.startRecord = that.currentPage1;
	  			obj.pageSize = that.pageSize1;
	  		}else if(that.radioType==1){
	  			obj.startRecord = that.currentPage2;
	  			obj.pageSize = that.pageSize2;
	  		}else{
	  			obj.startRecord = that.currentPage3;
	  			obj.pageSize = that.pageSize3;
	  		};
			that.$axios('post',that.Global.PATH.querymusicusershouyi,obj,function(res){
	  			if(res.code==200){
	  				if(that.radioType==0){
			  			that.tableData1 = res.data2;
			  			that.total1 = res.data2count;
			  		}else if(that.radioType==1){
			  			that.tableData2 = res.data2;
			  			that.total2 = res.data2count;
			  		}else{
			  			that.tableData3 = res.data3;
			  			that.total3 = res.data3count;
			  		};
			  		that.assets_bp = res.assets_bp;
	  				that.zuoassets_bp = res.zuoassets_bp;
	  				that.zuointegral = res.zuointegral;
	  				that.integral = res.integral;
	  			};
			});
	  	},
	  	getData1(type){
	  		let that = this;
			that.$axios('post',that.Global.PATH.queryzoushitu,{
				day:that.radioDay,
				type:type
			},function(res){
	  			if(res.code==200){
	  				that.clData(res.data,type);
	  				
	  			};
			});
	  	},
	  	clData(arr,type){
	  		if(arr.length<1){return false};
	  		let arr1 = [],
	  			arr2 = [];
	  		arr.forEach(function(val){
	  			arr1.unshift(val.income_decibel);
	  			arr2.unshift(val.times);
	  		});
	  		if(type==1){
	  			this.axisBack = arr1;
	  			this.axisTime = arr2;
	  			this.getData1(2);
	  		}else{
	  			this.axisFen = arr1;
		 		if(this.mountedTrue){
					this.changeData();
				}else{
					this.changeData();
				};
	  		};
	  	}
	},
	//使用的组件
  	components:{
		
	}
};
export default list;