<template>
  <div class="tcheck">
  	<el-row>
          <el-col :span="8">
            <el-radio-group v-model="radio1">
               
                <el-radio-button label="1">艺人审核</el-radio-button>
                <el-radio-button label="2">音乐审核</el-radio-button>
                <el-radio-button label="3">主题审核</el-radio-button>
            </el-radio-group>
            </el-col>
            
            <el-col :span="8">
                 <el-button @click="">增加</el-button>
            </el-col>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%"  @selection-change="handleSelectionChange">
          <el-table-column type="index" label="编号"></el-table-column>
           
            <el-table-column prop="" label="内容" ></el-table-column>
            
            <el-table-column prop="operate" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini"  @click="">删除</el-button>
                    <el-button size="mini"  @click="">修改</el-button>
                  
                </template>
            </el-table-column>
        
    </el-table>
    <!-- 分页 -->
    <el-col :span="24" class="toolbar">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;">
        </el-pagination>
    </el-col>
    
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      radio1:'1',
      tableData: [],
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

</style>
