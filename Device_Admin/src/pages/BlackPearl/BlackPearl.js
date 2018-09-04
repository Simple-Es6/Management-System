let list =  {
  name: 'BlackPearl',
  data () {
    return {
      	timeStart:'',
      	searchStr:'',
      	select:'1',
      	tableData:[],
      	totals:0,
      	currentPage:1,
      	pageSize:10
      
    }
  },
  //组件生成时执行事件
  created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
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
	    },
	    handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	    }
	},
	//使用的组件
  	components:{
		
	}
};
export default list;