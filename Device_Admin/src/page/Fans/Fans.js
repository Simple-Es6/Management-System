let list = {
  name: 'Fans',
  data () {
    return {
      tableData:[],
      currentPage:1,
      count:0,
      radio:1,
      pageSize:10,
      integral:0
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData(1);
	},
	//页面渲染完成事件
	mounted(){
		this.myChart1 = this.$echarts.init(this.$refs.dataEchars1);
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
                type: 'line',
                itemStyle : { normal: {label : {show: true}}}
            }]
		});
	},
	//方法
	methods:{
		handleSizeChange(val) {
	    this.pageSize = val;
	    this.getData(this.currentPage);
	  },
	  handleCurrentChange(val) {
	    this.currentPage = val;
	    this.getData(val);
	  },
	  getData(page){
	  	let that = this;
			that.$axios('post',that.Global.PATH.queryfensilist,{
				startRecord:page,
				pageSize:that.pageSize
			},function(res){
	  			if(res.code==200){
	  				that.tableData = res.data;
	  				that.total = res.count;
	  				that.integral = res.integral;
	  			};
			});
	  }
	},
	//使用的组件
  components:{
		
	}
};
export default list;