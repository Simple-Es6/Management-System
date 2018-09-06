let list = {
    name:'ThemeCheck',
    data() {
        return {
            radio1: -1,
            radio: '',
            total: 0,
            page: 1,
            everyPageCount: 10,
            currentPage:1,
            tableData: [],
            selectInput: '',
            multipleSelection: [],
            dialogVisible: false,
            specilIndex:0,
            form:{},
            hide:true
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
                special_title: this.selectInput,
                pageSize: this.everyPageCount,
                startRecord: num,
                is_examine:_this.radio1==-1?'':_this.radio1
            }
            _this.$axios('post', _this.Global.PATH1.queryspecialexamine, params, res => {
                if (res.code == 200) {
                    _this.total = res.count;
                    _this.tableData = res.data;
                }
            });
        },
        tabChange(){
            this.getData(1);
        },
        check(row, index, is_examine) {
            let arr = [];
            arr.push(row.specialid);
            let params = {
                list: arr,
                is_examine: is_examine
            }
            this.commonFun(params,index, is_examine);
        },
        allCheck(is_examine) {
            if (this.multipleSelection.length == 0) { return false };
            let arr = [];
            this.multipleSelection.forEach(function(val) {
                arr.push(val.specialid);
            });
            let params = {
                is_examine: is_examine,
                list: arr
            };
            this.commonFun(params,-1,is_examine);
        },
        detailCheck(form,is_examine){
            let arr=[];
            arr.push(form.specialid);
            let params={
                list:arr,
                is_examine: is_examine
            };
            this.commonFun(params,this.specilIndex,is_examine);
            this.dialogVisible  = false;
        },
        commonFun(params,index, is_examine) {
            let _this = this;
            _this.$axios1('post', _this.Global.PATH1.updatespecialexamine, params, res => {
                if (res.code == 200) {
                    alert('提交成功');
                    if(index==-1){
                        _this.getData(_this.currentPage);
                    }else{
                        let obj=_this.tableData[index];
                        obj.is_examine = is_examine;
                       
                        obj.shenhe = is_examine == 1 ? '审核成功' : '审核失败';
                         _this.$set(_this.tableData,'index', obj);
                         
                    }
                    //  _this.getData(_this.currentPage);
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
        
        },
        handleCurrentChange(val) {
            this.getData(val);
        },
        dialogVisibles(index,val){
            let _this = this;
            val.is_examine==1? _this.hide=false:_this.hide=true;
                let params={
                    specialid:val.specialid
                }
                _this.$axios('post', _this.Global.PATH1.queryspleByid, params, res => {
                    if (res.code == 200) {
                    _this.dialogVisible = true;
                    _this.specilIndex = index;
                    _this.form=res.data;
                   
                      // _this.$set(form, "index", obj);
                    }
                })
        
            
            
        }
    },
    //使用的组件
    components: {

    }
}
export default list;