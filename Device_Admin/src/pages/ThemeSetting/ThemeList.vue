<template>
  <div class="theme_setting">
  	<div class="comment">
          主题发布是否开启&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
    </div>
    <div class="check">
           主题是否需要审核&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <el-radio v-model="radio1" label="1">是</el-radio>
           <el-radio v-model="radio1" label="2">否</el-radio>
    </div>
    <div>
            用户每日发布主题最多
            <el-input-number v-model="num" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            主题内添加音乐最多
            <el-input-number v-model="num1" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            主题标题字数最多
            <el-input-number v-model="num2" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            主题音乐点亮是否开启&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-radio v-model="radio2" label="1">是</el-radio>
           <el-radio v-model="radio2" label="2">否</el-radio>
    </div>
    <div>
            主题音乐点亮最多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input-number v-model="num3" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <el-button class="btn">
        确定
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'ThemeList',
  data () {
    return {
      radio:'',
      radio1:'',
      num:1,
      num1:1,
      num2:1,
      num3:1,
      radio2:'',
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
