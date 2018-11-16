<template>
  <div>
  	<div class="VoiceBox">
			<div class="textMain h0Title">
				粉丝互动
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
		        <el-table-column label="时间">
							<template slot-scope="scope">{{Global.oTime(scope.row.createTime)}}</template>
		        </el-table-column>
		        <el-table-column  
		        	prop="" 
		        	label="粉丝昵称" 	
		        >
		        </el-table-column>
		   			<el-table-column  
		        	prop="" 
		        	label="事件" 	
		
		        >
		       </el-table-column>
		        <el-table-column  
		        	prop="" 
		        	label="数量"
		        >
							<template slot-scope="scope">
								<el-button type="danger" size="mini" @click="onReward(scope.row,scope.$index)">打赏</el-button>
							</template>
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
		<el-dialog title="打赏" :visible.sync="dialogTableVisible">
		  <div class="dialogCon">
		  	<div class="dialogitem">
		  		<div class="litem">
		  			打赏金额:
		  		</div>
		  		<div class="ritem">
				  	<el-radio-group v-model="radioDialog">
					    <el-radio :label="1">100</el-radio>
					    <el-radio :label="2">200</el-radio>
					    <el-radio :label="3">300</el-radio>
					  </el-radio-group>
				  </div>
		  	</div>
				<div class="dialogitem">
		  		<div class="litem">
		  			其他金额:
		  		</div>
		  		<div class="ritem">
				  	<el-input-number size="mini" v-model="dialogNum" :min="0" :max="100000" label="描述文字"></el-input-number>
				  </div>
		  	</div>
		  	<div class="dialogitem">
		  		<div class="litem">
		  			打赏类型:
		  		</div>
		  		<div class="ritem">
				  	<el-radio-group v-model="dialogType">
					    <el-radio :label="1">打赏分贝</el-radio>
					    <el-radio :label="2">打赏黑珍珠</el-radio>
					  </el-radio-group>
				  </div>
		  	</div>
		  	<el-button  style="width: 100%;" size="small" @click="pullReward">打赏</el-button>
		  </div>
		</el-dialog>
  </div>
</template>
<script>
import list from './FansInteract.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./FansList.css");
</style>
