//let tou = 'http://47.105.38.148:8081/futuremelody-admin/',
let tou = '';
//const tou = 'http://47.105.38.148:8081/futuremelody-admin/';
switch (process.env.NODE_ENV){
	case 'production':
		tou = 'http://47.105.38.148:8081/futuremelody-admin/';
		break;
	case 'testing':
		tou = 'http://120.79.183.36:8081/futuremelody-admin/';
		break;
	default:
		tou = 'http://120.79.183.36:8081/futuremelody-admin/';
		break;
};
let	PATH = {
		cmanagegetone:tou+'cmanage/getone',//获取单一币种
		cmanagesave:tou+'cmanage/save',//添加币种
		cmanageupdate:tou+'cmanage/update',//修改币种
		cmanagelist:tou+'cmanage/list',//币种列表
		xwcurrencys:tou+'xw/currencys',//根据音响获取其参与的币种
		xwcurrencyupadte:tou+'xw/currency/upadte',//更新音响其参与的币种
		queryguanliyuan:tou+'queryguanliyuan',//管理员首页数据
		colseuser:tou+'user/colseuser',//退出登录
		disableuser:tou+'disableuser',//禁用用户
		openuser:tou+'openuser',//启用用户
		deleteuser:tou+'deleteuser',//删除用户
		queryuserlist:tou+'/queryuserlist',//获取用户列表
		getRule:tou+'bpRule/getRule',//获取规则
		bpRule:tou+'bpRule/update',//修改规则
		prlist: tou+'pr/list',//获取小未听歌记录
		snlist: tou+'xw/list',//sn管理列表
		xwlist: tou+'xw/xwlist',//音箱列表
		updateUntied: tou+'xw/updateUntied',//解绑音箱
		getBpDr: tou+'bp/getBpDr',//获取黑珍珠分配明细
		getBpByUserName: tou+'bp/getBpByUserName',//根据用户手机号获取黑珍珠分配记录明细
		getSameDayBpDr: tou+'bp/getSameDayBpDr',//获取当天黑珍珠明细
		getXwLeaderboard:tou+'bp/getXwLeaderboard',//获取音响排行榜
		getBpByMac:tou+'bp/getBpByMac',//根据mac地址获取黑珍珠分配记录明细
		addfuspecial:tou+'specials/addfuspecial',//添加专题
		querystartMusiclist:tou+'querystartMusiclist',//获取星歌列表
		addStarMusic:tou+'starMusic/addStarMusic',//添加星歌
		querystartMusicdetail:tou+'querystartMusicdetail',//星歌详情
		getSystemMusicPageInfo:tou+'starMusic/getSystemMusicPageInfo',//添加星歌
		upload:tou+'upload',//上传图片
		uploadmusic:tou+'uploadmusic',//上传音乐
		uploadlrc:tou+'uploadlrc',//上传歌词
		addSpecialmusic:tou+'specials/addSpecialmusic',//上传专题音乐
		updatemusicqwe:tou+'specials/updatemusicqwe',//修改专题音乐
		queryspleByid:tou+'queryspleByid',//专辑详情
		updatesple:tou+'updatesple',//修改专题
		queryfensilist:tou+'queryfensilist',//粉丝列表
		querymusicusershouyi:tou+'starmastuser/querymusicusershouyi',//收入列表
		updatemusicdetail:tou + 'updatemusicdetail', //修改音乐
		queryzoushitu:tou+'starmastuser/queryzoushitu',//获取收入折线图
		queryuserProfit:tou+'starmastuser/queryuserProfit',//音乐人收益排行
		queryuserProfitxiangqing:tou+'starmastuser/queryuserProfitxiangqing',//音乐人收益详情
		adlist:tou+'adlist/list',//获取广告列表
		adlistoperation:tou+'adlist/operation',//获取广告列表
		adlistdelbatch:tou+'adlist/del/batch',//批量删除广告
		addictlist:tou+'addict/list',//获取广告下拉列表
		adlistsave:tou+'adlist/save',//创建广告
		adlistupdate:tou+'adlist/update',//创建广告
		adlistgetone:tou+'adlist/getone',//获取广告设置
		addictsave:tou+'addict/save',//添加渠道/范围
		addictdelete:tou+'addict/delete',//删除渠道/范围
		adlistgetPlanet:tou+'adlist/getPlanet'//获取星球列表
};
export  default PATH;
