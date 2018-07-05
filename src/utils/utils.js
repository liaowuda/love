import { eventApi } from "@/api/index";
let Base64 = require('js-base64').Base64;
var u = navigator.userAgent;
var ua = u.toLowerCase(); //获取判断用的对象
var up = navigator.appVersion; // 获取版本信息
/**
 * IOS判断
 */
export const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
/**
 * Android判断
 */
export const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1

/**
 * 微信判断
 */
export const isWechat = ua.match(/MicroMessenger/i) == "micromessenger"

/**
 * 微博判断
 */
export const isWeibo = ua.match(/WeiBo/i) == "weibo"

/**
 * QQ判断
 */
export const isQQ = ua.match(/QQ/i) == "qq"

/**
 * 是否是手机浏览器
 */
export const isBrowser = up.indexOf("Browser") > -1

/**
 * IOS手机且非万象app端的其他webview
 */
export const isSafari = up.indexOf("Safari") > -1 && isiOS

/**
 * 微信分享
 */
// var up = navigator.appVersion; // 获取版本信息
var baseUrl = window.location.protocol + "//" + window.location.host + "/";
var shareTitle, shareContent, shareImageUrl, share_url;
export const wxShare = (type) => {
	var localMallNo = localStorage.mallNo;
	if (type === 'home') {
		shareTitle = "有一种默契叫天生一对";
		shareContent = "感情有多深，测了表心真，随测附赠情人节最佳礼物清单！";
		shareImageUrl = baseUrl + "nivote/images/appLogo.png";
		share_url = baseUrl + "nivote/valentineMatch/#/home?mallNo=" + localMallNo;
	} else if (type === 'invitation') {
		var localRoundNo = localStorage.roundNo;
		shareTitle = "有一种默契叫天生一对";
		shareContent = "北鼻~您有一份甜蜜的默契测试邀请，请速速来接收！";
		shareImageUrl = baseUrl + "nivote/images/appLogo.png";
		share_url = baseUrl + "nivote/valentineMatch/#/invitation?mallNo=" + localMallNo + "&roundNo=" + localRoundNo;
		// console.log(share_url);
	}
	wx.ready(function () {
		wx.onMenuShareTimeline({
			title: shareTitle, // 分享标题
			link: share_url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			imgUrl: shareImageUrl, // 分享图标
			success: function () {
				// 用户确认分享后执行的回调函数
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		});

		wx.onMenuShareAppMessage({
			title: shareTitle, // 分享标题
			desc: shareContent, // 分享描述
			link: share_url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			imgUrl: shareImageUrl, // 分享图标
			type: "", // 分享类型,music、video或link，不填默认为link
			dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
			success: function () {
				// 用户确认分享后执行的回调函数
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		});
	});
}

export const eventClick = (enterData) => {
	// console.log(enterData);
	let enterDataJsonString = JSON.stringify(enterData);
	// console.log(enterDataJsonString);
	let base64Data = Base64.encode(enterDataJsonString);
	// console.log(base64Data);
	let data1 = base64Data.replace(/c/g, '%');
	let data2 = data1.replace(/a/g, 'c');
	let endData = {
		event: data2
	};
	eventApi(endData).then(res => {
	});
}
