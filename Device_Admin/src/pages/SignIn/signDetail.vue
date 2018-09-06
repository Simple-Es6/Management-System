<template>
    <div class="signDetail">
        <el-container>
            <el-header>
                <h1>注册信息</h1>
                <hr>
                </el-header>
            <el-main>
                <el-form >
                    <el-form-item label="歌手名称" :label-width="formLabelWidth">
                        <el-input auto-complete="off" style="width:300px;" placeholder="20字以内"></el-input>
                    </el-form-item>
                    <el-form-item label="艺名" :label-width="formLabelWidth">
                        <el-input auto-complete="off"  style="width:300px;" placeholder="20字以内"></el-input>
                    </el-form-item>
                    <el-form-item label="个性签名" :label-width="formLabelWidth">
                        <el-input auto-complete="off"  style="width:500px;" placeholder="40字以内"></el-input>
                    </el-form-item>
                    <el-form-item label="地区" :label-width="formLabelWidth">
                        <el-radio v-model="radio" label="1">内地</el-radio>
                        <el-radio v-model="radio" label="2">港台</el-radio>
                        <el-radio v-model="radio" label="3">日韩</el-radio>
                        <el-radio v-model="radio" label="4">欧美</el-radio>
                        <el-radio v-model="radio" label="5">东南亚</el-radio>
                        <el-radio v-model="radio" label="6">其他</el-radio>
                    </el-form-item>
                    <el-form-item label="类型" :label-width="formLabelWidth">
                        <el-radio v-model="radio" label="1">男</el-radio>
                        <el-radio v-model="radio" label="2">女</el-radio>
                        <el-radio v-model="radio" label="3">组合</el-radio>
                        <el-radio v-model="radio" label="4">虚拟</el-radio>
                    </el-form-item>
                    <el-form-item label="身份" :label-width="formLabelWidth">
                        <el-radio v-model="radio" label="1">演唱</el-radio>
                        <el-radio v-model="radio" label="2">作词</el-radio>
                        <el-radio v-model="radio" label="3">作曲</el-radio>
                        <el-radio v-model="radio" label="4">编曲</el-radio>
                        <el-radio v-model="radio" label="5">制作</el-radio>
                    </el-form-item>
                    <el-form-item label="流派" :label-width="formLabelWidth">
                        <el-radio v-model="radio" label="1">流行</el-radio>
                        <el-radio v-model="radio" label="2">嘻哈</el-radio>
                        <el-radio v-model="radio" label="3">摇滚</el-radio>
                        <el-radio v-model="radio" label="4">电子</el-radio>
                        <el-radio v-model="radio" label="5">民谣</el-radio>
                        <el-radio v-model="radio" label="6">民歌</el-radio>
                        <el-radio v-model="radio" label="7">动漫</el-radio>
                        <el-radio v-model="radio" label="8">古风</el-radio>
                        <el-radio v-model="radio" label="9">古典</el-radio>
                        <el-radio v-model="radio" label="10">其他</el-radio>
                    </el-form-item>
                    <el-form-item label="加入星球" :label-width="formLabelWidth">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value1" placeholder="请选择">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <span>选择星球，再选择星球机构，也可以不选</span>
                    </el-form-item>
                    <el-form-item label="简介" :label-width="formLabelWidth">
                        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" style="width:500px;"></el-input>
                    </el-form-item>
                     <el-form-item label="歌曲信息" :label-width="formLabelWidth">
                         <div class="upformright">
                            <div class="avatar-uploader">
                                    <label for="avatar2">
                                        <!-- <i v-if="!themeObj.special_picture" class="el-icon-plus avatar-uploader-icon"></i>
                                        <img v-if="themeObj.special_picture" :src="themeObj.special_picture" class="avatar"> -->
                                    </label>	
                                    <!-- <input @change="upLoadStart1($event)" id="avatar2" accept="image/jpeg,image/png" class="avatar-img" type="file"  /> -->
                                </div>
                          	
                        </div>
                     </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                formLabelWidth:'120px',
                radio:'',
                options: [{
                    value: '选项1',
                    label: '暂不加入'
                    }, {
                    value: '选项2',
                    label: '创世星'
                    }, {
                    value: '选项3',
                    label: '乐享星'
                    }],
                value: '',
                value1:'',
                textarea:'',
                options1: [{
                    value: '选项1',
                    label: '无'
                    }, {
                    value: '选项2',
                    label: '东北机构'
                    }, {
                    value: '选项3',
                    label: '华北机构'
                    }, {
                    value: '选项4',
                    label: '华南机构'
                    }, {
                    value: '选项5',
                    label: '华东机构'
                    }],
            }
        },
         //组件生成时执行事件
        created:function() {
            
        },
        methods:{

        }
    }
</script>
<style>
.signDetail{
    background:#c5abf6;
}
.signDetail .el-header{
    text-align: center;
    font-size:20px;
    line-height:60px;
}
</style>

