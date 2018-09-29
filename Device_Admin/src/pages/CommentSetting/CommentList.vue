<template>
  <div class="comment_setting">
  	<div class="comment">
          是否开启用户评论&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
    </div>
    <div class="check">
           评论是否需要审核&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <el-radio v-model="radio1" label="1">是</el-radio>
           <el-radio v-model="radio1" label="2">否</el-radio>
    </div>
    <div>
            用户每日发布评论最多
            <el-input-number v-model="num" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            主题内评论最多
            <el-input-number v-model="num1" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            评论字数最多
            <el-input-number v-model="num2" :min="0" size="mini"></el-input-number>
            &nbsp;&nbsp;0表示无限制
    </div>
    <div>
            评论点赞是否开启&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-radio v-model="radio2" label="1">是</el-radio>
           <el-radio v-model="radio2" label="2">否</el-radio>
    </div>
    <div>
            评论过滤文字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input type="textarea" v-model="textarea" size="mini" style="width:300px; display:inline-block; vertical-align:middle;"></el-input>
    </div>
    <el-button class="btn">
        保存
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'CommentList',
  data () {
    return {
      radio:'',
      radio1:'',
      num:1,
      num1:1,
      num2:1,
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
.comment_setting div{
    margin:0px 0 00px 40px;
    height:50px;
    
}
.comment_setting .btn{
    display:flex; 
    justify-content: center;
    margin:10px auto;
    display:block;
}
</style>
