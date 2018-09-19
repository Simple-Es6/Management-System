<template>
  <div class="detail">
  	<el-row :gutter="10">
      <el-col :span="6">
        <h1>神秘歌手猜猜猜</h1>
      </el-col>
      <el-col :span="4">
        <span>2018-9-10</span>
        至
        <span>2018-9-18</span>
      </el-col>
      <el-col :span="4">
        参与人数：<span>1111</span><br>
        投票总数：<span>2222</span>
      </el-col>
      <el-col :span="4">
        分贝投注总数：<span>3333</span><br>
        黑珍珠投注总数：<span>5555</span>
      </el-col>
      <el-col :span="6">
        <h1>本期收益：<span>99999</span></h1>
      </el-col>
    </el-row>
    <el-radio-group v-model="radio3" class="radio">
        <el-radio-button label="-1">详情列表</el-radio-button>
        <el-radio-button label="0">投票排行</el-radio-button>
        <el-radio-button label="1">投注排行</el-radio-button>
        <el-radio-button label="2">收益排行</el-radio-button>
    </el-radio-group>
    <el-table :data="tableData">
      <el-table-column prop="" label="投票时间" ></el-table-column>
      <el-table-column prop="" label="参与人" ></el-table-column>
      <el-table-column prop="" label="投注" ></el-table-column>
      <el-table-column prop="" label="赔率" ></el-table-column>
      <el-table-column prop="" label="收益" ></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-col :span="24" class="toolbar">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total"  :current-page.sync="currentPage" style="float:right;">
        </el-pagination>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      tableData:[],
      radio3:'',
      total: 0,
      page: 1,
      everyPageCount: 10,
      currentPage: 1,
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
        console.log('val', val)
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
<style scoped>
.detail .radio{
  margin:20px 0;
}
</style>
