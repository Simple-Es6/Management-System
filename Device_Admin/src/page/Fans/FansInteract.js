let list =  {
  name: 'FansInteract',
  data () {
    return {
    		radioDialog:1,
    		dialogNum:1,
    		dialogType:1,
				dialogTableVisible:true,    		
      	timeStart:[],
      	searchStr:'',
      	select:'1',
      	tableData:[],
      	isComplete:'',
      	totals:0,
      	currentPage:1,
      	pageSize:10
      
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData();
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		onReward(val,index){
			this.dialogTableVisible = true;
		},
		getData(){
			let that = this,
			obj = {
				startRecord:that.currentPage,
				pageSize:that.pageSize
  			//startTime:that.timeStart[0]||'',
  			//endTime:that.timeStart[1]||'',
  			//isComplete:that.isComplete
			};
			/*if(that.select==1){
				obj.userName = that.searchStr;
				obj.snCode = '';
			}else{
				obj.snCode = that.searchStr;
				obj.userName = '';
			};*/
  		that.$axios('post',that.Global.PATH.queryfensilist,obj,function(res){
	  		if(res.code==200){
	  			that.totals = res.data.count;
	  			that.tableData = res.data.prList;
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