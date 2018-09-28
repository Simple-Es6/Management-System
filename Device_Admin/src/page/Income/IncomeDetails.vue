<template>
  <div>
  	<el-tabs v-model="activeName">
	    <el-tab-pane label="分贝收益" name="1">
	    	<div class="tableList">
		    	<el-table
		    		size="mini"
			      :data="tableData1"
			      style="width: 100%">
			      <el-table-column
			        prop="create_times"
			        label="时间">
			      </el-table-column>
			      <el-table-column
			        prop="codeing"
			        label="数量"
			    	>
			      </el-table-column>
			      <el-table-column
			        prop="xinxi"
			        label="收益详情"
			    	>
			      </el-table-column>
			    </el-table>
	    	</div>
	    	<div class="tableList">
	    		<el-pagination
	    			size="mini"
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage1"
			      :page-sizes="[10, 20, 50, 100]"
			      :page-size="pageSize1"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="total1">
			    </el-pagination>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="黑珍珠收益" name="2">
	    	<div class="tableList">
		    	<el-table
		    		size="mini"
			      :data="tableData2"
			      style="width: 100%">
			      <el-table-column
			        prop="create_times"
			        label="时间">
			      </el-table-column>
			      <el-table-column
			        prop="codeing"
			        label="数量"
			    	>
			      </el-table-column>
			      <el-table-column
			        prop="xinxi"
			        label="收益详情"
			    	>
			      </el-table-column>
			    </el-table>
	    	</div>
	    	<div class="tableList">
	    		<el-pagination
	    			size="mini"
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage2"
			      :page-sizes="[10, 20, 50, 100]"
			      :page-size="pageSize2"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="total2">
			    </el-pagination>
	    	</div>	
	    </el-tab-pane>
	  </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'IncomeDetails',
  data () {
    return {
      activeName:'1',
      tableData1:[],
      pageSize1:10,
      total1:0,
      userid:'',
      currentPage1:1,
      tableData2:[],
      pageSize2:10,
      total2:0,
      currentPage2:1
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.activeName = `${this.$route.params.type}`||'1';
  	this.userid = this.$route.params.userid||'';
  	this.username = this.$route.params.username||'';
  	this.getData(1);
  	this.getData(2);
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		getData(type){
			let that = this,
					obj = {};
			if(type==1){
				obj = {
					type:1,
					pageSize:that.pageSize1,
					userid:that.userid,
					startRecord:that.currentPage1
				};
			}else{
				obj = {
					type:2,
					userid:that.userid,
					pageSize:that.pageSize2,
					startRecord:that.currentPage2
				};
			};
			that.$axios('post',that.Global.PATH.queryuserProfitxiangqing,obj,function(res){
				if(type==1){
					that.tableData1 = res.data;
					that.total1 = res.count;
				}else{
					that.tableData2 = res.data;
					that.total2 = res.count;
				};
			});
		},
		handleSizeChange(val){
			if(this.activeName==1){
				this.pageSize1 = val;
			}else{
				this.pageSize2 = val;
			};
			this.getData(this.activeName);
		},
		handleCurrentChange(val){
			if(this.activeName==1){
				this.currentPage1 = val;
			}else{
				this.currentPage2 = val;
			};
			this.getData(this.activeName);
		},
		
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.tableList{
		padding-bottom: 10px;
		width: 100%;
		height: auto;
	}
	.avterImg{
		width: 60px;
		height: 60px;
		object-fit: contain;
	}
</style>
