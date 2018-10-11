<template>
  <div class="accountManage">
    <el-row>
        
        <el-col :span="8" :offset="8">
            <el-input placeholder="输入歌曲名称或音乐人名称" v-model="selectInput"  class="input-with-select" @keyup.enter.native="search">
                <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <!-- <el-col :span="4" :offset="4">
            <el-button @click="dialogVisible= true" class="add">增加</el-button>
        </el-col> -->
    </el-row>
  	<el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="nickname" label="姓名"></el-table-column>
            <el-table-column prop="xinxi" label="类别"></el-table-column>
            <el-table-column prop="user_name" label="登录账号"></el-table-column>
            <el-table-column prop="" label="管理">
                <template slot-scope="scope" >
                    <div>
                        <el-button size="mini" @click="permissions(scope.row)">指定权限</el-button>
                        <!-- <el-button size="mini">修改</el-button>
                        <el-button size="mini">删除</el-button> -->
                    </div>
                </template>
            </el-table-column>      
    </el-table>
    <!-- 分页 -->
    <el-col :span="24" class="toolbar" style="margin-top:20px;">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="data1count" style="float:right;">
        </el-pagination>
    </el-col>
    <!-- 添加用户 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible">
        <span>
            名称：
                <el-input type="text" :rows="2" placeholder="请输入内容" class="textarea"></el-input>
            登录手机号：
                <el-input type="text" :rows="2" placeholder="请输入内容" class="textarea"></el-input>
            类别:
                <el-checkbox-group v-model="checkedCities" class="textarea">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
    <!-- 指定权限 -->
    <el-dialog title="指定权限" :visible.sync="dialogVisible1">
        <span>
            <span v-for="(val,index) in arr">
                <el-radio v-model="radio" :label="index+1" :key="index+1" :val="val">{{val}}</el-radio><br>
            </span>
            <el-button @click="dialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="permissionsConfirm">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'AccountManage',
  data () {
    return {
        tableData:[],
        page: 1,
        everyPageCount: 10,
        currentPage: 1,
        data1count: 0,
        dialogVisible: false,
        dialogVisible1: false,
        textarea:'',
        checkedCities:[],
        cities:[
            '音乐人-作词',
            '音乐人-作曲',
            '音乐人-编曲',
            '音乐人-演唱',
            '审核员'
        ],
        selectInput: '',
        musiciantype:'',
        radio:'',
        arr:[
            '普通人',
            '音乐人',
            '审核人',
            
        ],
        userid:'',
        xinxi:'',
        val:'',
    }
  },
  //组件生成时执行事件
    created:function(){
        this.getData(1);
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
        getData(num){
            let _this = this;
            let params={
                nickname:_this.selectInput,
                startRecord:num,
                pageSize:_this.everyPageCount,
            };
            _this.$axios('post', _this.Global.PATH1.queryuserzhanghulist, params, res => {
                if (res.code == 200) {
                    _this.tableData = res.data1;
                    _this.data1count = res.data1count;
                }
            });
        },
		handleSizeChange(val) {
            this.everyPageCount = val;
           
        },
        handleCurrentChange(val) {
            this.getData(val);
        },
        confirm(){
            let _this=this;
            _this.dialogVisible = false;
        },
        search() {
            if (this.selectInput == '') { return false };
            this.getData(1);
        },
        permissions(row){
            this.dialogVisible1= true;
            this.userid=row.userid;
        },
        permissionsConfirm(){
            let _this=this;
            _this.dialogVisible1= false;
            let params={
               musiciantype:_this.radio,
               userid:_this.userid,
            };
            _this.$axios('post', _this.Global.PATH1.updateuserjuese, params, res => {
                if (res.code == 200) {
                    _this.xinxi=_this.val;
                    this.getData(1);
                }
            });
        }
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accountManage .add {
    margin-bottom:30px;
    display: flex;
    float:right;
}
.accountManage .textarea{
    margin:20px 0;
}
.accountManage ul{
    margin-bottom:30px;
}
.accountManage ul li{
    list-style: none;
    line-height:20px;
    cursor: pointer;
}
</style>