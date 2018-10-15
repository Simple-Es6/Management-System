
let list={
    name: 'attend',
  data () {
    return {
      value2:true,
      form:{},
      time:[],
      radio3:0,
      data:'',
      list:[
          {key:'1',value:'28'},
          {key:'2',value:'48'},
          {key:'3',value:'88'},
          {key:'4',value:'168'},
          {key:'5',value:'248'},
          {key:'6',value:'388'},
          {key:'7',value:'528'},
      ],
      tableData:[],
      downIcon:true,
      total: 0,
      page: 1,
      everyPageCount: 10,
      id:'',
      isEnable:'',
    }
  },
  //组件生成时执行事件
  created:function(){
      
      this.getData();
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		add(){
            this.list.push({key:'15',value:'1000'});
        },
        save(){
            let _this=this;
            let params={
                id:_this.id,
                isEnable:_this.isEnable,
                activeName:_this.form.activeName,
                sharingCopy:_this.form.sharingCopy,
                startTime:_this.time[0],
                endTime:_this.time[1],
                activeDescription:_this.form.activeDescription,
                rewardType:_this.form.rewardType,
                siType:_this.form.siType

            };
            _this.$axios('post',_this.Global.PATH1.update,params,res => {
                if(res.code==200){

                }
            });
        },
        getData(){
            let _this=this;
            let params={};
            _this.$axios1('post', _this.Global.PATH1.siruleGet, params, res => {
                if (res.code == 200) {
                   _this.form=res.data;
                   _this.time=[_this.Global.oTime(res.data.startTime),_this.Global.oTime(res.data.endTime)];
                  _this.id=res.data.id;
                  _this.isEnable=res.data.isEnable;
                }
            })
        },
        changePage(){
            this.downIcon=!this.downIcon;
            this.signIn(1);
        },
        del(index){
            this.list.splice(index,1);
        },
        handleSizeChange(val) {
            this.everyPageCount = val
        },
        handleCurrentChange(val) {
            this.getData(val);
        },
        signIn(num){
            let _this = this;
            let params={
                pageNum:num,
                pageSize:this.everyPageCount,
            }
            _this.$axios1('post', _this.Global.PATH1.statistics, params, res => {
                if (res.code == 200) {
                    _this.tableData=res.data.siStatisticsList;
                    _this.data=res.data;
                    _this.total = res.data.count;
                }
            })
        }
	},
	//使用的组件
  components:{
		
	}
}
export default list;