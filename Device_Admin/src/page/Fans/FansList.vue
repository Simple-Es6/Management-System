<template>
  <div>
  	<div class="VoiceBox">
			<div class="textMain h0Title">
				粉丝列表
			</div>
			<div class="voicetime">
				<el-date-picker
					size="small"
					clearable
					@change="timeStartEnd"
		      v-model="timeStart"
		      type="daterange"
		      value-format="yyyy-MM-dd"
		      range-separator="-"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期">
		    </el-date-picker>
			</div>
			<div class="searchDiv">
				<el-input placeholder="请输入内容" size="small" @keyup.enter.native="searchbtn"  v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="手机号码" value="1"></el-option>
			      <el-option label="用户昵称" value="2"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search" @click="searchbtn">查询</el-button>
			  </el-input>
			</div>
		</div>
		<div class="dataDiv">
			<el-table :data="tableData" size="mini" style="width: 100%" >
        <el-table-column label="加入时间">
					<template slot-scope="scope">{{Global.oTime(scope.row.createTime)}}</template>
        </el-table-column>
        <el-table-column  
        	prop="" 
        	label="昵称" 	
        >
        </el-table-column>
   			<el-table-column  
        	prop="" 
        	label="关注时长" 	
        	sortable
        >
        </el-table-column>
        <el-table-column  
        	prop="" 
        	label="点赞量" 	
        	sortable
        >
        </el-table-column>
        <el-table-column  
        	prop="" 
        	label="分享量" 	
        	sortable
        >
        </el-table-column>
        <el-table-column  
        	prop="" 
        	label="评论量" 	
        	sortable
        >
        </el-table-column>
	    </el-table>
		</div>
		<div class="botAdmin">
			<div class="paginat">
				<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[10,100, 200, 300, 400]"
		      :page-size="pageSize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="totals">
		    </el-pagination>
			</div>
		</div>
  </div>
</template>
<script>
import list from './FansList.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./FansList.css");
</style>
