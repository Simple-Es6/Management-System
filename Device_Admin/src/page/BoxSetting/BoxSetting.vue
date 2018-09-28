<template>
  <div>
  	<div class="boxset">
  		<div class="boxtitle">
  			听星歌获得黑珍珠规则
  		</div>
  		<div class="boxitem">
  			<el-radio-group v-model="dataObj.isEnable">
			    <el-radio :label="1">启用黑珍珠分配</el-radio>
			    <el-radio :label="0">禁用黑珍珠分配</el-radio>
			  </el-radio-group>
			  <p style="padding-left:60px;" class="textInfo h4Title">注：禁用黑珍珠分配时，音箱听星歌不会获得黑珍珠</p>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					默认黑珍珠数
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.allBlackPearl"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">每台音箱绑定后即获得黑珍珠数</p>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					听完所有星歌
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">每台每天听完所有星歌获得黑珍珠数</p>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					预计完成天数
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.estimatedDays"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">每台音箱获得所有黑珍珠的天数，未完即顺延</p>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					音箱听歌得黑珍珠
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.noComplete"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">听完设定值后，即算听完所有，可获得当天所有黑珍珠数</p>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					绑定上限数
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.bindingLimit"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">一个手机号最多绑定音箱数，0时为不限制</p>
  			</div>
  		</div>
  	</div>
  	<div class="boxset">
  		<div class="boxtitle">
  			预警设置
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textDanger h2Title">
  					第一次预警
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.firstWarning"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">黑珍珠释放达到预设值时，提醒！</p>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textDanger h2Title">
  					第二次预警
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.secondWarning"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">黑珍珠释放达到预设值时，提醒！</p>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textDanger h2Title">
  					第三次预警
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.thirdWarning"></el-input-number>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">黑珍珠释放达到预设值时，提醒！</p>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textDanger h2Title">
  					预警手机号
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input size="mini" v-model="dataObj.warningPhone"></el-input>
  			</div>
  			<div class="boxitemright">
  				<p class="textInfo h4Title">黑珍珠释放达到预设值时，提醒手机！</p>
  			</div>
  		</div>
  	</div>
  	<el-button type="primary" @click="subMit">提交</el-button>
  </div>
</template>
<script>
import list from './BoxSetting.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./BoxSetting.css");
</style>
