<template>
  <div id="app">
  	<!--<keep-alive>
    	<router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created:function(){
		let login = this.$store.state.login||sessionStorage.getItem('mwladlogin');
		if(login){
				this.login = login;
				this.phone = this.$store.state.user_name||sessionStorage.getItem('mwladname');
		}else{
			this.$router.replace({ name:'Login'});
			};
	},
  watch: {
		$route(to, from) {
			let power = this.$store.state.login||sessionStorage.getItem('mwladlogin');
			if(to.meta.power!=power&&to.meta.power!=99){
				this.$store.dispatch('loginOut');
				this.$router.replace({name:'Login'});
			};
		}
	}

}
</script>

<style>
*{
	margin: 0;
	box-sizing: border-box;
}
input{
	display: none;
}
body{
	width: 100%;
	height: 100%;
	 -webkit-overflow-scrolling : touch;
	-webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
}
#app {
	width: 100%;
	min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.avatar-uploader .el-upload {
	width: 100%;
	height: 160px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
	border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width:100%;
  height:160px;
  line-height:160px;
  text-align: center;
}
.avatar {
  width:100%;
  height:160px;
  display: block;
}
.textInfo{
	color: #909399;
}
.textMain{
	color: #303133;
}
.textRule{
	color: #606266;
}
.textTip{
	color: #C0C4CC;
}
.textDanger{
	color: #F56C6C;
}
.textWarning{
	color: #E6A23C;
}
.textSuccess{
	color: #67C23A;
}
.textBlue{
	color: #409EFF;
}
.borderOne{
	color: #DCDFE6;
}
.borderTwo{
	color: #E4E7ED;
}
.borderThree{
	color: #EBEEF5;
}
.borderFour{
	color: #F2F6FC;
}
.h0Title{
	font-size: 24px;
}
.h1Title{
	font-size: 18px;
}
.h2Title{
	font-size: 16px;
}
.h3Title{
	font-size: 14px;
}
.h4Title{
	font-size: 12px;
}
.textCenter{
	text-align: center;
}
.textLeft{
	text-align: left;
}
.textRight{
	text-align: right;
}
h1,h2,h3,h4,h5,h6{
	font-weight: normal;
}
.el-table .cell{
	text-align: center;
}
.el-radio-button:focus:not(.is-focus):not(:active){
	box-shadow: -1px 0 0 0 #fff!important;
	-webkit-box-shadow: -1px 0 0 0 #fff!important;
}
.el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
    -webkit-box-shadow: 0 0 2px 2px #fff!important;
    box-shadow: 0 0 2px 2px #fff!important;
}
</style>
