<template>
  <div class="mcheck">
  	<el-row>
          <el-col :span="7">
            <el-radio-group v-model="radio3" @change="tabData">
                <el-radio-button label="-1">全部{{radio3==-1?total:''}}</el-radio-button>
                <el-radio-button label="0">待处理{{radio3==0?total:''}}</el-radio-button>
                <el-radio-button label="1">已通过{{radio3==1?total:''}}</el-radio-button>
                <el-radio-button label="2">已拒绝{{radio3==2?total:''}}</el-radio-button>
            </el-radio-group>
            </el-col>
            <el-col :span="4" class="btn">
                <el-button label="1" @click="allCheck(1)">全部通过</el-button>
                <el-button  label="2" @click="allCheck(2)">全部拒绝</el-button>
            </el-col>
            <!-- <el-col :span="7" >
                <el-date-picker v-model="value6" type="daterange" range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-col> -->
            <el-col :span="6">
                    帖子内容
                    <el-input placeholder="输入搜索内容"  class="input-with-select" style="width:200px;" v-model="selectInput" @keyup.enter.native="search">
                        <el-button slot="append" icon="el-icon-search"  @click="search"></el-button>
                    </el-input>
            </el-col>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%"  @selection-change="handleSelectionChange" ref="multipleTable" @select="selectCheck" >
          <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="create_times" label="发布时间" width="180"></el-table-column>
            
            <el-table-column prop="nick_name" label="发布者" width="120"></el-table-column>
            <el-table-column prop="comment_content" label="内容"></el-table-column>
            <el-table-column prop="special_title" label="标题" width="180"></el-table-column> 
            <el-table-column prop="counts" label="所有回复" ></el-table-column>        
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
import list from './commentCheck.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mcheck .btn{
    line-height:40px;
}
</style>
