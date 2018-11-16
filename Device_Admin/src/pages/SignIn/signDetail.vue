<template>
    <div class="signDetail">
        <el-container>
            <el-header>
                <h1>注册信息</h1>
                <hr>
            </el-header>
            <el-main>
                <el-form :rules="rules">
                    <el-form-item label="歌手名称" :label-width="formLabelWidth" prop="singer">
                        <el-input auto-complete="off" style="width:300px;" ></el-input>
                    </el-form-item>
                    <el-form-item label="艺名" :label-width="formLabelWidth" prop="stage_name">
                        <el-input auto-complete="off"  style="width:300px;" placeholder="20字以内"></el-input>
                    </el-form-item>
                    <el-form-item label="个性签名" :label-width="formLabelWidth" prop="signature">
                        <el-input auto-complete="off"  style="width:500px;" placeholder="40字以内"></el-input>
                    </el-form-item>
                    <el-form-item label="地区" :label-width="formLabelWidth" prop="region">
                        <el-radio v-model="radio" label="1">内地</el-radio>
                        <el-radio v-model="radio" label="2">港台</el-radio>
                        <el-radio v-model="radio" label="3">日韩</el-radio>
                        <el-radio v-model="radio" label="4">欧美</el-radio>
                        <el-radio v-model="radio" label="5">东南亚</el-radio>
                        <el-radio v-model="radio" label="6">其他</el-radio>
                    </el-form-item>
                    <el-form-item label="类型" :label-width="formLabelWidth" prop="type">
                        <el-radio v-model="radio1" label="1">男</el-radio>
                        <el-radio v-model="radio1" label="2">女</el-radio>
                        <el-radio v-model="radio1" label="3">组合</el-radio>
                        <el-radio v-model="radio1" label="4">虚拟</el-radio>
                    </el-form-item>
                    <el-form-item label="身份" :label-width="formLabelWidth" prop="status">
                        <el-radio v-model="radio2" label="1">演唱</el-radio>
                        <el-radio v-model="radio2" label="2">作词</el-radio>
                        <el-radio v-model="radio2" label="3">作曲</el-radio>
                        <el-radio v-model="radio2" label="4">编曲</el-radio>
                        <el-radio v-model="radio2" label="5">制作</el-radio>
                    </el-form-item>
                    <el-form-item label="流派" :label-width="formLabelWidth" prop="genre">
                        <el-radio v-model="radio3" label="1">流行</el-radio>
                        <el-radio v-model="radio3" label="2">嘻哈</el-radio>
                        <el-radio v-model="radio3" label="3">摇滚</el-radio>
                        <el-radio v-model="radio3" label="4">电子</el-radio>
                        <el-radio v-model="radio3" label="5">民谣</el-radio>
                        <el-radio v-model="radio3" label="6">民歌</el-radio>
                        <el-radio v-model="radio3" label="7">动漫</el-radio>
                        <el-radio v-model="radio3" label="8">古风</el-radio>
                        <el-radio v-model="radio3" label="9">古典</el-radio>
                        <el-radio v-model="radio3" label="10">其他</el-radio>
                    </el-form-item>
                    <el-form-item label="加入星球" :label-width="formLabelWidth" prop="add-star">
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
                    <el-form-item label="简介" :label-width="formLabelWidth" prop="intro">
                        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" style="width:500px;"></el-input>
                    </el-form-item>
                     <el-form-item label="歌曲信息" :label-width="formLabelWidth" prop="songs">
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
                    <!-- <el-form-item>
                        <h1>注册信息</h1>
                        <hr>
               
                    </el-form-item> -->
                
                    <el-form-item label="真是姓名" :label-width="formLabelWidth" prop="name">
                        <el-input auto-complete="off" style="width:300px;" placeholder="20字以内"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型" :label-width="formLabelWidth" prop="credentials_type">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="证件号码" :label-width="formLabelWidth" prop="credentials_num" >
                        <el-input auto-complete="off" style="width:300px;" placeholder="证件号码"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
                        <el-input auto-complete="off" style="width:300px;" placeholder="手机号"></el-input>
                        <span>登录名为手机号</span>
                    </el-form-item>
                    <el-form-item label="验证码" :label-width="formLabelWidth" prop="verification">
                        <el-input auto-complete="off" style="width:300px;" placeholder="4位验证码"></el-input>
                    </el-form-item>
                    <el-form-item label="设置密码" :label-width="formLabelWidth" prop="password">
                        <el-input auto-complete="off" style="width:300px;" placeholder="输入8-20位的字母和数字"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                        <el-input auto-complete="off" style="width:300px;" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="证件图" :label-width="formLabelWidth" prop="credentials_pic">
                    </el-form-item>
                    <el-form-item label="" :label-width="formLabelWidth" >
                        <ol>
                            <li>根据国家相关规定，请提供身份有效证件的彩色扫描件或清晰的数码相片</li>
                            <li>身份证需提供身份证正面图、身份证反面图、手持身份证图</li>
                            <li>护照、港澳通行证、台湾往来通行证，需提供身份信息页图、手持证件图</li>
                            <li>支持.jpg、.png格式的图片或照片</li>
                        </ol>
                    </el-form-item>
                    <el-form-item >
                         <el-button type="primary" class="btn">提交审核</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
            
        </el-container>
    </div>
</template>
<script>
    import list from './signDetail.js';
    export default list;
</script>
<style scoped>
.signDetail{
    background:#c5abf6;
}
.signDetail h1{
    text-align: center;
    font-size:20px;
    line-height:60px;
}
.signDetail .btn{
    float:right;
}
</style>

