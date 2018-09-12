<template>
  <div>
  	<div class="el-breadcrumb">
  			<span @click="route1()">首页</span>
  			<span v-if="page.length>0">/</span>
  			<span @click="route(page[0].path)"  v-if="page.length>0">{{page[0].name}}</span>
  			<span v-if="page.length>1">/</span>
  			<span v-if="page.length>1">{{page[1].name}}</span>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'PageTitle',
  data () {
    return {
      page:[],
      showType:''
    }
  },
  //计算属性
  computed:{
  	getUserIcons() {
    	return this.$store.state.pagetitle;
  	}
  },
  created:function(){
		this.showType = this.$store.state.login; 
	},
	//方法
	methods:{
		route(str){
			let arr = [
				{
					'name':this.page[0].name,
					'path':this.page[0].path
				}
			];
			this.$store.dispatch('changePage',arr);
			this.$router.replace({path:str});
		},
		route1(){
			switch (this.showType){
				case 1:
					this.$router.replace({path:'/home/AdminPage'});
					break;
				case 2:
					this.$router.replace({path:'/home/Artist'});
			}
			this.$store.dispatch('changePage',[]);
			
		}
	},
	watch: {
	  getUserIcons: function(li) { //li就是改变后的wifiList值
	   	this.page = li;
   	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-breadcrumb{
		cursor: pointer;
		font-size: 16px;
	}
</style>
