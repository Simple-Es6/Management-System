let list = {
    name:'MusicCheck',
    data() {
        return {
            radio3: -1,
            radio: '',
            total: 0,
            page: 1,
            everyPageCount: 10,
            currentPage: 1,
            tableData: [],
            selectInput: '',
            multipleSelection: []
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
            let params = {
                music_name: this.selectInput,
                pageSize: this.everyPageCount,
                startRecord: num,
                is_examine: _this.radio3 == -1 ? '' : _this.radio3
            }
            _this.$axios('post', _this.Global.PATH1.querymusicexamine, params, res => {
                if (res.code == 200) {
                    _this.total = res.count;
                    _this.tableData = res.data;

                }
            });
        },
        tabData() {
            this.getData(1);
        },
        check(row, index, is_examine) {
            let arr = [];
            arr.push(row.musicid);
            let params = {
                list: arr,
                is_examine: is_examine
            }
            this.commonFun(params, index, is_examine);

        },
        allCheck(is_examine) {
            if (this.multipleSelection.length == 0) { return false };
            let arr = [];
            this.multipleSelection.forEach(function(val) {
                arr.push(val.musicid);
            });
            let params = {
                is_examine: is_examine,
                list: arr
            }; 

            this.commonFun(params, -1, is_examine);

        },
        commonFun(params, index, is_examine) {

            let _this = this;
            _this.$axios1('post', _this.Global.PATH1.updatemusicexamine, params, res => {
                if (res.code == 200) {
                    _this.$message('提交成功');
                    if (index == -1) {
                        _this.getData(_this.currentPage);
                    } else {
                      
                        let obj = _this.tableData[index];
                            obj.is_examine = is_examine;
                            obj.shenhe = is_examine == 1 ? '审核成功' : '审核失败';
                            _this.$nextTick(() => {
                                
                                _this.$set(_this.tableData, "index", obj);
                            })
                        
                       
                    }
                }
            })
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;

        },
        search() {
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
        }
    },
    //使用的组件
    components: {

    }
}
export default list;