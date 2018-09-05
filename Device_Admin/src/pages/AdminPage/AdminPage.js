let list ={
  name: 'AdminPage',
  data () {
    return {
      PieChart1:{
      	legendData:[
      			'0-10分钟',
      			'10-30分钟',
      			'30-60分钟',
      			'60分钟上'
      	],
      	seriesData:[
      			{
      				name:'0-10分钟',
      				value:20
      			},
      			{
      				name:'10-30分钟',
      				value:20
      			},
      			{
      				name:'30-60分钟',
      				value:20
      			},
      			{
      				name:'60分钟上',
      				value:20
      			}
      	]
      },
      PieChart2:{
      	legendData:[
      			'0-10分钟',
      			'10-30分钟',
      			'30-60分钟',
      			'60分钟上'
      	],
      	seriesData:[
      			{
      				name:'0-10分钟',
      				value:20
      			},
      			{
      				name:'10-30分钟',
      				value:20
      			},
      			{
      				name:'30-60分钟',
      				value:20
      			},
      			{
      				name:'60分钟上',
      				value:20
      			}
      	],
      	
      },
      myChart1:'',
      myChart2:'',
    }
  },
  //组件生成时执行事件
  created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		console.log(this.$refs);
		this.myChart1 = this.$echarts.init(this.$refs.AdPieChart1);
		this.myChart2 = this.$echarts.init(this.$refs.AdPieChart2);
		
	},
	//方法
	methods:{
		getData(){
			
		}
	},
	//使用的组件
  components:{
		
	}
};
export default list;