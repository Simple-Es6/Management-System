<template>
  <div>
  	<div class="incomeitem">
  		<span class="h1Title textMain">我的收益</span>
  		<span class="textInfo h3Title">总收益折合:600 CNY</span>
  	</div>
  	<div class="incomeitem">
  		<div class="list">
				<p class="textMain h2Title">黑珍珠</p>
				<p class="textMain h1Title">{{assets_bp}}</p>
				<el-button size="mini">提    现</el-button>
  		</div>
  		<div class="list">
				<p class="textMain h2Title">分贝</p>
				<p class="textMain h1Title">{{integral}}</p>
				<el-button size="mini">兑    换</el-button>
  		</div>
  	</div>
  	<div class="incomeitem">
  		<div class="axisleft">
  			<div class="textMain h2Title">
  				昨日收益
  			</div>
  			<div class="textMain h2Title">
  				黑珍珠:{{zuoassets_bp}}
  			</div>
  			<div class="textMain h2Title">
  				笔数:0
  			</div>
  			<div class="textMain h2Title">
  				分贝:{{zuointegral}}
  			</div>
  			<div class="textMain h2Title">
  				笔数:0
  			</div>
  		</div>
  		<div class="axisCon" >
  			<div class="axisConTop">
  				<el-radio-group v-model="radioDay" @change="dayChange" size="mini">
			      <el-radio-button label="7">7天</el-radio-button>
			      <el-radio-button label="30">30天</el-radio-button>
			    </el-radio-group>
  			</div>
  			<div ref="incomeitemaxis" class="axisConBot">
  				
  			</div>
  		</div>
  	</div>
  	<div class="incomeitem">
  		<span class="textMain h1Title">我的收益</span>
  	</div>
  	<div class="incomeitem">
	    <el-tabs v-model="radioType" >
    		<el-tab-pane label="全部" name="0">
    			<el-table
			      :data="tableData1"
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
				      @size-change="handleSizeChange1"
				      @current-change="handleCurrentChange1"
				      :current-page="currentPage1"
				      :page-sizes="[10, 20, 50, 100]"
				      :page-size="pageSize1"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="total1">
				    </el-pagination>
			    </div>
    		</el-tab-pane>
		    <el-tab-pane label="分贝" name="1">
		    	<el-table
			      :data="tableData2"
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
				      @size-change="handleSizeChange2"
				      @current-change="handleCurrentChange2"
				      :current-page="currentPage2"
				      :page-sizes="[10, 20, 50, 100]"
				      :page-size="pageSize2"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="total2">
				    </el-pagination>
			    </div>
		    </el-tab-pane>
		    <el-tab-pane label="黑珍珠" name="2">
		    	<el-table
			      :data="tableData3"
			      style="width: 100%">
			      <el-table-column
			        label="时间"
			      >
							<template slot-scope="scope">{{Global.oTime(scope.row.create_time)}}</template>
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
				      @size-change="handleSizeChange3"
				      @current-change="handleCurrentChange3"
				      :current-page="currentPage3"
				      :page-sizes="[10, 20, 50, 100]"
				      :page-size="pageSize3"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="total3">
				    </el-pagination>
			    </div>
		    </el-tab-pane>
		  </el-tabs>
  	</div>
  	
  </div>
</template>
<script>
import list from './Income.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("./Income.css");
</style>
