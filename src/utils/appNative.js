
// import router from '../router';
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

var baseUrl = window.location.protocol + "//" + window.location.host + '/';

localStorage.mallNo = getUrlParam('mallNo');
var localMallNo = localStorage.mallNo;
if (localMallNo == '' || localMallNo == undefined || localMallNo == 'null') {
    alert('mallNo为空');
}

// 获取url参数
function getUrlParam(name) {
    var params = decodeURI(window.location.href);
    var reg = new RegExp("(^|&|/?)" + name + "=([^&#]*)(&|$|)");
    var r = params.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

// 获取一点万象登录token回调
window.getToken = function (res) {
    if (res && res != '') {
        localStorage.token = res;
        // let user = {
        //     name: "万象会员",
        //     img: "http://test.myclhc.com/frontEnd/nivote/images/appLogo.png"
        // }
        // user = JSON.stringify(user);
        // window.localStorage.setItem('appUser',user);
        // router.push("/invitation");
    } else {
        localStorage.removeItem('token');
        // window.goLogin();
    }
};

// 一点万象登录
window.goLogin = function () {
    localStorage.removeItem("token");
    try {
        if (isAndroid) {
            AndroidWebInterface.login();
        } else if (isiOS) {
            window.webkit.messageHandlers.login.postMessage(null);
        }
    } catch (err) {

    }
};

// 获取一点万象登录token
window.restratGetToken = function () {
    try {
        if (isAndroid) {
            AndroidWebInterface.mixcAppGetUserInfo('token', 'getToken');
        } else if (isiOS) {
            window.webkit.messageHandlers.mixcAppGetUserInfo.postMessage(null);
        }
    } catch (err) {
        // alert('一点万象APP中打开');
    }
};

var shareTitle, shareContent, shareImageUrl, share_url;
window.appShareAll = function (type) {
    if (type === 'home') {
        shareTitle = "有一种默契叫天生一对";
        shareContent = "感情有多深，测了表心真，随测附赠情人节最佳礼物清单！";
        shareImageUrl = baseUrl + "nivote/images/appLogo.png";
        share_url = baseUrl + "nivote/valentineMatch/#/home?mallNo=" + localMallNo;
        // console.log(share_url);
    } else if (type === 'invitation') {
        var localRoundNo = localStorage.roundNo;
        shareTitle = "有一种默契叫天生一对";
        shareContent = "北鼻~您有一份甜蜜的默契测试邀请，请速速来接收！";
        shareImageUrl = baseUrl + "nivote/images/appLogo.png";
        share_url = baseUrl + "nivote/valentineMatch/#/invitation?mallNo=" + localMallNo + "&roundNo=" + localRoundNo;
        // console.log(share_url);
    }
}
// 一点万象APP android ios 界面右上角出现分享图标或者分享文字
window.appShare = function () {
    try {
        if (isAndroid) {
            // 一点万象APP android 界面右上角出现分享图标并设置对应分享文案
            window.AndroidWebInterface.setShareContent(share_url, shareTitle, shareContent, shareImageUrl);
        } else if (isiOS) {
            // 一点万象APP ios 界面右上角出现分享文字，自动调用shareButtonClick方法设置分享文案。
            window.webkit.messageHandlers.shareButtonShow.postMessage({ show: true });
        }
    } catch (err) {

    }
};
// 一点万象APP ios设置分享文案
window.shareButtonClick = function () {
    window.webkit.messageHandlers.onShareClick.postMessage({ shareUrl: share_url, shareTitle: shareTitle, shareContent: shareContent, shareImageUrl: shareImageUrl });
}
// }


// 一点万象APP ios点击按钮调起分享
window.onShareClick = function (shareTitle1, shareContent1, shareImageUrl1, share_url1) {
    window.webkit.messageHandlers.onShareClick.postMessage({ shareUrl: share_url1, shareTitle: shareTitle1, shareContent: shareContent1, shareImageUrl: shareImageUrl1 });
}

// 百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?1eff7734c616df5cccceaafcf63b085b";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

