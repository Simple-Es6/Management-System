<template>
    <div>
        <el-row>
            <el-col :span="4">
                音乐人管理（{{total}}）
            </el-col>
            <el-col :span="8" :offset="12">
                    <el-input placeholder="请输入音乐人姓名"  class="input-th-select" v-model="selectInput" @keyup.enter.native="search">
                        <el-button slot="append" icon="el-icon-search"  @click="search"></el-button>
                    </el-input>
            </el-col>
        </el-row>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" width="55" label="序号"></el-table-column>
            <el-table-column label="头像">
                <template slot-scope="scope">
                    <img  :src="scope.row.head_portrait" alt="" style="width: 50px;height: 50px;">
                 </template>
            </el-table-column>
            <el-table-column  prop="nickname" label="音乐人" ></el-table-column>
            <!-- <el-table-column  prop=" " label="风格" ></el-table-column>
            <el-table-column  prop=" " label="简介" width="200"></el-table-column> -->
            <el-table-column  prop="musiccount" label="歌曲" ></el-table-column>
            <el-table-column  prop="specialcount" label="主题" ></el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="scope" width="30">
                    <el-button size="mini" @click="openPage(scope.row)">查看</el-button>
                    <!-- <el-button size="mini">禁用</el-button>
                    <el-button size="mini">删除</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;" :current-page.sync="currentPage">
            </el-pagination>
        </el-col>
    </div>

</template>
<script>
    export default {
        name:'ArtistManage',
        data(){
            return {
                selectInput:'',
                tableData:[],
                total: 0,
                page: 1,
                everyPageCount: 10,
                currentPage:1,
                nickname:'',
                specialcount:'',
                musiccount:'',
                userid:'',
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
                    nickname:this.selectInput,
                    startRecord:num,
                    pageSize:this.everyPageCount,
                };
                _this.$axios('post', _this.Global.PATH1.querymusicuserlist, params, res => {
                    if (res.code == 200) {
                         _this.tableData = res.data;
                          _this.total = res.count;
                         
                    }
                });
            },
            search(){
                 if (this.selectInput == '') { return false };
                this.select == 1 ? this.showVisible = 1 : this.showVisible = 0;
                this.getData(1);
            },
            handleSizeChange(val) {
                this.everyPageCount = val;
                console.log('val', val)
            },
            handleCurrentChange(val) {
                this.getData(val);
            },
            openPage(val){
                this.$router.push({name:'artistDetail',query:{
                    userid:val.userid,
                }});
           
            }
        }
    }
</script>
<style scoped>

</style>

