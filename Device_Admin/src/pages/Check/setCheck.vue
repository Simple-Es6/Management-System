<template>
  <div class="scheck">
  	<el-row>
          <el-col :span="8">
            <el-radio-group v-model="radio1" @change="tabType">
                <el-radio-button label="1">艺人审核</el-radio-button>
                <el-radio-button label="2">音乐审核</el-radio-button>
                <el-radio-button label="3">主题审核</el-radio-button>
                <el-radio-button label="4">评论审核</el-radio-button>
            </el-radio-group>
            </el-col>
            <el-col :span="8">
                 <el-button @click="dialogVisible= true">增加</el-button>
            </el-col>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%"  >
          <el-table-column type="index" label="编号"></el-table-column>
            <el-table-column prop="examine" label="内容"></el-table-column>          
            <el-table-column prop="operate" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button size="mini"  @click="handleAmend(scope.row)">修改</el-button>           
                </template>
            </el-table-column>
    </el-table>
    <el-dialog title="增加" :visible.sync="dialogVisible">
        <span>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" class="textarea"></el-input>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
    <el-dialog title="修改" :visible.sync="dialogVisibleAmend" >
        <span>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textareaA" class="textarea"></el-input>
            <el-button @click="dialogVisibleAmend = false">取 消</el-button>
            <el-button type="primary" @click="confirmAmend">确 定</el-button>
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
        dialogVisible: false,
        textarea:'',
        dialogVisibleAmend:false,
        textareaA:'',
        dialogObj:{
            id:'',
            examine:''
        }
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
        getData() {
            let _this = this;
            let params = {
                type:this.radio1,
            };
            _this.$axios('post', _this.Global.PATH1.queryExamine, params, res => {
                if (res.code == 200) {
                    _this.tableData=res.data;
                    _this.textarea='';
                    
                }
            });
        },
        confirm(){
            let _this=this;
            if(_this.textarea==''){
                _this.$message('输入内容为空');
                return false;
            }else{
                let params={
                    examine:_this.textarea,
                    type:this.radio1,
                }
                _this.dialogVisible = false;
                _this.$axios('post',_this.Global.PATH1.addExamine,params,res=>{
                    if(res.code==200){
                        this.getData();
                    }
                }) 
            }
                        
        },
        confirmAmend(){
            let _this=this;
            if(_this.textareaA==''){
                _this.$message('输入内容为空');
                return false;
            }else{
                _this.dialogVisibleAmend = false;
                let params={
                    examine:_this.textareaA,
                    id:_this.dialogObj.id,
                }
                _this.$axios('post', _this.Global.PATH1.updateExamine, params, res => {
                    if (res.code == 200) {
                    this.getData();
                    }
                });
            }

            
        },
        tabType(){
            this.getData();
        },
        handleDelete(index, row) {
            let _this = this;
            _this.$confirm('确定要删除此条信息?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let params={
                    id:row.id
                }
                 _this.$axios('post', _this.Global.PATH1.deleteExamine, params, res => {
                    if (res.code == 200) {
                         _this.$message({
                            type: 'success',
                            message: '已删除'
                        });
                        this.getData();
                        // let arr = _this.tableData;
                        // arr.splice(index, 1);
                        // _this.tableData = arr;
                    }
                });
               

            }).catch(() => {
                _this.$message({
                    type: 'info',
                    message: '取消'
                });
            });
        },
        handleAmend(val){
           
            this.dialogVisibleAmend=true;
            this.textareaA=val.examine;
            this.dialogObj.examine=val.examine;
            this.dialogObj.id=val.id;
            
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scheck .textarea{
    margin-bottom:20px;
}
</style>
