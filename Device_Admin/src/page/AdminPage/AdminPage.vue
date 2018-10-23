<template>
  <div>
  	<div class="aditem">
  		<div class="list">
  			<div class="listTop">
  				专题数量
  			</div>
  			<div class="listBot">
  				<span>
  					今日:{{dataObj.tadayspecial}}
  				</span>
  				<span>
  					累计:{{dataObj.specialcount}}
  				</span>	
  			</div>
  		</div>
  		<div class="list">
  			<div class="listTop">
  				音乐数量
  			</div>
  			<div class="listBot">
  				<span>
  					今日:{{dataObj.tadaymusic}}
  				</span>
  				<span>
  					累计:{{dataObj.musiccount}}
  				</span>	
  			</div>
  		</div>
  		<div class="list">
  			<div class="listTop">
  				用户数量
  			</div>
  			<div class="listBot">
  				<span>
  					今日:{{dataObj.tadayuser}}
  				</span>
  				<span>
  					累计:{{dataObj.usercount}}
  				</span>	
  			</div>
  		</div>
  		<div class="list">
  			<div class="listTop">
  				音箱绑定数
  			</div>
  			<div class="listBot">
  				<span>
  					今日:{{dataObj.tadayxw_sn}}
  				</span>
  				<span>
  					累计:{{dataObj.xw_sncont}}
  				</span>
  			</div>
  		</div>
  	</div>
  	<div class="aditem">
  		<div ref="AdPieChart1" class="pitem"></div>
  		<div ref="AdPieChart2" class="pitem"></div>
  	</div>
		<div class="aditemtitle textMain h1Title">趋势分析</div>
		<div class="aditemtab">
			<el-radio-group v-model="timeType" size="mini">
	      	<el-radio-button label="1">今日</el-radio-button>
	      	<el-radio-button label="2">昨日</el-radio-button>
	      	<el-radio-button label="3">本周</el-radio-button>
	      	<el-radio-button label="4">本月</el-radio-button>
			</el-radio-group>
		</div>
		<div ref="AdAxis" class="axisCon"></div>
  </div>
</template>
<script>
import list from './AdminPage.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./AdminPage.css");
</style>
