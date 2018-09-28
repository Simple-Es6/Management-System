let list = {
    name: 'My-music',
    data() {
        return {
            curId: 0,
            radio3: '0',
            showVisible: 1,
            select: '1',
            selectInput: '',
            // 专辑表格
            tableData: [],
            //单曲表格
            tableDataSingle: [],

            // 查询块
            formInline: {
                user: '',
                region: ''
            },
            // 分页
            total: 0,
            page: 1,
            everyPageCount: 10,
            total1: 0,
            page1: 1,
            everyPageCount1: 10,
            show:true,
            showTab:true,
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
    	handleSubmit(index,val){
    		
    	},
        getData(num) {
            let _this = this;
            if (this.showVisible == 1) {
                let special = {
                    startRecord: num,
                    pageSize: _this.everyPageCount,
                    special_title: _this.selectInput,
                    is_examine: _this.radio3 == 0 ? '' : _this.radio3
                };
                _this.commonFun('post', _this.Global.PATH1.querysplelist, special, res => {
                    _this.tableData = res.data;
                    _this.total = res.count;
                });
            } else {
                let singer = {
                    startRecord: num,
                    pageSize: _this.everyPageCount1,
                    music_name: _this.selectInput,
                    is_examine: _this.radio3 == 0 ? '' : _this.radio3
                };
                _this.commonFun('post', _this.Global.PATH1.querysingle, singer, res => {
                    _this.tableDataSingle = res.data;
                    _this.total1 = res.count;
                });
            }
        },
        elechange() {
            this.selectInput = '';
            this.show=!this.show;
            this.showTab=!this.showTab;
            this.getData(1);
        },
        search() {
            if (this.selectInput == '') { return false };
            this.select == 1 ? this.showVisible = 1 : this.showVisible = 0;
            this.getData(1);
        },
        commonFun(type, url, params, callback) {
            let _this = this;
            _this.$axios(type, url, params, res => {
                if (res.code == 200) {
                    callback && callback(res);
                }
            });
        },
        musiclist() {
            
            this.getData(1);
        },
        //点击每行的编辑
        handleEdit(index, row) {
           	console.log(index, row);
           	if(row.type==1){
           		this.$router.push({name:'UpLoadTheme',params:{
						specialid:row.specialid
					}
				});
           	}else{
           		this.$router.push({name:'UpLoadHome',params:{
						specialid:row.specialid
					}
				});
           	};
			
        },
        //点击每行的取消
        handleDelete(index, row) {
            console.log(index, row);
            let _this = this;
            _this.$confirm('确定要通过该用户的信息?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _this.$message({
                    type: 'success',
                    message: '已删除'
                });
                let arr = _this.tableData;
                arr.splice(index, 1);
                _this.tableData = arr;

            }).catch(() => {
                _this.$message({
                    type: 'info',
                    message: '取消'
                });
            });
        },
        handleSizeChange(val) {
            this.everyPageCount = val
        },
        handleCurrentChange(val) {
            this.getData(val);
        },
        handleSizeChange1(val) {
            this.everyPageCount1 = val
        },
        handleCurrentChange1(val) {
            this.getData(val);
        },
        changeListItemPosition(itemIdex) {
            let _this = this
            let selectedVal = _this.filters.topPositions[itemIdex]
            _this.filters.topPositions.forEach(function(item, index) {
                if (item === selectedVal && itemIdex !== index && _this.listdata[index].channelName === _this.listdata[itemIdex].channelName) {
                    _this.$set(_this.filters.topPositions, index, '100')
                }
            })
            this.filters.topPositionIndex = _this.filters.topPositions[itemIdex]
        },
        goDetails(val){
        	this.$router.push({name:'PlayMusic',params:{
					music:val.music_path,
					lrc:val.lyrics,
					type:2,
					musicname:val.music_name,
                    singername:val.singer_name,
                    music_picture:val.music_picture,
                    music_id:val.musicid
				}
			});
        },
    },
    //使用的组件
    components: {

    }
}
export default list;