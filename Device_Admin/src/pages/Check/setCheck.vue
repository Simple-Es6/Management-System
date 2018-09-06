<template>
  <div class="tcheck">
  	<el-row>
          <el-col :span="8">
            <el-radio-group v-model="radio1">
                <el-radio-button label="1">艺人审核</el-radio-button>
                <el-radio-button label="2">音乐审核</el-radio-button>
                <el-radio-button label="3">主题审核</el-radio-button>
                <el-radio-button label="4">评论审核</el-radio-button>
            </el-radio-group>
            </el-col>
            <el-col :span="8">
                 <el-button @click="add">增加</el-button>
            </el-col>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%"  >
          <el-table-column type="index" label="编号"></el-table-column>
            <el-table-column prop="examine" label="内容" ></el-table-column>          
            <el-table-column prop="operate" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini"  @click="">删除</el-button>
                    <el-button size="mini"  @click="">修改</el-button>           
                </template>
            </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible">
        <span>
            
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      radio1:'1',
      tableData: [],
    }
  },
  //组件生成时执行事件
  created:function(){
      this.getData();
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		// handleSizeChange(val) {
        //     this.everyPageCount = val;
        //     console.log('val', val)
        // },
        // handleCurrentChange(val) {
        //     this.getData(val);
        // },
        getData() {
            let _this = this;
            let params = {
                type:this.radio1,
            };
            _this.$axios('post', _this.Global.PATH1.queryExamine, params, res => {
                if (res.code == 200) {
                  
                    _this.tableData = res.data;
                }
            });
        },
        add(){

        }
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
