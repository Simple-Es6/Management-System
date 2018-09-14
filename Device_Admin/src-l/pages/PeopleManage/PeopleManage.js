import 'echarts/map/js/china.js';
let list={   
    name:'PeopleManage',
    data(){
        return {
            tableData:[],
            total: 0,
            everyPageCount: 10,
            currentPage:1,
            page: 1,
            radio:''
        }
    },
    //组件生成时执行事件
  	created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		this.myChart1 = this.$echarts.init(this.$refs.dataEchars);
		this.myChart1.setOption({
		    xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
		});
	},
	//方法
	methods:{
		
	},
	//使用的组件
  	components:{
		
	}
}

export default list;