<template>
  <div class="myNav">
		<div class="myTitle">
			<img src="../../build/logo.png"/>
			<span>欢迎音乐人</span>
		</div>
		<div class="loginBox" v-if="login">
			<!--<div class="myOrder">订单信息</div>-->
			<div class="myPhone">{{login}}</div>
			<div @click="logOut" class="loginOut">退出</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
    	isLogin:true,
    	login:'',
    	phone:15600786662
    }
  },
  created:function(){
  	this.login = this.$store.state.login;
  	console.log(this.login)
  },
  methods:{
  	header(){
  		console.log(this.login);
  	},
  	logOut(){
  		console.log(this.$store);
  		this.$store.dispatch('loginOut');
  		this.$router.push({ path:'./login'});
  	}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.myNav{
		position: fixed;
		top:0;
		left:0;
		z-index: 998;
		display:flex;
		padding:0 30px;
		align-content: center;
		color:#FFFFFF;
		justify-content:space-between;
		width:100%;
		height:50px;
		background: #2E363F;
	}
	.myNav .myTitle{
		flex-shrink: 0;
		display:flex;
		align-items: center;
		justify-content: flex-start;
		width:30%;
		font-size: 16px;
		text-align:left;
		line-height: 50px;
	} 
	.myNav .myTitle img{
		margin-right: 30px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.myNav .loginBox{
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 50px;
	}
	.myNav .loginBox>div{
		cursor: pointer;
		padding: 0 30px;
		line-height: 50px;
	}
</style>
