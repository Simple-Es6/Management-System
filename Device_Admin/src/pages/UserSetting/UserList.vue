<template>
  <div class="theme_setting">
  	<div class="comment">
          是否允许用户注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
    </div>
    <div class="check">
           注册后是否审核&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <el-radio v-model="radio1" label="1">是</el-radio>
           <el-radio v-model="radio1" label="2">否</el-radio>
    </div>
    <div>
            同一IP最大注册量
            <el-input-number v-model="num" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            同一IP最大登录量
            <el-input-number v-model="num1" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            用户名最大长度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="text" size="mini" style="width:300px;"></el-input>
    </div>
    <div>
            用户名最小长度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="text1" size="mini" style="width:300px; "></el-input>
    </div>
    <div style="margin-bottom:20px;">
            用户名禁止字符&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input type="textarea" v-model="textarea" size="mini" style="width:300px; display:inline-block; vertical-align:middle;"></el-input>
    </div>
    <div>
            用户名修改次数
            <el-input-number v-model="num2" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            用户名资料修改次数
            <el-input-number v-model="num3" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
     <div>
           小行星命名最小长度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="text2" size="mini" style="width:300px; "></el-input>
    </div>
    <div>
           小行星命名最大长度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="text3" size="mini" style="width:300px; "></el-input>
    </div>
    
    <div>
            登录是否开启&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-radio v-model="radio3" label="1">是</el-radio>
           <el-radio v-model="radio3" label="2">否</el-radio>
    </div>
    <div>
            每日错误登录次数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input-number v-model="num4" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            每天注册数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input-number v-model="num5" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <el-button class="btn">
        确定
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'UserList',
  data () {
    return {
      radio:'',
      radio1:'',
      num:1,
      num1:1,
      num2:1,
      num3:1,
      num4:1,
      num5:1,
      radio2:'',
      radio3:'',
      text:'',
      text1:'',
      text2:'',
      text3:'',
      textarea:'',

    }
  },
  //组件生成时执行事件
  created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme_setting div{
    margin:0px 0 00px 40px;
    height:50px;
    
}
.theme_setting .btn{
    display:flex; 
    justify-content: center;
    margin:10px auto;
    display:block;
}
</style>
