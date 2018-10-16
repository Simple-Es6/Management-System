<template>
  <div class="attend">
  	<el-dialog
		  title="添加周期规则"
		  :visible.sync="dialogVisible"
		  width="20%"
		  :before-close="handleClose">
		  <div class="dialogitem">
		  	<p>赠送{{form.rewardType==0?'分贝':'黑珍珠'}}数</p>
	      <el-input-number size="mini" v-model="dialogReward"></el-input-number>
		  </div>
		  <div class="dialogitem">
		  	<p>当天背景图</p>
		  	<div class="avatar-uploader">
				 	<label for="avatar2" @click="changIndex(-1)">
				 		<i v-if="!dialogPic" class="el-icon-plus avatar-uploader-icon"></i>
				 		<img v-if="dialogPic" :src="dialogPic" class="avatar">
				 	</label>
				</div>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
		    <el-button size="mini" type="primary" @click="addSave">确 定</el-button>
		  </span>
		</el-dialog>
  	<input @change="upLoadStart($event)" :disabled="isUp" id="avatar2" accept="image/jpeg,image/png" class="avatar-img" type="file"  />
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
                    <el-switch  @change="disenbleAct" v-model="value2" active-color="#13ce66" inactive-color="#ff4949" style="margin-top:40px;" active-text="启用"
        inactive-text="未启用"></el-switch>
                </div>
            </div>
            <div class="container">
            	<div class="bg" v-show="!value2"></div>
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
	                    <el-button size="mini" @click="add">
	                        增加一条
	                    </el-button>
	                    <div class="meiri">
	                       	<div style="margin-right:30px;">
	                       		累计签到:
	                       	</div>
	                        <ul>
	                            <li class="ulli" v-for="(val,index) in list" :key="index">
	                            	<div>
	                            		<el-input size="mini" :disabled="true" v-model="val.cycleDays"  style="display:inline-block; width:50px;"></el-input>&nbsp;&nbsp;&nbsp;天
	                            	</div>
	                            	<div class="liitem" @click="changIndex(index)">
	                            		送&nbsp;&nbsp;&nbsp;<el-input-number   @change="sicrsave(val.pic,index)" size="mini" v-model="val.reward"></el-input-number>&nbsp;&nbsp;&nbsp;个{{form.rewardType==0?'分贝':'黑珍珠'}}
	                            	</div>
	                            	<div>
	                            		<div class="avatar-uploader">
																	 	<label for="avatar2" @click="changIndex(index)">
																	 		<i v-if="!val.pic" class="el-icon-plus avatar-uploader-icon"></i>
																	 		<img v-if="val.pic" :src="val.pic" class="avatar">
																	 	</label>
																	</div>
	                            	</div>
	                            	<div>
	                            		<el-button size="mini" v-show="index == list.length-1" @click="del(val,index)">删除</el-button>
	                            	</div>
	                            </li>
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
              <el-table-column  label="第一次签到">
					      <template slot-scope="scope">{{Global.oTime(scope.row.firstTime)}}</template>
              </el-table-column>
              <el-table-column  label="最后一次">
					      <template slot-scope="scope">{{Global.oTime(scope.row.lastTime)}}</template>
              </el-table-column>
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
.dialogitem{
	padding-bottom:12px;
	display: flex;
	justify-content:flex-start;
	align-items: center;
}
.dialogitem p{
	min-width: 100px;
}
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
.meiri{
	width:720px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	
}
.attend .container{
		position: relative;
    margin-top:30px;
    padding:20px;
    border:1px solid #666;
    background:#DCDFE6;
    border-radius:7px;
}
.attend .container .bg{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 6;
	width: 100%;
	height: 100%;
	border-radius:7px;
	background-color: rgba(0,0,0,0.5);
}
.attend li{
	border-bottom:1px dashed #8C939D;
	padding:10px 0;
	display: flex;
	justify-content:flex-start;
	align-items: center;
  list-style: none;
}
.attend .liitem{
	padding-left:20px;
	min-width:280px;
}
.attend .statistics .right{
    display:flex;
    justify-content: flex-end;
    margin:20px 0;
}
.avatar-uploader{
	width:100px;
	height:100px;
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
}
.avatar-uploader:hover{
	border: 1px dashed #409EFF;
}
.avatar-uploader:hover i{
	color: #409EFF;
}
.avatar-uploader label{
	display: block;
	width: 100%;
	height: 100%;
	cursor: pointer;
}
.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width:100%;
	height:100%;
	line-height:100px !important;
	text-align: center;
}
.avatar {
    width:100%;
  	height:100%;
  	object-fit:contain;
  	display:block;
}
</style>
