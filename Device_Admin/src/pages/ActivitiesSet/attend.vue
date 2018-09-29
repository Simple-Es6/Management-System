<template>
  <div class="attend">
  	<el-row>
          <el-col>
              <el-radio-group v-model="radio3" @change="changePage">
                    <el-radio-button label="0">规则设置</el-radio-button>
                    <el-radio-button label="1">签到统计</el-radio-button>
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
                        <el-input v-model="input" placeholder="请输入内容" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="活动时间：">
                        <el-date-picker  v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:500px;">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="分享文案：">
                        <el-input v-model="input" placeholder="请输入内容" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="活动说明：">
                        <el-input v-model="input" placeholder="请输入内容" style="width:500px;" type="textarea"  ></el-input>
                    </el-form-item>
                    <el-form-item label="签到奖励：" style="width:100%;">
                        <el-radio v-model="radio" label="1">分贝</el-radio>
                        <el-radio v-model="radio" label="2">黑珍珠</el-radio>
                    </el-form-item>
                    <el-form-item label="签到方式：" style="width:100%;">
                        <el-radio v-model="radio1" label="1">登录APP</el-radio>
                        <el-radio v-model="radio1" label="2">听完星歌</el-radio>
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
                <span>签到总分贝0000&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>签到总人数00000</span>
          </div>
          
          <el-table :data="tableData">
              <el-table-column prop="" label="头像"></el-table-column>
              <el-table-column prop="" label="粉丝"></el-table-column>
              <el-table-column prop="" label="第一次签到"></el-table-column>
              <el-table-column prop="" label="最后一次"></el-table-column>
              <el-table-column prop="" label="累计参加次数"></el-table-column>
              <el-table-column prop="" label="连续签到"></el-table-column>
              <el-table-column prop="" label="历史最高天数"></el-table-column>
              <el-table-column prop="" label="奖励总分贝"></el-table-column>
          </el-table>
      </div>
        
  </div>
</template>
<script>
export default {
  name: 'attend',
  data () {
    return {
      value2:true,
      input:'',
      value6:'',
      radio3:0,
      radio:'',
      radio1:'',
      form:{},
      list:[
          {key:'1',value:'28'},
          {key:'2',value:'48'},
          {key:'3',value:'88'},
          {key:'4',value:'168'},
          {key:'5',value:'248'},
          {key:'6',value:'388'},
          {key:'7',value:'528'},
      ],
      tableData:[],
      downIcon:true,
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
		add(){
            this.list.push({key:'15',value:'1000'});
        },
        save(){

        },
        changePage(){
            this.downIcon=!this.downIcon;
        },
        del(index){
            this.list.splice(index,1);
        }
	},
	//使用的组件
  components:{
		
	}
}
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
