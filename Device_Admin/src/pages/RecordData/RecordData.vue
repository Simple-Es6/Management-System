<template>
  <div>
  	<div class="aditemtitle textMain h1Title">趋势分析</div>
		<div class="aditemtab">
			<el-radio-group v-model="timeType" size="mini">
	      	<el-radio-button label="1">今日</el-radio-button>
	      	<el-radio-button label="2">昨日</el-radio-button>
	      	<el-radio-button label="3">本周</el-radio-button>
	      	<el-radio-button label="4">本月</el-radio-button>
			</el-radio-group>
		</div>
		<div ref="AdAxis" class="axisCon">
			
		</div>
  </div>
</template>
<script>
import list from "./RecordData.js";
export default list;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./RecordData.css");
</style>
