var list = {
    data() {
        return {
            dialogFormVisible: false,
            radio2: '',
            imageUrl: '',
            nickname: '',
            planet_name: '',
            specialcount: '',
            musiccount: '',
            fensicount: '',
            fenbei: '',
            head_portrait: '',
            phone: '15600786662',
            value: '',
            input10: '',
            input11: 'wuhouyizhenfeng@163.com',
            input12: '中国',
            textarea3: '',
            AddressOptions: [{
                value: '选项1',
                label: '地区'
            }],
            Typeoptions: [{
                value: '选项1',
                label: '抒情'
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
    created: function() {
        this.getData(1);
    },
    //页面渲染完成事件
    mounted() {

    },
    //方法
    methods: {
        getData(num) {
            let _this = this;
            _this.$axios('post', _this.Global.PATH1.querymusicpeople, {}, res => {
                if (res.code == 200) {
                    console.log(res.data)
                    _this.nickname = res.data.nickname;
                    _this.planet_name = res.data.planet_name;
                    _this.specialcount = res.data.specialcount;
                    _this.musiccount = res.data.musiccount;
                    _this.fensicount = res.data.fensicount;
                    _this.fenbei = res.data.fenbei;
                    _this.head_portrait = res.data.head_portrait;
                }
            });

        },
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
    filters: {
        hideMiddel(str) {
            let reg = /^(\d{3})\d{4}(\d{4})$/;
            return str.replace(reg, "$1****$2");
        }
    },
    //使用的组件
    components: {

    }
}
export default list;