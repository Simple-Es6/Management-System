let list =  {
  name: 'BlackPearl',
  data () {
    return {
    		radioType:3,
      	timeStart:'',
      	searchStr:'',
      	select:'1',
      	tableData:[],
      	tableData2:[],
      	tableData3:[],
      	totals:0,
      	currentPage:1,
      	pageSize:10,
      	allBp:0  
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData();
  	this.getData3();
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		//获取黑珍珠明细
		getData(){
			let that = this,
			obj = {
				pageNum:that.currentPage,
  			pageSize:that.pageSize,
  			startTime:that.timeStart[0]||'',
  			endTime:that.timeStart[1]||''
			};
  		that.$axios('post',that.Global.PATH.getBpDr,obj,function(res){
	  		if(res.code==200){
	  			that.totals = res.data.count;
	  			that.allBp = res.data.allBp;
	  			that.tableData = res.data.bpDetailVoList;
	  		};
  		});
		},
		//获取音箱排行
		getData3(){
			let that = this,
			obj = {
				pageNum:that.currentPage,
  			pageSize:that.pageSize,
  			startTime:'',
  			endTime:'',
			};
			if(that.select==1){
				obj.userName = that.searchStr;
				obj.snCode = '';
			}else{
				obj.snCode = that.searchStr;
				obj.userName = '';
			};
  		that.$axios('post',that.Global.PATH.getXwLeaderboard,obj,function(res){
	  		if(res.code==200){
	  			that.totals = res.data.count;
	  			that.tableData3 = res.data.xwSnList;
	  		};
  		});
		},
		goDetails(val,type){
			this.$router.push({name:'DetailsDay',params:{
					daytime:val,
					type:type
				}
			});
		},
		changeRadio(val){
			let that = this;
			this.currentPage = 1;
			console.log(val)
			switch (val){
				case '1':
					that.getData();
					break;
				case '2':
					//that.getData1();
					break;
				case '3':
					that.getData3();
					break;
			}
		},
		searchbtn(){
			
		},
		timeStartEnd(e){
			console.log(e);
		},
		filterTag(value,row){
			return row.orderStatus === value;
		},
		handleFilterChange(val){
			console.log(val)
		},
		//全选
  	handleSelectionChange(val){
      this.multipleSelection = val;
   	},
   	//反选
  	invertselect(rows){
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        };
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
        this.getData();
    }
	},
	//使用的组件
  	components:{
		
	}
};
export default list;