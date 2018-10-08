let tou1 = 'http://47.105.38.148:8081/futuremelody-admin/',
	tou = 'http://47.105.38.148:8081/futuremelody-admin/',
	prefix1 = 'http://47.105.38.148:8081/futuremelody-admin/',
	PATH = {
	disableuser:tou+'/disableuser',//禁用用户
	openuser:tou+'/openuser',//启用用户
	deleteuser:tou+'/deleteuser',//删除用户
	queryuserlist:tou+'/queryuserlist',//获取用户列表
	getRule:tou1+'bpRule/getRule',//获取规则
	bpRule:tou1+'bpRule/update',//修改规则
	prlist: tou1+'pr/list',//获取小未听歌记录
	snlist: tou1+'xw/list',//sn管理列表
	xwlist: tou1+'xw/xwlist',//音箱列表
	updateUntied: tou1+'xw/updateUntied',//解绑音箱
	getBpDr: tou1+'bp/getBpDr',//获取黑珍珠分配明细
	getBpByUserName: tou1+'bp/getBpByUserName',//根据用户手机号获取黑珍珠分配记录明细
	getSameDayBpDr: tou1+'bp/getSameDayBpDr',//获取当天黑珍珠明细
	getXwLeaderboard:tou1+'bp/getXwLeaderboard',//获取音响排行榜
	getBpByMac:tou1+'bp/getBpByMac',//根据mac地址获取黑珍珠分配记录明细
	addfuspecial:tou+'specials/addfuspecial',//添加专题
	querystartMusiclist:tou+'querystartMusiclist',//获取星歌列表
	addStarMusic:tou1+'starMusic/addStarMusic',//添加星歌
	querystartMusicdetail:tou+'querystartMusicdetail',//星歌详情
	getSystemMusicPageInfo:tou1+'starMusic/getSystemMusicPageInfo',//添加星歌
	upload:tou+'upload',//上传图片
	uploadmusic:tou+'uploadmusic',//上传音乐
	uploadlrc:tou+'uploadlrc',//上传歌词
	addSpecialmusic:tou+'specials/addSpecialmusic',//上传专题音乐
	queryspleByid:tou+'queryspleByid',//专辑详情
	updatesple:tou+'updatesple',//修改专题
	queryfensilist:tou+'queryfensilist',//粉丝列表
	querymusicusershouyi:tou+'starmastuser/querymusicusershouyi',//收入列表
	updatemusicdetail:tou + '/updatemusicdetail', //修改音乐
	queryzoushitu:tou+'/starmastuser/queryzoushitu',//获取收入折线图
	queryuserProfit:tou+'/starmastuser/queryuserProfit',//音乐人收益排行
	queryuserProfitxiangqing:tou+'/starmastuser/queryuserProfitxiangqing'//音乐人收益详情
};
export  default PATH;
