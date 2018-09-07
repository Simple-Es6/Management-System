let list =  {
  name: 'SnAdmin',
  data () {
    return {
    		multipleSelection:[],
      	timeStart:[],
      	searchStr:'',
      	select:'1',
      	tableData:[],
      	bindingState:'',
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
		getData(){
			let that = this,
			obj = {
				pageNum:that.currentPage,
  			pageSize:that.pageSize,
				startTime:that.timeStart[0]||'',
				endTime:that.timeStart[1]||'',
  			bindingState:that.bindingState
			};
			if(that.select==1){
				obj.bindingPhone = that.searchStr;
				obj.snCode = '';
			}else{
				obj.snCode = that.searchStr;
				obj.userName = '';
			};
  		that.$axios('post',that.Global.PATH.snlist,obj,function(res){
	  		if(res.code==200){
	  			that.totals = res.data.count;
	  			that.tableData = res.data.snList;
	  		};
  		});
		},
		searchbtn(){
			this.currentPage = 1;
			this.getData();
		},
		timeStartEnd(e){
			console.log(e);
		},
		filterTag(value,row){
			return row.bindingState === value;
		},
		handleFilterChange(val){
			console.log(val);
			this.bindingState = val.order[0];
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
      this.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    }
	},
	//使用的组件
  	components:{
		
	}
};
export default list;