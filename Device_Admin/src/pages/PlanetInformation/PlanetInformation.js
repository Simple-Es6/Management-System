 let list = {
   	name: 'PlanetInformation',
   	data () {
    	return {
      		
			music_picture:'',
			msyShow:0,
			head_portrait:'',
			nickname:'',
			planet_name:'',
			signature:'',
			specialcount:'',
			musiccount:'',
			musicusercount:'',
			planetusercount:'',
			examineuser:'',
			fensicount:'',
			pic_url:'',
			userid:'',
			background_url:'',
			starrysky_id:'',
			upImg:'',
			uploadtype:1,
			planetName:'',
			edit_head_portrait:'',
			edit_nickname:'',
			edit_planetName:'',
			edit_background_url:'',
			edit_signature:'',
			edit_pic_url:''
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
		changType(type){
			this.uploadtype = type;
		},
		getData(){
			let _this = this;
            _this.$axios('post', _this.Global.PATH1.querystarmastuser, {}, res => {
                if (res.code == 200) {
					_this.head_portrait = res.data.head_portrait;
					_this.nickname=res.data.nickname;
					_this.planet_name=res.data.planet_name;
					_this.signature=res.data.signature;
					_this.specialcount=res.data.specialcount;
					_this.musiccount=res.data.musiccount;
					_this.musicusercount=res.data.musicusercount;
					_this.planetusercount=res.data.planetusercount;
					_this.examineuser=res.data.examineuser;
					_this.fensicount=res.data.fensicount;
					_this.pic_url=res.data.pic_url;
					_this.userid=res.data.userid;
					_this.planet_id=res.data.planet_id;
					_this.starrysky_id=res.data.starrysky_id;
					_this.planetName=res.data.planet_name;
					_this.edit_head_portrait=res.data.head_portrait;
					_this.edit_nickname=res.data.nickname;
					_this.edit_pic_url=res.data.pic_url;
					_this.edit_planetName=res.data.planet_name;
					_this.edit_signature=res.data.signature;
					_this.edit_background_url=res.data.background_url;
                 }
			});
			
		},
		closeMsy(){
			this.msyShow = 0;
		},
		alter(){
			let _this=this;
			let params={
					userid:_this.userid,
					nickname:_this.edit_nickname,
					head_portrait:_this.edit_head_portrait,
 			}
			if(_this.msyShow==1){
				_this.$axios('post', _this.Global.PATH1.updatemastuserbyid, params, res => {
					if (res.code == 200) {
						_this.$message('提交成功');
						_this.msyShow = 0;
						_this.nickname=_this.edit_nickname;
						_this.head_portrait=_this.edit_head_portrait;
					}
				});
 			}else{
				let params={
					planet_id:_this.planet_id,
					planet_name:_this.edit_planetName,
					background_url:_this.background_url,
					signature:_this.edit_signature,
					pic_url:_this.edit_pic_url,
				}
				_this.$axios('post', _this.Global.PATH1.updateplantbyid, params, res => {
					if (res.code == 200) {
						_this.$message('提交成功');
						_this.msyShow = 0;
						_this.planet_name=_this.edit_planetName;
						
						_this.signature=_this.edit_signature;
						_this.pic_url=_this.edit_pic_url;
					}
					
				});
			}
			
		},
		showMsy(type){
			let _this=this;
			_this.msyShow = type;
			if(type==1){
				_this.$axios('post', _this.Global.PATH1.querystarmastuserbyid, {}, res => {
					if (res.code == 200) {
						_this.head_portrait = res.data.head_portrait;
						_this.nickname=res.data.nickname;
					}
				});
			}else{
				let params={
					planet_id:_this.starrysky_id 
				}
				_this.$axios('post', _this.Global.PATH1.queryplantbyid, params, res => {
					if (res.code == 200) {
						_this.planet_id = res.data.planet_id;
						_this.planet_name=res.data.planet_name;
						_this.pic_url=res.data.pic_url;
						_this.background_url=res.data.background_url;
						// _this.signature=res.data.signature;
					}
				});
			}
			
			// this.msyShow = type;
		},
		upLoadStart(e){
			let _this = this;
			_this.$axios2('post',_this.Global.PATH.upload,{
				'mufile':e.target.files[0]
			},function(res){
				if(res.code==200){
					if(_this.uploadtype==1){
						_this.edit_head_portrait=res.url;
					}else if(_this.uploadtype==2){
 						_this.edit_pic_url= res.url;
					}else{
						_this.background_url= res.url;
					};
					
				};
			});
			
			// _this.upImg(_this.upIndex,e.target.files[0]);
		}
	},
	//使用的组件
   	components:{
 		
 	}
 };
 export default list;