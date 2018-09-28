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
          <div @click="attend">
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
    <el-dialog title="神秘歌手猜猜猜" :visible.sync="dialogVisible" width="75%" :before-close="handleClose">
        <el-row :gutter="20" class="contain">
          <el-col :span="14">
            <div class="mysterious">
              <h1>活动列表</h1>
              <template>
                <el-table :data="tableData" stripe style="width: 100%">
                  <el-table-column prop="beginTime" label="开始时间"></el-table-column>
                  <el-table-column prop="endTime" label="结束时间"></el-table-column>
                  <el-table-column prop="num" label="参与人数"></el-table-column>
                  <el-table-column prop="put" label="投入"></el-table-column>
                  <el-table-column prop="earnings" label="收益"></el-table-column>
                  <el-table-column  label="状态">
                    <template slot-scope="scope">
                      <el-button @click="go" type="text" size="small">详情</el-button>
                      <el-button type="text" size="small">已结束</el-button>
                    </template>
                   
                  </el-table-column>
                </el-table>
                <!-- 分页 -->
                <el-col :span="24" class="toolbar">
                    <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total"  :current-page.sync="currentPage" style="float:right;">
                    </el-pagination>
                </el-col>
              </template>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="mysterious">
              <h1>添加活动</h1>
                <div class="line">
                  起止时间：
                  <el-date-picker placeholder="起始时间" type="date" value-format="yyyy-MM-dd" v-model="startTime" size="mini" style="width:150px;" :picker-options="pickerOptions0"></el-date-picker>
                  <el-date-picker placeholder="结束时间" type="date" value-format="yyyy-MM-dd" v-model="endTime" size="mini" style="width:150px;" :picker-options="pickerOptions0"></el-date-picker>
                </div>
                <div class="line">
                   音乐人数：
                    <el-input v-model="input" placeholder="10~20人之间" style="width:300px;" size="mini"  type="number"></el-input>
                </div>
                <div class="line">
                    投票方式：
                  <el-radio v-model="radio" label="黑珍珠"></el-radio>
                  <el-radio v-model="radio" label="分贝"></el-radio>
                </div>
                <div class="line">
                   每次金额：
                  <el-input v-model="input1" placeholder="最低100" style="width:300px;" size="mini" type="number"></el-input>
                </div>
                <div class="bottom">
                  晋级模式：两人一组进行PK，获胜者进入下一轮PK，最近决出第一名，如最后由三位选手选出冠军
                </div>
                <div class="btn">
                  <!-- <el-button @click="cancel">取 消</el-button> -->
                  <el-button type="primary" @click="confirm">确 定</el-button>
                </div>
            </div>
            

          </el-col>
        </el-row>
        
    </el-dialog>

  </div>
</template>
<script>
export default {
  name: 'ActivitiesSet',
  data () {
    return {
      dialogVisible: false,
      tableData:[
        {
          beginTime:"2018-09-19 11:19",
          endTime:"ss",
          num:"3",
          put:"ss",
          earnings:"ee",
          
        }
      ],
      startTime:'',
      endTime:'',
      input:'',
      radio:'',
      input1:'',
      total: 1,
      page: 1,
      everyPageCount: 5,
      currentPage: 1,
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }, 
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
      },
      handleSizeChange(val) {
          // this.everyPageCount = val;
          // console.log('val', val)
      },
      handleCurrentChange(val) {
          //this.getData(val);
      },
      go(){
        this.$router.push('./detail');
      },
      cancel(){
        this.startTime='';
        this.endTime='';
        this.input='';
        this.radio='';
        this.input1='';
        this.dialogVisible = false;
      },
      confirm(){
        if( this.startTime=='') {this.$message('起始时间为空'); return false;}
        if( this.endTime=='') {this.$message('结束时间为空'); return false;}
        if( this.input<10||this.input>20) {this.$message('音乐人数为空'); return false;}
        if( this.radio=='') {this.$message('请选择投票方式'); return false;}
        if( this.input1<100) {this.$message('金额为空'); return false;}
              this.tableData.unshift({
                beginTime:this.startTime,
                endTime:this.endTime,
                num:this.input,
                put:this.radio,
                earnings:this.input1
              });
              
              this.total++;
              this.startTime='';
              this.endTime='';
              this.input='';
              this.radio='';
              this.input1='';
            //  this.dialogVisible = false;
            
        // }
        
      },
      attend(){
        this.$router.push('./attend');
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
  padding:20px 20px 40px;

}
.activitiesSet .contain{
  margin-bottom:20px;
}
.activitiesSet .line{
  margin-bottom:20px;
}
.activitiesSet .bottom{
  margin:40px 0 20px;
}
.activitiesSet .btn{
  display:flex;
  justify-content: flex-end;
}
</style>