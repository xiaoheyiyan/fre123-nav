export const RESOURCE_TYPE_SEARCH = 'search'
export const RESOURCE_TYPE_NOVELS = 'novels'
export const RESOURCE_TYPE_EBOOKS = 'ebook'
export const RESOURCE_TYPE_CARICATURE = 'caricature'
export const RESOURCE_TYPE_DRAMA_SERIES = 'drama_series'
export const RESOURCE_TYPE_WEB_DISK = 'web_disk'
export const RESOURCE_TYPE_MUSIC = 'music'
export const RESOURCE_TYPE_MOVIES = 'movies'
export const RESOURCE_TYPE_AI_TOOL = 'ai_tool'
export const RESOURCE_TYPE_GPT = 'gpt'

export const RESOURCE_CONFIG = {
	[RESOURCE_TYPE_SEARCH]: {
		name: '综合',
		is_show: true,
		list: [
			{
				name: '谷歌',
				url: 'https://google.com/search?igu=1&q={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/26/6563038539819.png',
				is_show: true,
			},
			{
				name: '必应',
				url: 'https://cn.bing.com/search?q={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/26/65630386088eb.png',
				is_show: true,
			},
			{
				name: '百度',
				url: 'https://www.baidu.com/s?wd={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/26/656303de24efc.png',
				is_show: true,
			},
			{
				name: '搜狗|微信',
				url: 'https://weixin.sogou.com/weixin?query={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/20/65d4bc3f1dbcd.ico',
				is_show: true,
			},
			{
				name: 'duckduckgo',
				url: 'https://duckduckgo.com/?q={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/22/65ae2b2740867.ico',
				is_show: true,
			},
			{
				name: 'presearch',
				url: 'https://presearch.com/search?q={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/22/65ae2a5e16b04.png',
				is_show: true,
			},
			{
				name: 'devv.ai',
				url: 'https://devv.ai/zh/search/{keyword}',
				icon: 'https://img.fre123.com/i/2024/01/25/65b26106a8645.png',
				is_show: true,
			},
			{
				name: 'nona',
				url: 'https://www.nona.de?q={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/22/65ae2b62e27c0.png',
				is_show: false,
			},
			{
				name: 'yandex',
				url: 'https://yandex.com/search/?text={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/21/65d4f90636b89.ico',
				is_show: true,
			},
		],
	},
	[RESOURCE_TYPE_MOVIES]: {
		name: '影视',
		is_show: true,
		list: [
			{
				name: '注视影视',
				url: 'https://gaze.run/filter?search={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561ae9a7b3d3.png',
				is_show: true,
			},
			{
				name: 'HDmoli',
				url: 'https://www.hdmoli.pro/search.php?searchword={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561ae6e55df8.png',
				is_show: true,
			},
			{
				name: 'LIBVIO',
				url: 'https://www.libvio.fun/search/-------------.html?wd={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/06/659829e49995c.png',
				is_show: true,
			},
			{
				name: 'NO 视频',
				url: 'https://www.novipnoad.net/?s={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/06/65983049921a2.png',
				is_show: true,
			},
			{
				name: '好看123',
				url: 'https://haokan123.icu/index.php/vod/search.html?wd={keyword}',
				icon: 'https://img.fre123.com/i/2023/12/13/6579cc2dab874.png',
				is_show: true,
			},
			{
				name: '大米星球',
				url: 'https://dmflm.com/vodsearch/-------------.html?wd={keyword}',
				icon: 'https://img.fre123.com/i/2023/12/14/657b1c91ce756.png',
				is_show: true,
			},
			{
				name: '555电影',
				url: 'https://55vid.shop/vodsearch/-------------.html?wd={keyword}',
				icon: 'https://img.fre123.com/i/2023/12/14/657b21e08c6f0.png',
				is_show: true,
			},
			{
				name: '鱼塘社',
				url: 'https://tv.yutangshe.com/vod/search.html?wd={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/21/65d5fae48a37b.png',
				is_show: true,
			},
		],
	},
	[RESOURCE_TYPE_DRAMA_SERIES]: {
		name: '番剧',
		is_show: true,
		list: [
			{
				name: '动漫搜',
				url: 'https://www.fre123.com/anime/s?query={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/65619e8022505.png',
				is_show: true,
			},
			{
				name: 'AGE 动漫',
				url: 'https://www.agedm.org/search?query={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561b8413511a.png',
				is_show: true,
			},
			{
				name: '樱花动漫',
				url: 'https://www.iyhdmm.com/s_all?ex=1&kw={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561b85abc481.png',
				is_show: true,
			},
			{
				name: '怡萱动漫',
				url: 'https://www.iyxdm.cc/search.html?title={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561b8916d0e7.jpg',
				is_show: true,
			},
			{
				name: 'E站',
				url: 'https://www.ezdmw.site/Index/search.html?searchText={keyword}',
				icon: 'https://img.fre123.com/i/2023/12/13/6579a72d755f8.png',
				is_show: true,
			},
			{
				name: '蜜糖动漫',
				url: 'https://www.mitang.tv/mitang-s/wd/{keyword}',
				icon: 'https://img.fre123.com/i/2024/02/21/65d60ba7f0742.webp',
				is_show: true,
			},
			{
				name: 'bimi 动漫',
				url: 'http://www.bimiacg10.net/vod/search/wd/{keyword}',
				icon: 'https://img.fre123.com/i/2023/12/14/6579d63c89c74.png',
				is_show: true,
			},
			{
				name: '异世界动漫',
				url: 'https://www.mikudm.com/index.php/vod/search.html?wd={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561b8a56cb6e.png',
				is_show: true,
			},
			{
				name: '风车动漫',
				url: 'https://dm530.org/search?q={keyword}',
				icon: 'https://img.fre123.com/i/2023/12/13/6579a6860c978.ico',
				is_show: false,
			},
		],
	},
	[RESOURCE_TYPE_CARICATURE]: {
		name: '漫画',
		is_show: true,
		list: [
			{
				name: '包子漫画',
				url: 'https://cn.baozimh.com/search?q={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561b8d372fc7.png',
				is_show: true,
			},
			{
				name: 'yymanhua',
				url: 'https://www.yymanhua.com/search?title={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/15/65a4260f700e0.ico',
				is_show: true,
			},
			{
				name: '漫畫狗',
				url: 'https://dogemanga.com/?q={keyword}',
				icon: 'https://img.fre123.com/i/2023/12/14/6579d8ec4fc48.png',
				is_show: true,
			},
			{
				name: '漫画DB',
				url: 'https://www.manhuadb.com/search?q={keyword}',
				icon: 'https://img.fre123.com/i/2023/11/25/6561b8d372fc7.png',
				is_show: true,
			},
			{
				name: '大树漫画',
				url: 'https://www.dashumanhua.com/search?types=comic&searhword={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/15/65a426b0960dd.ico',
				is_show: true,
			},
			{
				name: '漫画柜',
				url: 'https://www.manhuagui.com/s/{keyword}.html',
				icon: 'https://img.fre123.com/i/2024/01/18/65a81b8a17df5.jpg',
				is_show: false,
			},
			{
				name: '新新漫画',
				url: 'https://so.77mh.nl/k.php?k={keyword}',
				icon: 'https://img.fre123.com/i/2023/12/14/6579d9092cf1b.png',
				is_show: true,
			},
			{
				name: '动漫啦',
				url: 'https://www.dongman.la/manhua/so/{keyword}',
				icon: 'https://img.fre123.com/i/2023/12/14/6579d920340ea.png',
				is_show: true,
			},
			{
				name: 'komiic',
				url: 'https://komiic.com/search/{keyword}',
				icon: 'https://img.fre123.com/i/2023/12/26/6589e4f0c0c8c.png',
				is_show: false,
			},
		],
	},

	[RESOURCE_TYPE_EBOOKS]: {
		name: '书籍',
		is_show: true,
		list: [
			{
				name: '微信读书',
				url: 'https://weread.qq.com/web/search/books?keyword={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/21/65d4ed7d38bd2.ico',
				is_show: true,
			},
			{
				name: '相识',
				url: 'https://www.xiangshibook.com/search?kw={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/22/65d75b840fb18.ico',
				is_show: true,
			},
			{
				name: 'Liber3',
				url: 'https://liber3.eth.limo/#/search?q={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/21/65d4eefd181f7.ico',
				is_show: true,
			},
			{
				name: '安娜的档案',
				url: 'https://zh.annas-archive.org/search?q={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/22/65d75d4d42da8.png',
				is_show: true,
			},
			{
				name: 'SoBooks',
				url: 'https://sobooks.net/search/{keyword}',
				icon: 'https://img.fre123.com/i/2024/02/22/65d75a52a7fcc.ico',
				is_show: true,
			},
			{
				name: '搬书匠',
				url: 'http://www.banshujiang.cn/e_books/search/page/1?searchWords={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/21/65d5f4f51c928.ico',
				is_show: true,
			},
			{
				name: '书葵网',
				url: 'https://www.shukui.net/so/search.php?q={keyword}',
				icon: 'https://img.fre123.com/i/2024/02/19/65d22d38f2c44.ico',
				is_show: true,
			},
		],
	},
	[RESOURCE_TYPE_NOVELS]: {
		name: '小说',
		is_show: true,
		list: [
			{
				name: 'owllook',
				url: 'https://www.owlook.com.cn/search?wd={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/16/65a65c0de39e6.ico',
				is_show: true,
			},
			{
				name: '聚小说',
				url: 'https://www.juxiaoshuo.net/page/search?query={keyword}&source=1',
				icon: 'https://img.fre123.com/i/2024/02/22/65d760a4bf263.ico',
				is_show: true,
			},
			{
				name: '燃文小说网',
				url: 'https://www.ygshu.com/dfhdfdfhdfh.php?ie=gbk&q={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/16/65a56b8693096.jpg',
				is_show: true,
			},
			{
				name: '全本小说网',
				url: 'https://www.quanben.io/index.php?c=book&a=search&keywords={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/16/65a56afec4dee.ico',
				is_show: true,
			},
			{
				name: '读小说吧',
				url: 'http://www.duxs8.com/modules/article/search.php?searchtype=articlename&searchkey={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/16/65a566725894f.ico',
				is_show: true,
			},
			{
				name: '知轩藏书',
				url: 'https://zxcs.info/index.php?keyword={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/16/65a56cd10e169.jpg',
				is_show: true,
			},
			{
				name: '笔趣看',
				url: 'https://bqg123.net/search?form=biqusoso&keyword={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/16/65a56064bfe91.ico',
				is_show: true,
			},
		],
	},
	[RESOURCE_TYPE_WEB_DISK]: {
		name: '网盘',
		is_show: true,
		list: [
			{
				name: '海盗湾',
				url: 'https://thepiratebay10.info/search/{keyword}',
				icon: 'https://img.fre123.com/i/2024/01/05/6596efebb32ca.png',
				is_show: false,
			},
			{
				name: '狸猫盘搜',
				url: 'https://alipansou.com/search?k={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/04/65959eb813cb0.png',
				is_show: true,
			},
			{
				name: '秒搜',
				url: 'https://miaosou.fun/info?searchKey={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/15/65a42165e8b35.png',
				is_show: true,
			},
			{
				name: 'PanSearch',
				url: 'https://www.pansearch.me/search?keyword={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/15/65a5494651842.png',
				is_show: true,
			},
			{
				name: 'SearchSearchGo',
				url: 'https://ssgo.app/?page=1&query={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/30/65b7db46bb861.png',
				is_show: true,
			},
			{
				name: '趣盘搜',
				url: 'https://pan.funletu.com/#/s/{keyword}/1.html',
				icon: 'https://img.fre123.com/i/2024/01/04/65959ec988ff4.png',
				is_show: true,
			},
			{
				name: '小盘盘',
				url: 'https://xpanpan.site/?s={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/30/65b7dbf7a97b8.png',
				is_show: true,
			},
			{
				name: 'YaPan',
				url: 'https://yapan.io/search?keyword={keyword}',
				icon: 'https://img.fre123.com/i/2024/01/16/65a55c4e7fe22.png',
				is_show: true,
			},
		],
	},
}
