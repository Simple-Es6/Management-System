let list =  {
  	name: 'DetailsDay',
  	data () {
	    return {
	    	multipleSelection:[],
	      	timeStart:'1515514140000',
	      	searchStr:'',
	      	select:'1',
	      	showType:1,
	      	tableData:[],
	      	tableData3:[],
	      	totals:0,
	      	deviceName:'',
	      	allBp:0,
	      	currentPage:1,
	      	pageSize:10
	    }
  	},
  	//组件生成时执行事件
  	created:function(){
  		let type = this.$route.params.type;
  		switch (type){
  			case 1:
  				this.timeStart = this.Global.oTime(this.$route.params.daytime);
  				this.getData();
  				break;
  			case 2:
  				
  				break;
  			case 3:
  				this.timeStart = this.$route.params.daytime;
  				this.getData3();
  				break;
  		};
  		this.showType = type;
  		
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		getData(){
			let that = this,
			obj = {
				pageNum:that.currentPage,
	  			pageSize:that.pageSize,
	  			allocationTime:that.timeStart,
			};
			if(that.select==1){
				obj.bindingPhone = that.searchStr;
				obj.snCode = '';
			}else{
				obj.snCode = that.searchStr;
				obj.bindingPhone = '';
			};
	  		that.$axios('post',that.Global.PATH.getSameDayBpDr,obj,function(res){
		  		if(res.code==200){
		  			that.totals = res.data.count;
		  			that.tableData = res.data.xwBpDetailVoList;
		  		};
	  		});
		},
		getData3(){
			let that = this,
			obj = {
				pageNum:that.currentPage,
	  			pageSize:that.pageSize,
	  			mac:that.timeStart,
	  			userName:that.searchStr
			};
	  		that.$axios('post',that.Global.PATH.getBpByMac,obj,function(res){
		  		if(res.code==200){
		  			that.allBp = res.data.allBp;
		  			that.deviceName = res.data.deviceName;
		  			that.totals = res.data.count;
		  			that.tableData3 = res.data.xwBpDetailVoList;
		  		};
	  		});
		},
		searchbtn(){
			this.currentPage = 1;
			this.getData();
		},
		timeStartEnd(e){
			console.log(e);
			this.getData();
		},
		filterTag(value,row){
			return row.isComplete === value;
		},
		handleFilterChange(val){
			console.log(val);
			this.isComplete = val.order[0];
			this.getData();
		},
	  	//页面数变更
	  	handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	        this.pageSize = val;
	        this.getData();
	    },
	    handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	        this.currentPage = val;
	        switch (this.showType){
	        	case 1:
	        		this.getData();
	        		break;
	        	case 2:
	        		break;
	        	case 3:
	        		this.getData3();
	        		break;
	        }
	        this.getData();
	    }
	},
	//使用的组件
  	components:{
		
	}
};
export default list;