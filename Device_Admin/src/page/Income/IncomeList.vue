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
			        label="排序"
			      >
			      	<template slot-scope="scope">{{scope.$index+1}}</template>

			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="头像">
			      	<template slot-scope="scope">
			      		<img class="avterImg" :src="scope.row.head_portrait" alt="" />
			      	</template>
			      </el-table-column>
			      <el-table-column
			        prop="nickname"
			        label="用户昵称"
			    	>
			      </el-table-column>
			      <el-table-column
			        prop="integral"
			        label="分贝数量"
			    	>
			      </el-table-column>
			      <el-table-column
			        label="操作"
			    	>
			    		<template slot-scope="scope">
			      		<el-button size="mini" @click="goDetails(scope.row,1)">详情</el-button>
			      	</template>
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
			        label="排序"
			      >
			      	<template slot-scope="scope">{{scope.$index+1}}</template>

			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="头像">
			      	<template slot-scope="scope">
			      		<img class="avterImg" :src="scope.row.head_portrait" alt="" />
			      	</template>
			      </el-table-column>
			      <el-table-column
			        prop="nickname"
			        label="用户昵称"
			    	>
			      </el-table-column>
			      <el-table-column
			        prop="assets_bp"
			        label="黑珍珠数量"
			    	>
			      </el-table-column>
			      <el-table-column
			        label="操作"
			    	>
			    		<template slot-scope="scope">
			      		<el-button size="mini" @click="goDetails(scope.row,2)">详情</el-button>
			      	</template>
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
  name: 'IncomeList',
  data () {
    return {
      activeName:'1',
      tableData1:[],
      pageSize1:10,
      total1:0,
      currentPage1:1,
      tableData2:[],
      pageSize2:10,
      total2:0,
      currentPage2:1
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData1();
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		goDetails(val,type){
			this.$router.push({name:'IncomeDetails',params:{
					userid:val.userid,
					username:val.nickname,
					type:type
				}		
      });
		},
		getData1(){
			let that = this,
			obj = {
				pageSize:10,
				startRecord:1
			};
			that.$axios('post',that.Global.PATH.queryuserProfit,obj,function(res){
				if(res.code==200){
					that.tableData1 = res.data1;
					that.total1 = res.data1count;
					that.tableData2 = res.data2;
					that.total2 = res.data2count;
				};
			});
		},
		getData(){
			let that = this,
					obj = {};
			if(that.activeName==1){
				obj = {
					pageSize:that.pageSize1,
					startRecord:that.currentPage1
				};
			}else{
				obj = {
					pageSize:that.pageSize2,
					startRecord:that.currentPage2
				};
			};
			that.$axios('post',that.Global.PATH.queryuserProfit,obj,function(res){
				if(that.activeName==1){
					that.tableData1 = res.data1;
					that.total1 = res.data1count;
				}else{
					that.tableData2 = res.data2;
					that.total2 = res.data2count;
				};
			});
		},
		handleSizeChange(val){
			if(this.activeName==1){
				this.pageSize1 = val;
			}else{
				this.pageSize2 = val;
			};
			this.getData();
		},
		handleCurrentChange(val){
			if(this.activeName==1){
				this.currentPage1 = val;
			}else{
				this.currentPage2 = val;
			};
			this.getData();
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
