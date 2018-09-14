<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
        	<div class="pagetitle">
        		<v-title></v-title>
        	</div>
        	<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>

        </div>
    </div>
</template>

<script>
	import vTitle from '../components/PageTitle.vue'
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar,vTitle
        }
    }
</script>
<style scoped>
	.content{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		padding-top: 70px;
		padding-left: 220px;
		padding-right:40px;
		padding-bottom: 50px;
		overflow-y: scroll;
	}
	.pagetitle{
		padding:10px 0 20px 0;
	}
</style>