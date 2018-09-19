<template>
	<div>
		<div class="loginCon">
			<el-row type="flex"  justify="center">
				<el-col :span="9">
					<h1 style="text-align: center;">{{isLogin==0?'注册':'登录'}}</h1>
				</el-col>
			</el-row>
			<el-row  type="flex"  justify="center" :gutter="30">
				<el-col :span="9">
					<div class="h1Title textMain">
						手机号
					</div>
				</el-col>
			</el-row>
			<el-row style="margin-top: 10px;" type="flex"  justify="center" :gutter="30">
				<el-col :span="9">
					<el-input @focus="phoneFocus" @blur="phoneBlur" type="tel" maxlength="11" v-model="phone" placeholder="请输入手机号"></el-input>
				</el-col>
			</el-row>
			<el-row style="margin-top:0;" :gutter="30" type="flex"  justify="center" v-if="errorphone">
				<el-col :span="9" >
					<div v-if="errorphone" class="h3Title textDanger">手机号输入错误</div>
				</el-col>
			</el-row>
			<!-- <el-row  type="flex"  justify="center" :gutter="30">
				<el-col :span="9">
					<div class="h1Title textMain">
						验证码
					</div>
				</el-col>
			</el-row>
			<el-row style="margin-top: 10px;" type="flex"  justify="center" :gutter="30">
				<el-col :span="6">
					<el-input type="text" @focus="codeFocus"  v-model="ercode" placeholder="请输入验证码"></el-input>
				</el-col>
				<el-col :span="3" style="text-align: right;">
					<el-button @click="hqcode" :disabled="isDian" :class="{textTip:isDian}" type="text">{{times}}</el-button>
				</el-col>
			</el-row>
			<el-row style="margin-top:0;" type="flex" v-if="errorcode" :gutter="30"  justify="center">
				<el-col :span="9" >
					<div v-if="errorphone" class="h3Title textDanger">验证码输入错误</div>
				</el-col>
			</el-row> -->
			<el-row  type="flex"  justify="center" :gutter="30">
				<el-col :span="9">
					<div class="h1Title textMain">
						登录密码
					</div>
				</el-col>
			</el-row>
			<el-row style="margin-top: 10px;" type="flex"  justify="center" :gutter="30">
				<el-col :span="9">
					<el-input @focus="phoneFocus" @keyup.enter.native="submitClick"  @blur="phoneBlur" type="password" maxlength="11" v-model="password" placeholder="请输入密码"></el-input>
				</el-col>
			</el-row>
			<el-row style="margin-top:0;" :gutter="30" type="flex"  justify="center" v-if="errorpassword">
				<el-col :span="9" >
					<div v-if="errorpassword" class="h3Title textDanger">密码输入错误</div>
				</el-col>
			</el-row>
			<el-row style="margin-top: 60px;" type="flex" justify="center" :gutter="30">
				<el-col  :span="9">
			  	<el-button :loading="btnLoad" @click="submitClick" style="width: 100%;" type="success">登录</el-button>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Login',
		data() {
			return {
				isLogin:0,
				reg:/^(((19[0-9]{1})|(17[0-9]{1})|(16[0-9]{1})|(14[0-9]{1})|(13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
				phone:'',
				times:'获取验证码',
				ercode:'',
				password:'',
				timenum:60,
				btnLoad:false,
				isDian:false,
				errorphone:false,
				errorpassword:false,
				errorcode:false,
				msg: 'Welcome to Your Vue.js App'
			}
		},
		created:function(){
			let login = this.$route.params.type;
			console.log(login);
			this.isLogin = login;
		},
		methods: {
			phoneBlur() {
		    	if(this.phone!=''){
		    		if(this.reg.test(this.phone)){
							console.log(123); 			
		    		}else{
		    			this.errorphone = true;
		    		}
		    	}
		  	},
		  	codeFocus(){
		  		this.errorcode = false;
		  	},
		  	phoneFocus(){
		  		this.errorphone = false;
		  	},
		  	hqcode(){
		  		let that = this;
		  		that.isDian = true;
		  		that.times = that.timenum + ' s';
		  		that.timenum --;
		  		if(that.timenum<=0){
		  			that.isDian = false;
		  			that.times = '获取验证码';
		  		}else{
		  			setTimeout(function(){
		  				that.hqcode();
		  			},1000);
		  		}
		  	},
		  	submitClick(){
				let _this = this;
				if(_this.reg.test(_this.phone)){
					let params={
						user_name:this.phone,
						password:this.password
					};
					_this.$axios('post', _this.Global.PATH1.loginuser, params, res => {
						if (res.code == 200) {
							let obj ={
								type:res.data.musiciantype,
								phone:_this.phone
							};
							obj.type = 5;
							_this.$store.dispatch('loginState',obj);
							switch(obj.type){
								case 2:
								_this.$router.replace({path:'/home/Artist'});
								break;
								case 3:
								_this.$router.replace({path:'/home/artistCheck'});
								break;
								case 4:
								_this.$router.replace({path:'/home/planetinformation'});
								break;
								default:
								_this.$router.replace({path:'/home/AdminPage'});
								break;	
							}
						}else{
							alert(res.msg);
						};
					});
				}else{
					_this.errorphone;
				}
				
		  	}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.loginCon{
		margin-top: 130px;
	}
	.el-row{
		margin-top: 20px;
	}
	.el-col{
		line-height: 40px;
	}
</style>