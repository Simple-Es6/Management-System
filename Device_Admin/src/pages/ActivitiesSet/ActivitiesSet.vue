<template>
  <div class="activitiesSet">
  	<h1>
      营销玩法&nbsp;&nbsp;<span class="title">吸粉老客带新客，提高下单转化率</span>
    </h1>
    <el-row :gutter="40">
      <el-col :span="8">
        <div class="list">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <p>抢购活动</p>
            <p>拼手速抢购引导用户</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="list">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <p>每日签到</p>
            <p>每日签到，提升人气获得奖励</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="list">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <p>幸运大转盘</p>
            <p>幸福日离你越来越近</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="list">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <p>邀请</p>
            <p>邀请新人注册的奖励</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="list" @click="dialogVisible = true">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <p>神秘歌手猜猜猜</p>
            <p>为喜欢的音乐人投票拉粉</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="list">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <p>红包</p>
            <p>固定红包、随机红包</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
        <el-row :gutter="20">
          <el-col :span="14">
            <div class="mysterious"></div>
          </el-col>
          <el-col :span="10" class="mysterious">
            
          </el-col>
        </el-row>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dialogVisible: false
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
		handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activitiesSet h1{
  color:orange;
}
.activitiesSet .title{
  font-size:20px;
  color:#000;
}
.activitiesSet .el-row{
  margin-top:20px;
}
.activitiesSet .list{
  border:1px solid #000;
  margin-bottom:30px;
  border-radius:8px;
  height:100px;
  display:flex;
  justify-content: space-between;
}
.activitiesSet .list div:nth-child(1){
  width:80px;
  height:80px;
  margin:10px;
  border:1px solid #000;
}
.activitiesSet .list div:nth-child(1) img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.activitiesSet .list div:nth-child(2){
  margin-right:40px;
}
.activitiesSet .list div:nth-child(2) p:nth-child(1){
   font-size:20px;
   line-height:53px;
}
.activitiesSet .mysterious{
  border:1px solid #000;
  border-radius:7px;

}
</style>