let list =  {
  name: 'VoiceBox',
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
      	pageSize:10,
      	allXwcount:0,
      	bindedXwcount:0,
      	noBindXwcount:0
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
				obj.bindingPhone = '';
			};
  		that.$axios('post',that.Global.PATH.xwlist,obj,function(res){
	  		if(res.code==200){
	  			that.totals = res.data.count;
	  			that.allXwcount  = res.data.allXwcount;
	  			that.bindedXwcount = res.data.bindedXwcount;
	  			that.noBindXwcount = res.data.noBindXwcount;
	  			that.tableData = res.data.snList;
	  		};
  		});
		},
		searchbtn(){
			this.currentPage = 1;
			this.getData();
		},
		timeStartEnd(e){
			this.getData();
		},
		filterTag(value,row){
			return row.bindingState === value;
		},
		handleFilterChange(val){
			console.log(val);
			this.bindingState = val.order[0];
			this.getData();
		},
		//解绑/绑定
		bangding(val,index){
			let that = this,
			obj = {
				mac:val.mac
			};
			
			that.$axios('post',that.Global.PATH.updateUntied,obj,function(res){
	  		if(res.code==200){
	  			that.$message({
	          message:res.msg,
	          type: 'success'
	       });
	        val.bindingState = 0;
	        that.tableData.$set(index,val);
	  		}else{
	  			that.$message.error(res.msg);
	  		};
  		});
			
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