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
  name: 'App'
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
	/* position: fixed;
	top: 0;
	left: 0; */
	width: 100%;
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* overflow: scroll; */
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
</style>
