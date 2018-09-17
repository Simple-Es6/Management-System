<template>
  <div class="accountManage">
    <el-row>
        <el-col :span="4" :offset="20">
            <el-button @click="dialogVisible= true" class="add">增加</el-button>
        </el-col>
    </el-row>
  	<el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="" label="姓名"></el-table-column>
            <el-table-column prop="" label="类别"></el-table-column>
            <el-table-column prop="" label="登录账号"></el-table-column>
            <el-table-column prop="" label="管理">
                <template slot-scope="scope">
                    <div>
                        <el-button size="mini">指定权限</el-button>
                        <el-button size="mini">修改</el-button>
                        <el-button size="mini">删除</el-button>
                    </div>
                </template>
            </el-table-column>      
    </el-table>
    <!-- 分页 -->
    <el-col :span="24" class="toolbar">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total"  :current-page.sync="currentPage" style="float:right;">
        </el-pagination>
    </el-col>
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
  </div>
</template>
<script>
export default {
  name: 'AccountManage',
  data () {
    return {
        tableData:[],
        total: 0,
        page: 1,
        everyPageCount: 10,
        currentPage: 1,
        dialogVisible: false,
        textarea:'',
        checkedCities:[],
        cities:[
            '音乐人-作词',
            '音乐人-作曲',
            '音乐人-编曲',
            '音乐人-演唱',
            '审核员'
        ]
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
</style>