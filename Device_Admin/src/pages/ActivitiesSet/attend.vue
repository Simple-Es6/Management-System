<template>
  <div class="attend">
  	<el-row>
        <el-col>
            <el-radio-group v-model="radio3" @change="changePage">
                <el-radio-button label="0">规则设置</el-radio-button>
                <el-radio-button label="1" @click="signIn">签到统计</el-radio-button>
            </el-radio-group>
        </el-col>
    </el-row>
      <div class="rules" v-show="downIcon">
            <div class="head">
                <div>
                    设置签到<br>
                    注意：请勿频繁修改“签到”的设置；正确设置后再开启“签到”功能。
                </div>
                <div>
                    <el-switch v-model="value2" active-color="#999" inactive-color="#000" style="margin-top:40px;" active-text="启用"
        inactive-text="未启用"></el-switch>
                </div>
            </div>
            <div class="container">
                <el-form :inline="true" :v-model="form">
                    <el-form-item label="活动名称：">
                        <el-input v-model="form.activeName" placeholder="请输入内容" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="活动时间：" >
                        <el-date-picker  v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:500px;" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="分享文案：">
                        <el-input v-model="form.sharingCopy" placeholder="请输入内容" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="活动说明：">
                        <el-input v-model="form.activeDescription" placeholder="请输入内容" style="width:500px;" type="textarea"  ></el-input>
                    </el-form-item>
                    <el-form-item label="签到奖励：" style="width:100%;">
                        <el-radio-group v-model="form.rewardType">
                            <el-radio :label="0">分贝</el-radio>
                            <el-radio :label="1">黑珍珠</el-radio>
                        </el-radio-group>
                        
                    </el-form-item>
                    <el-form-item label="签到方式：" style="width:100%;">
                        <el-radio-group v-model="form.siType">
                            <el-radio :label="0">登录APP</el-radio>
                            <el-radio :label="1">听完星歌</el-radio>
                        </el-radio-group>
                        
                    </el-form-item>
                    <hr>
                    <el-form-item style="margin-top:20px;">
                        <span>
                            设置连续签到：
                        </span>
                        <el-button @click="add">
                            增加一条
                        </el-button>
                        <div>
                            每日签到：
                            <ul v-for="(val,index) in list">
                                <li><el-input v-model="val.key"  style="display:inline-block; width:50px;"></el-input>&nbsp;&nbsp;天，送&nbsp;&nbsp;<el-input-number v-model="val.value"></el-input-number>&nbsp;&nbsp;个&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button @click="del(index)">删除</el-button></li>
                            </ul>
                        </div>
                    </el-form-item>
                    <br>
                    <el-form-item style="display:flex; justify-content: center;">
                        <el-button @click="save">
                            保存
                        </el-button>
                    </el-form-item>
                </el-form>
            </div> 
      </div>
      <div class="statistics" v-show="!downIcon">
          <div class="right">
                <span>签到总分贝{{data.allDecibel}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>签到总人数{{data.userCount}}</span>
          </div>
          <el-table :data="tableData">
              <el-table-column prop="picUrl" label="头像" width="80">
                     <template slot-scope="scope">
                        <img  :src="scope.row.picUrl" alt="" style="width: 50px;height: 50px;border-radius:50%;">
                    </template>
              </el-table-column>
              <el-table-column prop="nickname" label="粉丝"></el-table-column>
              <el-table-column prop="firstTime" label="第一次签到"></el-table-column>
              <el-table-column prop="lastTime" label="最后一次"></el-table-column>
              <el-table-column prop="goinNumber" label="累计参加次数"></el-table-column>
              <el-table-column prop="currentContinuousDays" label="连续签到"></el-table-column>
              <el-table-column prop="historyMaxContinuousDays" label="历史最高天数"></el-table-column>
              <el-table-column prop="allDecibel" label="奖励总分贝"></el-table-column>
          </el-table>
          <!-- 分页 -->
            <el-col :span="24" class="toolbar" style="margin-top:20px;">
                <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;">
                </el-pagination>
            </el-col> 
      </div>
       
  </div>
</template>
<script>
import list from './attend';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.attend .head{
    width:100%;
    height:100px;
    border:1px solid #666;
    justify-content: space-between;
    display:flex;
    margin-top:30px;
    line-height:40px;
    padding:0 20px;
    background:#DCDFE6;
    border-radius:7px;
}
.attend .container{
    margin-top:30px;
    padding:20px;
    border:1px solid #666;
    background:#DCDFE6;
    border-radius:7px;
}
.attend li{
    list-style: none;
}
.attend .statistics .right{
    display:flex;
    justify-content: flex-end;
    margin:20px 0;
}
</style>
