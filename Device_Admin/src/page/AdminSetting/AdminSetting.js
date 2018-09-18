let list =  {
  name: 'AdminSetting',
  data () {
    return {
      dataObj:{
			  "allBlackPearl": 0,
			  "bindingLimit": 0,
			  "complete": 0,
			  "del": 0,
			  "estimatedDays": 0,
			  "firstWarning": 0,
			  "id": "",
			  "isEnable": 0,
			  "noComplete": 0,
			  "secondWarning": 0,
			  "smCount": 0,
			  "thirdWarning": 0,
			  "warningPhone": ""
      },
      loadTrue:true
    }
  },
  //组件生成时执行事件
  created:function(){
  	let that = this;
  	that.$axios('post',that.Global.PATH.getRule,{},function(res){
  		if(res.code==200){
  			that.dataObj = res.data;
  		};
  	});
	},
	//方法
	methods:{
		subMit(){
			if(this.loadTrue==false){return false};
			that.loadTrue = false;
			that.$axios('post',that.Global.PATH.bpRule,that.dataObj,function(res){
	  		if(res.code==200){
	  			that.$message({
	          message: '修改成功',
	          type: 'success'
	        });
	  		};
	  		that.loadTrue = true;
	  	});
		}
	}
};
export default list;