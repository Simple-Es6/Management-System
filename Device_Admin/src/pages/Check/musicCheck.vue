<template>
  <div class="mcheck">
  	<el-row>
          <el-col :span="8">
            <el-radio-group v-model="radio3" @change="tabData">
                <el-radio-button label="-1">全部</el-radio-button>
                <el-radio-button label="0">待处理</el-radio-button>
                <el-radio-button label="1">已通过</el-radio-button>
                <el-radio-button label="2">已拒绝</el-radio-button>
            </el-radio-group>
            </el-col>
            <el-col :span="8" class="btn">
                <el-button label="1" @click="allCheck(1)">全部通过</el-button>
                <el-button  label="2" @click="allCheck(2)">全部拒绝</el-button>
            </el-col>
            <el-col :span="8">
                    音乐名称
                    <el-input placeholder="单行输入"  class="input-with-select" style="width:200px;" v-model="selectInput" @keyup.enter.native="search">
                        <el-button slot="append" icon="el-icon-search"  @click="search"></el-button>
                    </el-input>
            </el-col>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%"  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="special_picture" label="封面" width="80">
                 <template slot-scope="scope">
                    <img :src="scope.row.music_picture" alt="" style="width: 50px;height: 50px;">
                 </template>
            </el-table-column>
            <el-table-column prop="create_times" label="上传时间" width="180"></el-table-column>
            <el-table-column prop="music_name" label="音乐名称" width="120"></el-table-column>
            <el-table-column prop="create_times" label="所属专辑"></el-table-column>
            <!-- <el-table-column prop="status" label="时长" ></el-table-column> -->
            <el-table-column prop="singer_name" label="艺人名字" ></el-table-column>
            <el-table-column label="" >
                <template slot-scope="scope">
                    <el-popover placement="bottom" title='音乐' width="400" trigger="click">
                       <span style="width:200px; display:inline-block;">
                            <img :src="scope.row.music_picture" alt="" style="width:100%">
                       </span>
                        
                     
                        <span  style="width:160px; display:inline-block;word-wrap:break-word; word-break:break-all;">
                            {{scope.row.lyrics}}
                        </span>
                        <audio :src="scope.row.music_path" controls="controls"  ref="audiodom"></audio>
                    <el-button slot="reference">试听</el-button>
                    </el-popover>
                    
                </template>
            </el-table-column>
            <el-table-column prop="shenhe" label="状态" ></el-table-column>
            <el-table-column prop="operate" label="操作" width="260">
                
                <template slot-scope="scope">
                    <div  v-if="scope.row.is_examine==0">
                        <el-button size="mini"  @click="check(scope.row,scope.$index,1)">审核成功</el-button>
                        <el-button size="mini"  @click="check(scope.row,scope.$index,2)">审核失败</el-button>
                    </div>
                   
                
                </template>
            </el-table-column>
        
    </el-table>
    <!-- 分页 -->
    <el-col :span="24" class="toolbar">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total"  :current-page.sync="currentPage" style="float:right;">
        </el-pagination>
    </el-col>
  </div>
</template>
<script>
import list from './musicCheck.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mcheck .btn{
    line-height:40px;
}
</style>
