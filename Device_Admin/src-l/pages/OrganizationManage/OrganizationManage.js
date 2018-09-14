let list={
    name:'OrganizationManage',
    data(){
        return {
            selectInput:'',
            tableData:[

            ],
            total: 0,
            page: 1,
            everyPageCount: 10,
            currentPage:1,
        }
    },
    //组件生成时执行事件
    created: function() {
        // this.getData(1);
    },
    //页面渲染完成事件
    mounted() {

    },
    //方法
    methods: {
        //搜索
        search(){

        },
        handleSizeChange(val) {
            // this.everyPageCount = val;
        
        },
        handleCurrentChange(val) {
            // this.getData(val);
        },
    }
}
export default list;