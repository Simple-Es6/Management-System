<template>
  <div>
  	<div class="incomeitem">
  		<span class="h1Title textMain">我的收益</span>
  		<span class="textInfo h3Title">总收益折合:600 CNY</span>
  	</div>
  	<div class="incomeitem">
  		<div class="list">
				<p class="textMain h2Title">黑珍珠</p>
				<p class="textMain h1Title">300000</p>
				<el-button size="mini">提    现</el-button>
  		</div>
  		<div class="list">
				<p class="textMain h2Title">分贝</p>
				<p class="textMain h1Title">300000</p>
				<el-button size="mini">兑    换</el-button>
  		</div>
  	</div>
  	<div class="incomeitem">
  		<span class="textMain h1Title">我的收益</span>
  		<el-radio-group v-model="radioType" size="mini">
	      <el-radio-button label="0">全部</el-radio-button>
	      <el-radio-button label="1">黑珍珠</el-radio-button>
	      <el-radio-button label="2">分贝</el-radio-button>
	    </el-radio-group>
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
    	radioType:0,
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
<style>
	@import url("./Income.css");
</style>
