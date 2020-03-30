define('Config',[], function() {
    return {
        opts: {
            landingWidth: 640,
            landingHeight: 1000,
            gameWidth: 640,
            gameHeight: 1000,
            base: {
                image_path: 'images/',
                title: '刮刮樂',
                backgroundImg: 'game-bg.png',
                button: 'Btn-large.png',
                logo: {
                    img: 'logo.png',
                    url: 'https://www.firstbank.com.tw/',
                    x: 10,
                    y: 0,
                },
                detail: {
                    img: 'btn.png',
                    url: 'https://www.google.com/',
                    x: 510,
                    y: 10,
                },
                header: 'header-bg.png',
                titleImg: {
                    img: 'gametitle-pic.png',
                    x: 10,
                    y: 220,

                },
                goRecord: {
                    img: 'btn2.png',
                    x: 375,
                    y: 10,
                },
                btn_style: {
                    fill: '#ffffff',
                    font: '30px NotoSansCJKtc-Medium',
                    boundsAlignH: 'center',
                    boundsAlignV: 'middle',
                },
                btn_textx: 0,
                btn_texty: 13,

            },
            landing: {
                landing_btn: {
                    x: 170,
                    y: 670,
                    text: '開始遊戲',
                    style: {
                        fill: '#ffffff',
                        font: '30px NotoSansCJKtc-Medium',
                        boundsAlignH: 'center',
                        boundsAlignV: 'middle',
                    },
                    text_x: 0,
                    text_y: 13,
                },
                //times_bg: 'times_bg.png',

            },
            game: {
                game_btn: {
                    x: 170,
                    y: 505,
                    text: '點我開刮',
                    style: {
                        fill: '#ffffff',
                        font: '30px NotoSansCJKtc-Medium',
                        boundsAlignH: 'center',
                        boundsAlignV: 'middle',
                    },
                    text_x: 0,
                    text_y: 13,
                },
                game_title: {
                    img: 'gameInfo.png',
                    x: 10,
                    y: 120,

                },
                scratch_bg: {
                    img: 'scratchcard.png',
                    x: 70,
                    y: 290,
                },
                scratch: {
                    img: 'scratchcard-mark.png',
                    x: 90,
                    y: 310,
                },
                win_bg: {
                    img: 'win-bg.png',
                    x: 90,
                    y: 317,
                },
                lose_bg: {
                    img: 'lose-bg.png',
                    x: 90,
                    y: 317,
                },
                game_record: {
                    x: 170,
                    y: 750,
                    text: '查看記錄',
                },
                win_pic: {
                    img: 'gift-pic.png',
                    x: 210,
                    y: 400,
                },
                lose_pic: {
                    img: 'lose-pic.png',
                    x: 210,
                    y: 400,
                }
            },
            // results: {
            //     win: './images/result_test.png',
            //     lose: './images/result_notest.png',
            // },
            record: {
                record_listbg: 'record_listbg.png',
                record_home: {
                    x: 170,
                    y: 750,
                    text: '返回主頁',
                },
            },

            notice: {
                coming_soon: 'coming_soon.png',
                no_award: 'no_award.png',
                no_times: 'no_times.png',
                time_out: 'time_out.png',
                defalut_error: 'defalut_error.png',
            },

            parm: {
                //landing
                landing_bgXY: [0, 0],
                landing_DetailXY: [357, 10],
                landing_RecordXY: [-150, -830],
                times_bgXY: [0, 0],
                timesTextXY: [470, 690],
                timesTextBounds: [0, 0, 90, 45],

                //game
                game_init: {
                    mMinAlphaRatio: 0.6,
                    mOldScratch: null,
                    mBtnStart: null,
                    mBtnInput: null,
                    mCanvasArea: null,
                    mCanvasFullRatio: 0,
                    mBStart: false,
                    mBFinish: false,

                },
                game_titleXY: [0, 0],
                scratch_bgXY: [0, 0],
                game_RecordXY: [0, 0],
                game_DetailXY: [0, 0],
                game_btnXY: [0, 0],
                game_HomeXY: [0, 0],

                //record
                record_DetailXY: [150, -50],
                mScroller_size: [90, 367, 520, 400], //x,y,width,height
                record_listbgXY: [0, 0],
                record_textXY: [0, 180, 330],

                //notice
                noticeXY: [0, 0],
            },
        }

    };
});
app = app || {};
define('Boot',['Config'], function(Config) {
    const gameConfig = Config.opts;
    document.title = gameConfig.base.title;
    document.body.style.background = 'url(' + gameConfig.base.image_path + gameConfig.base.backgroundImg + ')';
    document.body.style.backgroundSize = 'auto 100%';
    document.body.style.backgroundRepeat = 'repeat-x';
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.position = 'relative';

    app.Boot = function(game) {

    };
    app.Boot.prototype = {


        preload: function() {

        },
        create: function() {

            //自動縮放到可以顯示整個遊戲畫面
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //水平居中
            game.scale.pageAlignHorizontally = true;
            //停用離開畫面暫停
            game.stage.disableVisibilityChange = true;
            //同時最多載入資源數(default 4)
            game.load.maxParallelDownloads = 10;

            //產生一空白區塊讓畫面縮放
            // var bmd = game.add.bitmapData(640, 1000);
            // game.add.sprite(0, 0, bmd);
        },
        update: function() {
            game.state.start('Preloader');
        },
    }
});
app = app || {};
define('Preloader',['Config'], function(Config) {
    app.Preloader = function(game) {

    };
    app.Preloader.prototype = {
        preload: function() {
            game.load.onLoadComplete.add(this.loadComplete, this);


            this.loadAssets();

        },
        loadAssets: function() {
            const gameConfig = Config.opts;
            const path = gameConfig.base.image_path;
            //common
            game.load.image('header', path + gameConfig.base.header);
            game.load.image('btn_detail', path + gameConfig.base.detail.img);
            game.load.image('logo', path + gameConfig.base.logo.img);
            game.load.image('backgroundImg', path + gameConfig.base.backgroundImg);
            game.load.image('goRecord', path + gameConfig.base.goRecord.img);
            game.load.image('button', path + gameConfig.base.button);


            //首頁
            game.load.image('titleImg', path + gameConfig.base.titleImg.img);
            // game.load.image('landing_btn', path + gameConfig.landing.landing_btn);
            //game.load.image('times_bg', path + gameConfig.landing.times_bg);

            //遊戲頁
            game.load.image('game_title', path + gameConfig.game.game_title.img);
            game.load.image('scratch_bg', path + gameConfig.game.scratch_bg.img);
            game.load.image('scratch', path + gameConfig.game.scratch.img);
            // game.load.image('game_btn', path + gameConfig.game.game_btn);
            game.load.image('win_bg', path + gameConfig.game.win_bg.img);
            game.load.image('lose_bg', path + gameConfig.game.lose_bg.img);

            game.load.image('win_pic', path + gameConfig.game.win_pic.img);
            game.load.image('lose_pic', path + gameConfig.game.lose_pic.img);
            game.load.image('03_Awardprize_titlebg01', 'images/03_Awardprize_titlebg01.png?t=1');
            // game.load.image('btn_home', path + gameConfig.base.goHome);


            // game.load.image('', 'images/backup/.png?t=1');
            game.load.image('no_award', path + gameConfig.notice.no_award);
            game.load.image('time_out', path + gameConfig.notice.time_out);
            game.load.image('no_times', path + gameConfig.notice.no_times);
            game.load.image('defalut_error', path + gameConfig.notice.defalut_error);
            game.load.image('coming_soon', path + gameConfig.notice.coming_soon);


            game.load.image('record_listbg', path + gameConfig.record.record_listbg);
            //game.load.image('05_Record_titlebg_c', 'images/backup/05_Record_titlebg_c.png?t=1');

            // game.load.nineSlice('06_Input_Field', 'images/backup/06_Input_Field.png', 15);
            // game.load.image('06_Send_Message', 'images/backup/06_Send_Message.png');
            // game.load.image('06_Goto_Homepage', 'images/backup/06_Goto_Homepage.png');

        },
        loadComplete: function() {
            game.state.start('Landing');
        }
    }

});
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t),e=(n>>16)+(t>>16)+(r>>16);return e<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;var e,i,a,h,d,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,h=v,d=m,l=o(l,g,v,m,n[e],7,-680876936),m=o(m,l,g,v,n[e+1],12,-389564586),v=o(v,m,l,g,n[e+2],17,606105819),g=o(g,v,m,l,n[e+3],22,-1044525330),l=o(l,g,v,m,n[e+4],7,-176418897),m=o(m,l,g,v,n[e+5],12,1200080426),v=o(v,m,l,g,n[e+6],17,-1473231341),g=o(g,v,m,l,n[e+7],22,-45705983),l=o(l,g,v,m,n[e+8],7,1770035416),m=o(m,l,g,v,n[e+9],12,-1958414417),v=o(v,m,l,g,n[e+10],17,-42063),g=o(g,v,m,l,n[e+11],22,-1990404162),l=o(l,g,v,m,n[e+12],7,1804603682),m=o(m,l,g,v,n[e+13],12,-40341101),v=o(v,m,l,g,n[e+14],17,-1502002290),g=o(g,v,m,l,n[e+15],22,1236535329),l=u(l,g,v,m,n[e+1],5,-165796510),m=u(m,l,g,v,n[e+6],9,-1069501632),v=u(v,m,l,g,n[e+11],14,643717713),g=u(g,v,m,l,n[e],20,-373897302),l=u(l,g,v,m,n[e+5],5,-701558691),m=u(m,l,g,v,n[e+10],9,38016083),v=u(v,m,l,g,n[e+15],14,-660478335),g=u(g,v,m,l,n[e+4],20,-405537848),l=u(l,g,v,m,n[e+9],5,568446438),m=u(m,l,g,v,n[e+14],9,-1019803690),v=u(v,m,l,g,n[e+3],14,-187363961),g=u(g,v,m,l,n[e+8],20,1163531501),l=u(l,g,v,m,n[e+13],5,-1444681467),m=u(m,l,g,v,n[e+2],9,-51403784),v=u(v,m,l,g,n[e+7],14,1735328473),g=u(g,v,m,l,n[e+12],20,-1926607734),l=c(l,g,v,m,n[e+5],4,-378558),m=c(m,l,g,v,n[e+8],11,-2022574463),v=c(v,m,l,g,n[e+11],16,1839030562),g=c(g,v,m,l,n[e+14],23,-35309556),l=c(l,g,v,m,n[e+1],4,-1530992060),m=c(m,l,g,v,n[e+4],11,1272893353),v=c(v,m,l,g,n[e+7],16,-155497632),g=c(g,v,m,l,n[e+10],23,-1094730640),l=c(l,g,v,m,n[e+13],4,681279174),m=c(m,l,g,v,n[e],11,-358537222),v=c(v,m,l,g,n[e+3],16,-722521979),g=c(g,v,m,l,n[e+6],23,76029189),l=c(l,g,v,m,n[e+9],4,-640364487),m=c(m,l,g,v,n[e+12],11,-421815835),v=c(v,m,l,g,n[e+15],16,530742520),g=c(g,v,m,l,n[e+2],23,-995338651),l=f(l,g,v,m,n[e],6,-198630844),m=f(m,l,g,v,n[e+7],10,1126891415),v=f(v,m,l,g,n[e+14],15,-1416354905),g=f(g,v,m,l,n[e+5],21,-57434055),l=f(l,g,v,m,n[e+12],6,1700485571),m=f(m,l,g,v,n[e+3],10,-1894986606),v=f(v,m,l,g,n[e+10],15,-1051523),g=f(g,v,m,l,n[e+1],21,-2054922799),l=f(l,g,v,m,n[e+8],6,1873313359),m=f(m,l,g,v,n[e+15],10,-30611744),v=f(v,m,l,g,n[e+6],15,-1560198380),g=f(g,v,m,l,n[e+13],21,1309151649),l=f(l,g,v,m,n[e+4],6,-145523070),m=f(m,l,g,v,n[e+11],10,-1120210379),v=f(v,m,l,g,n[e+2],15,718787259),g=f(g,v,m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,h),m=t(m,d);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function h(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function d(n){return a(i(h(n),8*n.length))}function l(n,t){var r,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(h(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="0123456789abcdef",o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+=e.charAt(t>>>4&15)+e.charAt(15&t);return o}function v(n){return unescape(encodeURIComponent(n))}function m(n){return d(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define('MD5',[],function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);
//# sourceMappingURL=md5.min.js.map;
define('Util',['MD5', 'Config'], function(MD5, Config) {
    var btnLogo;
    var btnDetails;
    var btnRecord;
    const gameConfig = Config.opts;
    return {
        getParameterByName: function(name, urldecode, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            if (urldecode) return decodeURIComponent(results[2].replace(/\+/g, " "));
            return results[2].replace(/\+/g, " ");
        },
        toDataUrl: function(request) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                var reader = new FileReader();
                reader.onloadend = function() {
                    request.onSuccess(reader.result);
                }
                reader.readAsDataURL(xhr.response);
            };
            xhr.onerror = function() {
                if (request.onError) {
                    request.onError();
                }
            }
            xhr.open('GET', request.url);
            xhr.responseType = 'blob';
            xhr.send();
        },
        getHash: function(ActivityId) {
            var date = new Date();
            var guid = this.getParameterByName('guid', true);
            return MD5(date.getFullYear() + ActivityId + 's0ftm0bile' + (date.getMonth() + 1) + guid + date.getDate() + date.getHours() + date.getMinutes());
        },
        //驗證guid
        verifyGuid: function() {
            var guid = this.getParameterByName('guid', true);
            var myRe = new RegExp(/^[A-Z0-9]{26}$/);
            if (!guid || !myRe.test(guid)) {
                return false;
            }
            return true;
        },
        createButton: function(key, clickFunc, x, y) {
            var btn;
            if (clickFunc) {
                if (x != null && y != null) btn = game.add.button(x, y, key, clickFunc);
                else btn = game.add.button(0, 0, key, clickFunc);
            } else {
                if (x != null && y != null) btn = game.add.button(x, y, key);
                else btn = game.add.button(0, 0, key);
            }


            btn.input.pixelPerfectOver = true;
            btn.input.pixelPerfectClick = true;


            return btn;
        },
        createLogoButton: function() {
            game.add.image(0, 0, 'header');
            btnLogo = game.add.button(gameConfig.base.logo.x, gameConfig.base.logo.y, 'logo', onLogoClick);

            //Logo因為是文字所以需自訂點擊範圍
            btnLogo.hitArea = new Phaser.Rectangle(0, 0, 270, 90);

            function onLogoClick() {
                location.href = gameConfig.base.logo.url;
            }
        },
        createLogAndDetailsButton: function(detailsKey, recordKey) {
            if (detailsKey) {
                btnDetails = this.createButton(detailsKey, onDetailsClick, gameConfig.base.detail.x, gameConfig.base.detail.y);

            }

            if (recordKey) {
                btnRecord = this.createButton(recordKey, onRecordClick, gameConfig.base.goRecord.x, gameConfig.base.goRecord.y);
            }

            function onDetailsClick() {
                location.href = gameConfig.base.detail.url;
            }

            var self = this;

            function onRecordClick() {
                // if (self.verifyGuid()) {
                game.state.start('Record', true, false, {});
                // } else {
                // game.state.start('Notice', true, false, {});
                // }
            }
        },
        createMoreButton: function(key) {
            this.createButton(key, onMoreClick);

            function onMoreClick() {
                location.href = 'https://www.firstbank.com.tw/';
            }
        },
        disabledHeaderButton: function() {
            btnLogo.input.enabled = false;
            btnDetails.input.enabled = false;
            btnRecord.input.enabled = false;
        },
        enabledHeaderButton: function() {
            btnLogo.input.enabled = true;
            btnDetails.input.enabled = true;
            btnRecord.input.enabled = true;
        },
        ga: function(category, action, label) {
            // ga('send', 'event', category, action, label);
            // ga('softmobile.send', 'event', category, action, label);
        },
    }
});
define('Ajax',[],function () {
    return {
        get: function (request) {
            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;

            oReq.onreadystatechange = function () {

                if (oReq.readyState == 4 && (oReq.status == 200 || oReq.status == 204)) {

                    if (typeof success == 'function') {
                        console.log('GET status: ' + oReq.status + ", Url: " + url);
                        success(JSON.parse(oReq.responseText));
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        console.log('GET status: ' + oReq.status + ", Url: " + url);
                        error(oReq.status, oReq.responseText);
                    }
                }
            }

            oReq.open("get", url, true);
            oReq.send();
        },

        post: function (request) {
            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;
            var body = request.body;
            
            oReq.onreadystatechange = function () {
                if (oReq.readyState == 4 && (oReq.status == 200 || oReq.status == 201 || oReq.status == 202)) {

                    if (typeof success == 'function') {
                        success(JSON.parse(oReq.responseText));
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        error(oReq.status, oReq.responseText);
                    }
                }
            }

            oReq.open("post", url, true);
            oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            oReq.send('param=' + body);
        },

        put: function (request) {
            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;
            // var head = request.head;
            var body = request.body;

            oReq.onreadystatechange = function () {
                if (oReq.readyState == 4 && oReq.status == 200) {

                    if (typeof success == 'function') {
                        console.log('PUT status: ' + oReq.status + ", Url: " + url);
                        success(oReq.responseText);
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        console.log('PUT status: ' + oReq.status + ", Url: " + url);
                        error(oReq.status, oReq.responseText);
                    }
                }
            }

            oReq.open("put", url, true);

            oReq.send(body);
        },
        delete: function (request) {

            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;

            oReq.onreadystatechange = function () {
                if (oReq.readyState == 4 && (oReq.status == 200 || oReq.status == 204)) {

                    if (typeof success == 'function') {
                        console.log('DELETE status: ' + oReq.status + ", Url: " + url);
                        success(oReq.responseText);
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        console.log('DELETE status: ' + oReq.status + ", Url: " + url);
                        error(oReq.status, oReq.responseText);
                    }
                }
            }

            oReq.open("delete", url, true);

            oReq.send();
        }
    }
});
define('Api',['Ajax', 'Util'], function(Ajax, Util) {
    var ActivityId = '12aac38f666d444ebb4ddc24b5aa959a'; //測試
    var host = 'https://itriptaiwan.megatime.com.tw/drawwebservice/drawwebservice.asmx';

    // var ActivityId = 'f9a338ab0932467fbe2198d38f8f2a88'; //正式
    // var host = 'https://campaigncms.megatime.com.tw/drawwebservice/drawwebservice.asmx';

    var guid = Util.getParameterByName('guid');
    var auth = Util.getParameterByName('auth') || '';
    return {
        queryIsDraw: function(opts) {
            Ajax.post({
                url: host + '/QueryIsDraw',
                body: JSON.stringify({
                    Guid: guid,
                    ActivityId: ActivityId,
                    Hash: Util.getHash(ActivityId),
                    Auth: auth
                }),
                success: opts.success,
                error: opts.error
            });
        },
        queryDrawResult: function(opts) {
            Ajax.post({
                url: host + '/QueryDrawResult',
                body: JSON.stringify({
                    Guid: guid,
                    ActivityId: ActivityId,
                    Hash: Util.getHash(ActivityId),
                    Auth: auth
                }),
                success: opts.success,
                error: opts.error
            });
        },
        queryIsDrawAndResult: function(opts) {
            var self = this;
            this.queryIsDraw({
                success: function(data) {
                    data.RtCode = '0000';
                    if (data.RtCode != '0000') {
                        opts.onError(data);
                        return;
                    }
                    data.Status = '0'
                    switch (data.Status) {
                        case '0':
                            self.queryDrawResult({
                                success: function(data) {
                                    data.RtCode = '0000';
                                    if (data.RtCode != '0000') {
                                        opts.onError(data);
                                        return;
                                    }
                                    data.Status = '0'
                                    data.IsPrize = 1;
                                    switch (data.Status) {
                                        case '0':
                                            if (data.IsPrize == 1) {
                                                opts.onWin(data);
                                                console.log('55122');
                                            } else {
                                                opts.onLose(data);

                                            }
                                            break;
                                        default:
                                            opts.onError(data);
                                            console.log('55123');
                                            break;
                                    }
                                },
                                error: function(status, data) {
                                    console.log('55124');
                                    opts.onError(data);
                                }
                            });
                            break;
                        default:
                            opts.onError(data);
                            console.log('55125');
                            break;
                    }
                },
                error: function(status, data) {
                    opts.onError(data);
                }
            })
        },
        queryList: function(opts) {
            Ajax.post({
                url: host + '/QueryDrawLog',
                body: JSON.stringify({
                    Guid: guid,
                    ActivityId: ActivityId,
                    Hash: Util.getHash(ActivityId),
                    Auth: auth
                }),
                success: function(data) {
                    if (data.RtCode != '0000') {
                        opts.onError(9999, data);
                        return;
                    }
                    opts.onSuccess(data);
                },
                error: opts.onError
            });
        }
    }
});
app = app || {};
define('Landing',['Util', 'Api', 'Config'], function(Util, Api, Config) {
    var mChanceCount;
    var mData;
    app.Landing = function(game) {

    };
    app.Landing.prototype = {
        preload: function() {

        },
        create: function() {
            const gameConfig = Config.opts;

            // game.add.image(0, 0, 'backgroundImg');
            // game.add.image(gameConfig.parm.times_bgXY[0], gameConfig.parm.times_bgXY[1], 'times_bg');
            game.add.image(gameConfig.base.titleImg.x, gameConfig.base.titleImg.y, 'titleImg');
            Util.createLogoButton();
            Util.createLogAndDetailsButton('btn_detail', 'goRecord');



            if (game.cache.checkImageKey('imageWin')) {
                game.cache.removeImage('imageWin');
            }

            // 從API中取回數量後再產生開始按鈕
            Api.queryIsDraw({
                success: function(data) {
                    data.RtCode = '0000';
                    data.ChanceCount = 0;
                    if (data.RtCode === '0000') {
                        var btnStart = Util.createButton('button', null, gameConfig.landing.landing_btn.x, gameConfig.landing.landing_btn.y);
                        let landing_text = game.add.text(0, 0, gameConfig.landing.landing_btn.text, gameConfig.landing.landing_btn.style);
                        landing_text.setTextBounds(gameConfig.landing.landing_btn.x + gameConfig.landing.landing_btn.text_x, gameConfig.landing.landing_btn.y + gameConfig.landing.landing_btn.text_y, 300, 45);
                        btnStart.onInputUp.add(onStart, this);
                        var fontStyle = {
                            fontSize: '45px',
                            fill: '#fff',
                            boundsAlignH: 'center',
                        };
                        // var timesText = game.add.text(gameConfig.parm.timesTextXY[0], gameConfig.parm.timesTextXY[1], data.ChanceCount, fontStyle);
                        // timesText.setTextBounds(gameConfig.parm.timesTextBounds[0], gameConfig.parm.timesTextBounds[1], gameConfig.parm.timesTextBounds[2], gameConfig.parm.timesTextBounds[3]);
                        //mChanceCount = data.ChanceCount;
                        mData = data;
                        mData.Status = '0';


                    } else {
                        game.state.start('Notice', true, false, data);
                    }
                },
                // error: function (error) {
                //     game.state.start('Notice', true, false, error);
                // }
            });
        },
        update: function() {

        }
    }


    function onStart() {
        Util.ga('landing', 'start', 'none');
        if (mData.Status === '0') {
            game.state.start('Game', true, false);
        } else {
            game.state.start('Notice', true, false, mData);
        }
    }
});
app = app || {};
define('Game',['Util', 'Api', 'Config'], function(Util, Api, Config) {

    var mMinAlphaRatio; //刮到比率多少時就算刮完

    var mOldScratch; //舊的可刮區域
    var mBtnStart; //點我開刮按鈕
    var mBtnInput; //回首頁按鈕
    var mCanvasArea; //可刮區域
    var mCanvasFullRatio; //實際可括區域比率
    var mBStart; //是否開始刮
    var mBFinish; //是否刮完

    // var mRecommendUrl; //推薦商品Url

    var mLoader;
    const gameConfig = Config.opts;

    app.Game = function(game) {

    };
    app.Game.prototype = {
        init: function() {
            mMinAlphaRatio = gameConfig.parm.game_init.mMinAlphaRatio;
            mOldScratch = gameConfig.parm.game_init.mOldScratch;
            mBtnStart = gameConfig.parm.game_init.mBtnStart;
            mBtnInput = gameConfig.parm.game_init.mBtnInput;
            mCanvasArea = gameConfig.parm.game_init.mCanvasArea;
            mCanvasFullRatio = gameConfig.parm.game_init.mCanvasFullRatio;
            mBStart = gameConfig.parm.game_init.mBStart;
            mBFinish = gameConfig.parm.game_init.mBFinish;
            // mRecommendUrl = null;
            mLoader;
        },
        preload: function() {

        },
        create: function() {
            Util.createLogoButton();

            game.add.image(gameConfig.game.game_title.x, gameConfig.game.game_title.y, 'game_title');
            game.add.image(gameConfig.game.scratch_bg.x, gameConfig.game.scratch_bg.y, 'scratch_bg');
            mOldScratch = game.add.image(gameConfig.game.scratch.x, gameConfig.game.scratch.y, 'scratch');

            Util.createLogAndDetailsButton('btn_detail', 'goRecord');

            mBtnStart = Util.createButton('button', null, gameConfig.game.game_btn.x, gameConfig.game.game_btn.y);
            let game_btntext = game.add.text(0, 0, gameConfig.game.game_btn.text, gameConfig.game.game_btn.style);
            game_btntext.setTextBounds(gameConfig.game.game_btn.x + gameConfig.game.game_btn.text_x, gameConfig.game.game_btn.y + gameConfig.game.game_btn.text_y, 300, 45);
            mBtnStart.onInputUp.addOnce(onStart, this);

            //每次滑鼠彈起計算是否括完
            game.input.onUp.add(checkAlphaRatio, this);

            // if (!Util.verifyGuid()) {
            //     game.state.start('Notice', true, false, {});
            // }
        },
        update: function() {
            //滑鼠按下時開始刮
            if (mBStart && game.input.activePointer.isDown) {
                var x = Math.floor(game.input.x);
                var y = Math.floor(game.input.y);
                var rgba = mCanvasArea.getPixel(x, y);
                if (rgba.a > 0) {
                    mCanvasArea.blendDestinationOut();
                    mCanvasArea.circle(x, y, 30, 'rgba(0, 0, 0, 255');
                    mCanvasArea.blendReset();
                    mCanvasArea.dirty = true;
                }
            }
        }
    }

    //檢查當前已刮的比率
    function checkAlphaRatio() {
        if (!mBStart) {
            return;
        }
        // console.log('alphaRatio: ', (alphaRatio(mCanvasArea.ctx) / mCanvasFullRatio));
        //如果當前已括比率 < 最小比率
        if (!mBFinish && (alphaRatio(mCanvasArea.ctx) / mCanvasFullRatio) < mMinAlphaRatio) {
            mBFinish = true;

            //畫一全版圖(清空畫布)
            mCanvasArea.blendDestinationOut();
            mCanvasArea.rect(gameConfig.game.scratch.x, gameConfig.game.scratch.y, game.width, game.height, 'rgba(0, 0, 0, 255');
            mCanvasArea.blendReset();
            mCanvasArea.dirty = true;

            mBtnInput = Util.createButton('button', null, gameConfig.game.game_record.x, gameConfig.game.game_record.y);
            let game_recordtext = game.add.text(0, 0, gameConfig.game.game_record.text, gameConfig.base.btn_style);
            game_recordtext.setTextBounds(gameConfig.game.game_record.x + gameConfig.base.btn_textx, gameConfig.game.game_record.y + gameConfig.base.btn_texty, 300, 45);
            // mBtnInput.input.enabled = false;
            //將按鈕設為可點擊
            mBtnInput.input.enabled = true;
            mBtnInput.onInputUp.add(function() {
                game.state.start('Record', true, false);
            }, this, this);

        }
    }

    //取得當前已刮比率
    function alphaRatio(ctx) {
        var alphaPixels = 0;
        var data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
        for (var i = 3; i < data.length; i += 4) {
            if (data[i] > 0) alphaPixels++;
        }
        return alphaPixels / (ctx.canvas.width * ctx.canvas.height);
    }

    function initScratch(type, imageName) {
        // var recommendText;

        // if (mRecommendUrl) {
        //     Util.ga('recommend', 'moduleView', mRecommendUrl);
        // }


        if (type == 1) {
            //得獎
            // game.add.image(0, 0, '03_Awardprize_titlebg01');
            game.add.image(gameConfig.game.win_bg.x, gameConfig.game.win_bg.y, 'win_bg');
            imageName = 'win_pic';
            game.add.image(gameConfig.game.win_pic.x, gameConfig.game.win_pic.y, imageName);


            //優惠文字
            // recommendText = game.add.text(0, 630, recoText, { fontSize: '40px', boundsAlignH: 'center', boundsAlignV: 'middle' });
            // recommendText.setTextBounds(0, 0, game.width, 70); //設置文字區域(置中用)
        } else {
            //未得獎
            game.add.image(gameConfig.game.lose_bg.x, gameConfig.game.lose_bg.y, 'lose_bg');
            game.add.image(gameConfig.game.lose_pic.x, gameConfig.game.lose_pic.y, 'lose_pic');

            //優惠文字
            // recommendText = game.add.text(0, 440, recoText, { fontSize: '40px', boundsAlignH: 'center', boundsAlignV: 'middle' });
            // recommendText.setTextBounds(0, 0, game.width, 250); //設置文字區域(置中用)
        }

        // 回首頁按鈕



        //產生一個可刮區域, 並將刮刮圖畫至上面
        mCanvasArea = game.add.bitmapData(game.width, game.height);
        mCanvasArea.draw(game.make.sprite(0, 0, 'scratch'), gameConfig.game.scratch.x, gameConfig.game.scratch.y);
        mCanvasArea.update();
        mCanvasArea.addToWorld();

        mOldScratch.destroy();

        //計算實際可刮的滿比率為多少
        mCanvasFullRatio = alphaRatio(mCanvasArea.ctx);

        mBStart = true;
        mBtnStart.destroy();
    }

    function onStart() {
        Util.ga('index', 'play', 'none');
        Api.queryIsDrawAndResult({
            onWin: function(data) {

                const imageName = 'imageWin';
                mLoader = new Phaser.Loader(game);
                mLoader.reset();
                mLoader.removeAll();
                mLoader.image(imageName, data.PrizePicUrl + '?t=' + new Date().getTime(), true);
                mLoader.start();

                mLoader.onLoadComplete.addOnce(function() {
                    initScratch(1, imageName);
                }, this);

            },
            onLose: function(data) {
                // mRecommendUrl = data.RecommendedProductLink;
                initScratch(0);
            },
            onError: function(data) {
                game.state.start('Notice', true, false, data);

                return;
            }
        });
    }
});
/*! phaser-scrollable 09-02-2017 */
var ScrollableArea=function(a,b,c,d,e){e=e||{},Phaser.Group.call(this,game),this._x=this.x=a,this._y=this.y=b,this._w=c,this._h=d,this.maskGraphics=game.add.graphics(a,b),this.maskGraphics.beginFill(0),this.maskGraphics.drawRect(0,0,c,d),this.maskGraphics.alpha=.2,this.maskGraphics.inputEnabled=!0,this.mask=this.maskGraphics,this.dragging=!1,this.pressedDown=!1,this.timestamp=0,this.callbackID=0,this.targetX=0,this.targetY=0,this.autoScrollX=!1,this.autoScrollY=!1,this.startX=0,this.startY=0,this.velocityX=0,this.velocityY=0,this.amplitudeX=0,this.amplitudeY=0,this.directionWheel=0,this.velocityWheelX=0,this.velocityWheelY=0,this.settings={kineticMovement:!0,timeConstantScroll:325,horizontalScroll:!0,verticalScroll:!0,horizontalWheel:!1,verticalWheel:!0,deltaWheel:40},this.configure(e),this.addChild=function(a){this.maskGraphics.x=this.parent.x+this._x,this.maskGraphics.y=this.parent.y+this._y,ScrollableArea.prototype.addChild.call(this,a)}};ScrollableArea.prototype=Object.create(Phaser.Group.prototype),ScrollableArea.prototype.constructor=ScrollableArea,ScrollableArea.prototype.configure=function(a){if(a)for(var b in a)this.settings.hasOwnProperty(b)&&(this.settings[b]=a[b])},ScrollableArea.prototype.start=function(){this.game.input.onDown.add(this.beginMove,this),this.callbackID=this.game.input.addMoveCallback(this.moveCanvas,this),this.game.input.onUp.add(this.endMove,this),this.game.input.mouse.mouseWheelCallback=this.mouseWheel.bind(this)},ScrollableArea.prototype.beginMove=function(){this.allowScrollStopOnTouch&&this.scrollTween&&this.scrollTween.pause(),this.maskGraphics.getBounds().contains(this.game.input.x,this.game.input.y)?(this.startedInside=!0,this.startX=this.game.input.x,this.startY=this.game.input.y,this.pressedDown=!0,this.timestamp=Date.now(),this.velocityY=this.amplitudeY=this.velocityX=this.amplitudeX=0):this.startedInside=!1},ScrollableArea.prototype.moveCanvas=function(a,b,c){if(this.pressedDown){this.now=Date.now();var d=this.now-this.timestamp;if(this.timestamp=this.now,this.settings.horizontalScroll){var e=b-this.startX;0!==e&&(this.dragging=!0),this.startX=b,this.velocityX=.8*(1e3*e/(1+d))+.2*this.velocityX,this.x+=e}if(this.settings.verticalScroll){var e=c-this.startY;0!==e&&(this.dragging=!0),this.startY=c,this.velocityY=.8*(1e3*e/(1+d))+.2*this.velocityY,this.y+=e}this.limitMovement()}},ScrollableArea.prototype.endMove=function(){if(this.startedInside){if(this.pressedDown=!1,this.autoScrollX=!1,this.autoScrollY=!1,!this.settings.kineticMovement)return;this.now=Date.now(),this.game.input.activePointer.withinGame&&((this.velocityX>10||this.velocityX<-10)&&(this.amplitudeX=.8*this.velocityX,this.targetX=Math.round(this.x+this.amplitudeX),this.autoScrollX=!0),(this.velocityY>10||this.velocityY<-10)&&(this.amplitudeY=.8*this.velocityY,this.targetY=Math.round(this.y+this.amplitudeY),this.autoScrollY=!0)),this.game.input.activePointer.withinGame||(this.velocityWheelXAbs=Math.abs(this.velocityWheelX),this.velocityWheelYAbs=Math.abs(this.velocityWheelY),this.settings.horizontalScroll&&(this.velocityWheelXAbs<.1||!this.game.input.activePointer.withinGame)&&(this.autoScrollX=!0),this.settings.verticalScroll&&(this.velocityWheelYAbs<.1||!this.game.input.activePointer.withinGame)&&(this.autoScrollY=!0))}},ScrollableArea.prototype.scrollTo=function(a,b,c,d,e){this.scrollTween&&this.scrollTween.pause(),a=a>0?-a:a,b=b>0?-b:b,d=d||Phaser.Easing.Quadratic.Out,c=c||1e3,e=e||!1,this.allowScrollStopOnTouch=e,this.scrollTween=game.add.tween(this),this.scrollTween.to({x:a,y:b},c,d).start()},ScrollableArea.prototype.update=function(){if(this.elapsed=Date.now()-this.timestamp,this.velocityWheelXAbs=Math.abs(this.velocityWheelX),this.velocityWheelYAbs=Math.abs(this.velocityWheelY),this.autoScrollX&&0!=this.amplitudeX){var a=-this.amplitudeX*Math.exp(-this.elapsed/this.settings.timeConstantScroll);a>.5||a<-.5?this.x=this.targetX+a:this.autoScrollX=!1}if(this.autoScrollY&&0!=this.amplitudeY){var a=-this.amplitudeY*Math.exp(-this.elapsed/this.settings.timeConstantScroll);a>.5||a<-.5?this.y=this.targetY+a:this.autoScrollY=!1}this.autoScrollX||this.autoScrollY||(this.dragging=!1),this.settings.horizontalWheel&&this.velocityWheelXAbs>.1&&(this.dragging=!0,this.amplitudeX=0,this.autoScrollX=!1,this.x+=this.velocityWheelX,this.velocityWheelX*=.95),this.settings.verticalWheel&&this.velocityWheelYAbs>.1&&(this.dragging=!0,this.autoScrollY=!1,this.y+=this.velocityWheelY,this.velocityWheelY*=.95),this.limitMovement()},ScrollableArea.prototype.mouseWheel=function(a){if(this.settings.horizontalWheel||this.settings.verticalWheel){a.preventDefault();var b=120*this.game.input.mouse.wheelDelta/this.settings.deltaWheel;this.directionWheel!=this.game.input.mouse.wheelDelta&&(this.velocityWheelX=0,this.velocityWheelY=0,this.directionWheel=this.game.input.mouse.wheelDelta),this.settings.horizontalWheel&&(this.autoScrollX=!1,this.velocityWheelX+=b),this.settings.verticalWheel&&(this.autoScrollY=!1,this.velocityWheelY+=b)}},ScrollableArea.prototype.stop=function(){this.game.input.onDown.remove(this.beginMove,this),this.callbackID?this.game.input.deleteMoveCallback(this.callbackID):this.game.input.deleteMoveCallback(this.moveCanvas,this),this.game.input.onUp.remove(this.endMove,this),this.game.input.mouse.mouseWheelCallback=null},ScrollableArea.prototype.setPosition=function(a){a.x&&(this.x+=a.x-this._x,this.maskGraphics.x=this._x=a.x),a.y&&(this.y+=a.y-this._y,this.maskGraphics.y=this._y=a.y)},ScrollableArea.prototype.limitMovement=function(){this.settings.horizontalScroll&&(this.x>this._x&&(this.x=this._x),this.x<-(this.width-this._w-this._x)&&(this.width>this._w?this.x=-(this.width-this._w-this._x):this.x=this._x)),this.settings.verticalScroll&&(this.y>this._y&&(this.y=this._y),this.y<-(this.height-this._h-this._y)&&(this.height>this._h?this.y=-(this.height-this._h-this._y):this.y=this._y))};
define("Scroller", function(){});

define('Record',['Util', 'Api', 'Config', 'Scroller'], function(Util, Api, Config) {
    var mScroller;
    app.Record = function(game) {

    };

    app.Record.prototype = {
        preload: function() {


        },
        create: function() {

            const gameConfig = Config.opts;

            var data = {
                DrawLogList: [{
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    }, {
                        DrawDay: "2020/02/26 11:12:12",
                        PrizeName: "紅包 1000元"

                    },

                ]



            }
            game.add.image(0, 0, 'record_listbg');
            //game.add.image(0, 0, '05_Record_titlebg_c');

            Util.createLogoButton();

            Util.createLogAndDetailsButton('btn_detail', 'goRecord');
            let btn_home = Util.createButton('button', null, gameConfig.record.record_home.x, gameConfig.record.record_home.y);
            let btn_hometext = game.add.text(0, 0, gameConfig.record.record_home.text, gameConfig.base.btn_style);
            btn_hometext.setTextBounds(gameConfig.record.record_home.x + gameConfig.base.btn_textx, gameConfig.record.record_home.y + gameConfig.base.btn_texty, 300, 45);
            btn_home.input.enabled = true;
            btn_home.onInputUp.add(function() {
                game.state.start('Landing', true, false);
            }, this, this);
            //創建scroll容器
            mScroller = game.add.existing(new ScrollableArea(90, 340, 520, 400));

            //取得紀錄

            createText(data.DrawLogList);

        },
        update: function() {

        }
    }

    function createText(datas) {
        var startY = 20;
        var rowHeight = 60;
        var fontStyle = {
            fontSize: '25px'
        };
        var item;
        var timeArray;
        for (var i = 0; i < datas.length + 1; i++) {
            item = datas[i] || {};
            //分割日期與時間
            timeArray = item.DrawDay ? item.DrawDay.split(" ") : [];
            var y = (i * rowHeight) + startY;
            // nameText.setTextBounds(0, 0, 260, 24); //設置文字區域(置中用)
            mScroller.addChild(game.make.text(0, y, timeArray[0] || '', fontStyle));
            mScroller.addChild(game.make.text(180, y, timeArray[1] || '', fontStyle));
            mScroller.addChild(game.make.text(330, y, item.PrizeName || '', fontStyle));
        }
        mScroller.start();
    }

});
app = app || {};
define('Notice',['Util', 'Config'], function(Util, Config) {
    var mData = {};
    const gameConfig = Config.opts;
    app.Notice = function(game) {

    };
    app.Notice.prototype = {
        init: function(data) {
            mData = data || {};
        },
        preload: function() {

        },
        create: function() {
            Util.createLogoButton();

            game.add.image(gameConfig.game.game_title.x, gameConfig.game.game_title.y, 'game_title');
            game.add.image(gameConfig.parm.scratch_bgXY[0], gameConfig.parm.scratch_bgXY[1], 'scratch_bg');


            // Util.createButton('btn_home', function() {
            //     game.state.start('Landing');
            // });

            Util.createLogAndDetailsButton('btn_detail', 'goRecord');
            if (mData.RtCode != '0000') {
                game.add.image(0, 0, 'defalut_error');
                Util.ga('recommend', 'moduleView', 'system_busy');
                return;
            }

            // Util.createMoreButton('remind_morebn');
            //mData.Status = '1';

            switch (mData.Status || '') {
                case '1':
                    game.add.image(gameConfig.parm.noticeXY[0], gameConfig.parm.noticeXY[1], 'no_times');
                    break;
                case '2':
                    game.add.image(gameConfig.parm.noticeXY[0], gameConfig.parm.noticeXY[1], 'coming_soon');
                    break;
                case '3':
                    game.add.image(gameConfig.parm.noticeXY[0], gameConfig.parm.noticeXY[1], 'time_out');
                    break;
                case '9999':
                    game.add.image(gameConfig.parm.noticeXY[0], gameConfig.parm.noticeXY[1], 'defalut_error');
                    Util.ga('recommend', 'moduleView', 'system_busy');
                    break;
                case '4':
                default:
                    game.add.image(gameConfig.parm.noticeXY[0], gameConfig.parm.noticeXY[1], 'defalut_error');
                    Util.ga('recommend', 'moduleView', 'system_busy');
                    break;
            }
        },
        update: function() {

        }
    }
});
// app = app || {};
// define(['Util', 'Api'], function (Util, Api) {
//     var mChanceCount;
//     var mData;
//     app.Input = function (game) {

//     };
//     app.Input.prototype = {
//         preload: function () {

//         },
//         create: function () {
//             //game.add.image(0, 0, '01_Landing-bg');
//             game.add.image(0, 0, '02_Index_titlekv');
//             //Util.createLogoButton();
//             // Util.createLogAndDetailsButton('01_Landing-detailbn');

//             if (game.cache.checkImageKey('imageWin')) {
//                 game.cache.removeImage('imageWin');
//             }

//             var userBg = game.add.nineSlice(game.width / 2+ 5, 550, '06_Input_Field', null, 350, 70);
//             userBg.anchor.set(0.5);

//             user = game.add.inputField(game.width / 2 - 150, 550 - 17, {
//                 font: '30px Arial',
//                 fill: '#212121',
//                 fillAlpha: 0,
//                 fontWeight: 'bold',
//                 forceCase: PhaserInput.ForceCase.AUTO,
//                 width: 300,
//                 max: 50,
//                 padding: 8,
//                 borderWidth: 1,
//                 borderColor: '#000',
//                 borderRadius: 6,
//                 placeHolder: '請輸入姓名',
//                 textAlign: 'left',

//             });

//             //user.setText('請輸入姓名');
//             user.blockInput = false;


//             var addressBg = game.add.nineSlice(game.width / 2+ 5, 650, '06_Input_Field', null, 500, 70);
//             addressBg.anchor.set(0.5);
//             address = game.add.inputField(game.width / 2 - 225, 650 - 17, {
//                 font: '30px Arial',
//                 fill: '#ff0000',
//                 fillAlpha: 0,
//                 fontWeight: 'bold',
//                 width: 400,
//                 padding: 8,
//                 borderWidth: 1,
//                 borderColor: '#000',
//                 borderRadius: 6,
//                 placeHolder: '請輸入地址',
//                 textAlign:'left',

//             });
//             address.focusOutOnEnter = false;
//             //testHolder = password;

//             var btnSend = Util.createButton('06_Send_Message');
//             var btnGohome = Util.createButton('06_Goto_Homepage');


//             btnSend.events.onInputDown.add(function() {



//             if(user.value=='' || address.value=='')  alert('姓名或地址不能為白');


//             else{
//                     game.add.text(30, 10, '您的姓名：' + user.value + '!', {
//                         font: '18px Arial'
//                     });

//                     game.add.text(30, 50, '地址： ' + address.value, {
//                         font: '18px Arial'
//                     });


//                     user.destroy();
//                     address.destroy();
//                     btnSend.destroy();


//                 }

//             });
//             btnGohome.onInputDown.add(Gohome,this);

//             // 從API中取回數量後再產生開始按鈕
//             // Api.queryIsDraw({
//             //     success: function (data) {
//             //         data.RtCode = '0000';
//             //         if (data.RtCode === '0000') {
//             //             var btnStart = Util.createButton('01_Landing-gobn');
//             //             btnStart.onInputUp.add(onStart, this);
//             //             var fontStyle = {
//             //                 fontSize: '45px',
//             //                 fill: '#fff',
//             //                 boundsAlignH: 'center',
//             //             };
//             //             var countText = game.add.text(465, 690, data.ChanceCount, fontStyle);
//             //             countText.setTextBounds(0, 0, 110, 45);
//             //             mChanceCount = data.ChanceCount;
//             //             mData = data;
//             //             mData.Status = '0';


//             //         } else {
//             //             game.state.start('Notice', true, false, data);
//             //         }
//             //     },
//             //     // error: function (error) {
//             //     //     game.state.start('Notice', true, false, error);
//             //     // }
//             // });
//         },
//         update: function () {

//         }
//     }


//     function Gohome(){
//         Util.ga('input', 'landing', 'none');
//         game.state.start('Landing', true, false);


//     }


//     function onStart() {
//         Util.ga('landing', 'start', 'none');
//         if (mData.Status === '0') {
//             game.state.start('Game', true, false);
//         } else {
//             game.state.start('Notice', true, false, mData);
//         }
//     }
// });
define("Input", function(){});

var game = {};
var app = {};

requirejs.config({
    baseUrl: 'js',
    paths: {
        Scroller: 'common/phaser-scrollable.min',
        MD5: 'common/md5.min',
        Ajax: 'common/ajax',
        Api: 'common/api.js?t=2',
        Util: 'common/util.js?t=4',
        Boot: 'boot',
        Preloader: 'preloader',
        Landing: 'landing',
        Game: 'game.js?t=1',
        Record: 'record',
        Notice: 'notice',
        Input: 'input',
        Config: 'config',
    }
});

requirejs(['Boot', 'Config', 'Preloader', 'Landing', 'Game', 'Record', 'Notice', 'Input', ], function() {
    game = new Phaser.Game(640, 1000, Phaser.CANVAS, 'content', {}, true);

    Phaser.Device.whenReady(function() {
        game.plugins.add(PhaserInput.Plugin);
        game.plugins.add(PhaserNineSlice.Plugin);
    });

    game.state.add('Boot', app.Boot);
    game.state.add('Config', app.Config);
    game.state.add('Preloader', app.Preloader);
    game.state.add('Landing', app.Landing);
    game.state.add('Game', app.Game);
    game.state.add('Record', app.Record);
    game.state.add('Notice', app.Notice);
    game.state.add('Input', app.Input);


    game.state.start('Boot');
});
define("main", function(){});

