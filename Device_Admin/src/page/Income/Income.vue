<template>
  <div>
  	<div class="textMain h1Title">
  		我的收益:{{integral}}分贝
  	</div>
  	<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="create_times"
        label="时间"
      >
      </el-table-column>
      <el-table-column
        prop="xinxi"
        label="类型"
      >
      </el-table-column>
      <el-table-column
        prop="codeing"
        label="数量">
      </el-table-column>
    </el-table>
    <div class="pagebot">
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-sizes="[10, 20, 50, 100]"
	      :page-size="pageSize"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="total">
	    </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Income',
  data () {
    return {
      tableData:[],
      currentPage:1,
      total:0,
      pageSize:10,
      integral:0
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData(1);
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		handleSizeChange(val) {
	    console.log(`每页 ${val} 条`);
	    this.pageSize = val;
	    this.getData(this.currentPage);
	  },
	  handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
	    console.log(this.currentPage);
	    this.getData(val);
	  },
	  getData(page){
	  	let that = this;
			that.$axios('post',that.Global.PATH.queryzichan,{
				startRecord:page,
				pageSize:that.pageSize
			},function(res){
	  			if(res.code==200){
	  				that.tableData = res.data;
	  				that.total = res.count;
	  				that.integral = res.integral;
	  			};
			});
	  }
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./Income.css");
</style>
