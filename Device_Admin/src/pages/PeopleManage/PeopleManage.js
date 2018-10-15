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
            radio:'',
            qushilist:[],
            jumincount:'',
            times:[],
            income_decibel:[],
            axis:{
	    		times:[],
	    		income_decibel:[]
	    	},
        }
    },
    //组件生成时执行事件
  	created:function(){
        this.getData(1);
	},
	//页面渲染完成事件
	mounted(){
		this.changeData();
	},
	//方法
	methods:{
        changeData(){
            this.myChart1 = this.$echarts.init(this.$refs.dataEchars);
            this.myChart1.setOption({
                xAxis: {
                    type: 'category',
                    data: this.axis.times,
                },
                yAxis: {
                    type: 'value'
                },
                tooltip: {
			        trigger: 'axis'
			    },
                series: [{
                    data: this.axis.income_decibel,
                    type: 'line',
                    // 显示数值
                    itemStyle : { normal: {label : {show: true}}}
                }]
            });
        },
		getData(num){
            let _this=this;
            let params={
                startRecord:num,
                pageSize:_this.everyPageCount,
            };
            _this.$axios('post', _this.Global.PATH1.queryjumin, params, res => {
                if (res.code == 200) {
                    _this.tableData = res.juminlist;
                    _this.qushilist=res.qushilist;
                    _this.jumincount=res.jumincount;
                    
                    res.qushilist.reverse().forEach(function(ele) {
                        _this.axis.times.push(ele.times);
                        _this.axis.income_decibel.push(ele.income_decibel);
                        _this.changeData()
                    });
                }
            });
        }
	},
	//使用的组件
  	components:{
		
	}
}

export default list;