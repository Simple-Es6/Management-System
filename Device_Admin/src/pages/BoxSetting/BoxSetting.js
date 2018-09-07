let list =  {
  name: 'BoxSetting',
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
      loadTrue:true,
      reg:/^(((19[0-9]{1})|(17[0-9]{1})|(16[0-9]{1})|(14[0-9]{1})|(13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
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
			let that = this,
			phone = that.dataObj.warningPhone;
			if(phone!=''&&that.reg.test(phone)){
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
    	}else{
    		that.$message.error('手机号输入错误');
    	};
						
			
			
		}
	}
};
export default list;