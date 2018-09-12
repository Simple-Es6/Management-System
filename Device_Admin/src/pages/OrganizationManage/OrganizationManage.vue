<template>
    <div>
        <el-row>
            <el-col :span="4" :offset='4'>
                 <el-button>增加</el-button>
            </el-col>
            <el-col :span="4">
                 <el-button >删除</el-button>
            </el-col>
            <el-col :span="8" :offset="4">
                    <el-input placeholder="请输入机构名称"  class="input-with-select" v-model="selectInput" @keyup.enter.native="search">
                        <el-button slot="append" icon="el-icon-search"  @click="search"></el-button>
                    </el-input>
            </el-col>
        </el-row>
        <el-table :data="tableData" stripe style="width: 100%" >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" width="55" label="序号"></el-table-column>
            <el-table-column  prop=" " label="机构名称" ></el-table-column>
            <el-table-column  prop=" " label="负责人" ></el-table-column>
            <el-table-column  prop=" " label="负责电话" ></el-table-column>
            <el-table-column  prop=" " label="登录账号" ></el-table-column>
            <el-table-column  prop=" " label="分成比例" ></el-table-column>
            <el-table-column  prop=" " sortable label="艺人总量" ></el-table-column>
            <el-table-column  prop=" " sortable label="音乐总量" ></el-table-column>
            <el-table-column  prop=" " sortable  label="粉丝总量" ></el-table-column>
            <el-table-column  prop=" " sortable label="播放总量" ></el-table-column>
            <el-table-column  prop=" " label="操作" >
                <template slot-scope="scope" width="30">
                    <el-button size="mini">修改</el-button>
                    <el-button size="mini">禁用</el-button>
                    <el-button size="mini">删除</el-button>
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
    import list from './OrganizationManage.js'
    export default list;
</script>
<style scoped>

</style>

