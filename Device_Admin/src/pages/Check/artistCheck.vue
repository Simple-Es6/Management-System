<template>
  <div class="acheck">
  	<el-row>
          <el-col :span="8">
            <el-radio-group v-model="radio3">
                <el-radio-button label="0">全部</el-radio-button>
                <el-radio-button label="1">待处理</el-radio-button>
                <el-radio-button label="2">已通过</el-radio-button>
                <el-radio-button label="3">已拒绝</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="8" class="btn">
                <el-radio v-model="radio" label="1">全部通过</el-radio>
                <el-radio v-model="radio" label="2">全部拒绝</el-radio>
          </el-col>
          <el-col :span="8">
                姓名
                <el-input placeholder="单行输入"  class="input-with-select" style="width:200px;" >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
          </el-col>
      </el-row>
       <el-table :data="tableData" stripe style="width: 100%" >
          <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="special_picture" label="封面" width="80">
                 <template slot-scope="scope">
                    <img  src="" alt="" style="width: 50px;height: 50px;">
                 </template>
            </el-table-column>
            <el-table-column prop="special_title" label="注册时间" width="180"></el-table-column>
            <el-table-column prop="music_count" label="音乐名称" width="120"></el-table-column>
            <el-table-column prop="create_times" label="所属专辑"></el-table-column>
            <el-table-column prop="status" label="姓名" ></el-table-column>
            <el-table-column prop="status" label="艺人名字" ></el-table-column>
            <el-table-column prop="status" label="身份证" ></el-table-column>
            <el-table-column prop="status" label="类型" ></el-table-column>
            <el-table-column prop="operate" label="操作" width="260" >
                <template slot-scope="scope">
                    <el-button size="mini" >详情</el-button>
                    <el-button size="mini" >通过</el-button>
                    <el-button size="mini">拒绝</el-button>
                </template>
            </el-table-column>
        
    </el-table>
    <el-col :span="24" class="toolbar">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;">
        </el-pagination>
    </el-col>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio3:'0',
      radio:'',
      tableData:[],
      total: 0,
      page: 1,
      everyPageCount: 10,
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
        this.everyPageCount = val

    },
    handleCurrentChange(val) {
        this.getData(val);
    },
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.acheck .btn{
    line-height:40px;
}
.el-radio-button:focus:not(.is-focus):not(:active){
    box-shadow: -1px 0 0 0 #fff!important;
    -webkit-box-shadow: -1px 0 0 0 #fff!important;
}
</style>
