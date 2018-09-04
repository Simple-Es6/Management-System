let list = {
  	name: 'HelloWorld',
  	data () {
    	return {
      		nickname:'',
			music_picture:''
      		
    	}
  	},
  	//组件生成时执行事件
  	created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		upLoadStart(e){
			let that = this;
			that.upImg(that.upIndex,e.target.files[0]);
		}
	},
	//使用的组件
  	components:{
		
	}
};
export default list;