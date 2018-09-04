<template>
  <div>
  	<el-row>
          <el-col :span="12">
              <el-row>
                  <el-col :span="4" class="head">
                      <img src="https://wx3.sinaimg.cn/mw690/654b47daly1fughv1mf64j21kw12g7wh.jpg" alt="">
                  </el-col>
                  <el-col :span="16" class="describe">
                   
                      <el-badge value="音乐人" class="item">
                        阿里郎的果冻
                      </el-badge>
                      <p>来自星球：<span>浪里个浪星球</span></p>
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="8" :offset="4">
               <el-button type="primary" @click="dialogFormVisible=true">编辑个人资料</el-button>
                <el-button type="primary" >查看个人首页</el-button>
          </el-col>
  	</el-row>
    <el-row :gutter="30" style="margin-top:40px;">
        <el-col :span="8">
            <div class="bg">
                <img src="" alt="">
                <p>作品</p>
                <ul class="list">
                    <li>专辑&nbsp;&nbsp;<span>5</span>&nbsp;&nbsp;|</li>
                    <li>&nbsp;&nbsp;单曲&nbsp;&nbsp;<span>2</span>&nbsp;&nbsp;</li>
                </ul>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="bg">
                <img src="" alt="">
                <p>昨日播放量</p>
                <p>8</p>
                <p>(<span class="down">↓</span><span class="up">↑</span>57%)</p>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="bg">
                <img src="" alt="">
                <p>昨日新增粉丝</p>
                <p>0</p>
            </div>
        </el-col>
        
    </el-row>
    <el-row :gutter="30">
        <el-col :span="8">
            <div class="bg">
                <img src="" alt="">
                <p>昨日收入</p>
                <ul class="list">
                    <li>分贝&nbsp;&nbsp;<span>2000</span>&nbsp;&nbsp;|</li>
                    <li>&nbsp;&nbsp;黑珍珠&nbsp;&nbsp;<span>2000</span>&nbsp;&nbsp;</li>
                </ul>
            </div>
        </el-col>
    </el-row>
    <!-- 编辑个人资料 --> 
    <el-dialog title="编辑资料" :visible.sync="dialogFormVisible" width="60%">
        <el-form>
            <el-form-item label="艺人名" :label-width="formLabelWidth">
                <el-input auto-complete="off"></el-input>
                <span>
                    修改后经过审核才能通过，且30内只能修改一次
                </span>
            </el-form-item>
            <el-form-item label="艺人图片" :label-width="formLabelWidth">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"      :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>（图片尺寸不小于640*640）</span>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                 <el-radio-group v-model="radio2">
                    <el-radio :label="3">男</el-radio>
                    <el-radio :label="6">女</el-radio>
                    <el-radio :label="9">团体</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="地区" :label-width="formLabelWidth">
                 <el-select v-model="value" placeholder="请选择">
                    <el-option  v-for="item in AddressOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="流派风格" :label-width="formLabelWidth">
                 <el-select v-model="value" placeholder="请选择">
                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
        dialogFormVisible: false,
        radio2:'',
        imageUrl:'',
        value:'',
        AddressOptions:[{
            value:'选项1',
            label:'地区'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
		 handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import url("Artist.css");
</style>
