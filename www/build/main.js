webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformService = (function () {
    function InformService(toastCtrl, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    InformService.prototype.createT = function (message, position) {
        if (position === void 0) { position = 'bottom'; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 2000
        });
        this.toast.present();
    };
    InformService.prototype.createL = function (content, duration, callback) {
        if (duration === void 0) { duration = 2000; }
        var loader = this.loadingCtrl.create({
            content: content,
            duration: duration
        });
        loader.present();
        loader.onDidDismiss(function () {
            console.log('loadding结束');
            callback.call();
        });
    };
    return InformService;
}());
InformService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], InformService);

//# sourceMappingURL=inform.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.init = function () {
        if (this.get('inited') == 'true') {
            console.log('已定义');
            return;
        }
        console.log('未定义');
        var arg = ['theme'];
        var value = ['theme-indianred'];
        for (var i = 0; i < arg.length; i++) {
            this.save(arg[0], value[0]);
        }
        this.save('inited', true);
    };
    StorageService.prototype.save = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    StorageService.prototype.delete = function (key) {
        localStorage.removeItem(key);
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemeService = (function () {
    function ThemeService() {
        this.theme = {
            theme: 'theme-indianred'
        };
    }
    ThemeService.prototype.set = function (prop, value) {
        // internally mutate our state
        return this.theme[prop] = value;
    };
    return ThemeService;
}());
ThemeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ThemeService);

//# sourceMappingURL=theme.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		265,
		8
	],
	"../pages/contact/contact.module": [
		266,
		7
	],
	"../pages/login/login.module": [
		270,
		1
	],
	"../pages/main/main.module": [
		268,
		6
	],
	"../pages/news/news.module": [
		267,
		5
	],
	"../pages/person/person.module": [
		269,
		4
	],
	"../pages/sign/sign.module": [
		271,
		0
	],
	"../pages/tabs/tabs.module": [
		273,
		3
	],
	"../pages/theme/theme.module": [
		272,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__provider_socket_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__provider_inform_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider_theme_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__provider_storage_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/person/person.module#PersonPageModule', name: 'PersonPage', segment: 'person', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign/sign.module#SignPageModule', name: 'SignPage', segment: 'sign', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/theme/theme.module#ThemePageModule', name: 'ThemePage', segment: 'theme', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__provider_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_8__provider_inform_service__["a" /* InformService */],
            __WEBPACK_IMPORTED_MODULE_9__provider_theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_10__provider_storage_service__["a" /* StorageService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_socket_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_theme_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider_storage_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, global, ss, sto) {
        var _this = this;
        this.global = global;
        this.ss = ss;
        this.sto = sto;
        this.rootPage = 'TabsPage';
        platform.ready().then(function () {
            console.log('设备就绪');
            statusBar.backgroundColorByHexString('#00ffffff');
            splashScreen.hide();
            //读取存储
            var sto = _this.sto;
            sto.init(); //初始化
            _this.setTheme(); //设置主题
            ss.onInit(); //socket.io就位
            _this.items = [
                {
                    icon: 'leaf',
                    name: '个人主页',
                    page: 'PersonPage',
                },
                {
                    icon: 'shirt',
                    name: '个性装扮',
                    page: 'DressPage',
                },
                {
                    icon: 'star',
                    name: '我的收藏',
                    page: 'StarPage',
                },
                {
                    icon: 'photos',
                    name: '我的相册',
                    page: 'PhotoPage',
                },
                {
                    icon: 'folder',
                    name: '我的文件',
                    page: 'FolderPage',
                },
            ];
        });
    }
    MyApp.prototype.moveTo = function (page) {
        this.nav.push(page);
    };
    MyApp.prototype.setTheme = function () {
        var theme = this.sto.get('theme');
        if (theme != null)
            this.global.set('theme', theme);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\12\myapp\src\app\app.html"*/'<div [class]="global.theme[\'theme\']">\n<ion-menu [content]="content">\n  <ion-content>\n    <div id=\'headDiv\'>\n      <img src="assets/img/avatar/girl-avatar.png" class="head">\n    </div>\n    <ion-list no-lines>\n      <ion-list-header>\n        菜单\n      </ion-list-header>\n      <button ion-item menuClose class="slideMenu" (click)="moveTo(item.page)" *ngFor="let item of items">\n        <ion-icon [name]="item.icon" item-start></ion-icon>{{item.name}}\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar >\n      <button ion-button clear menuClose color=\'gray\' style="width:45%" ><ion-icon name="settings"></ion-icon>设置</button>\n      <button ion-button clear menuClose color=\'gray\' style="width:45%" (click)="moveTo(\'ThemePage\')"><ion-icon name="color-palette"></ion-icon>主题</button>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n</div>'/*ion-inline-end:"D:\12\myapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__provider_theme_service__["a" /* ThemeService */],
        __WEBPACK_IMPORTED_MODULE_4__provider_socket_service__["a" /* SocketService */],
        __WEBPACK_IMPORTED_MODULE_6__provider_storage_service__["a" /* StorageService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inform_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    //inited:boolean=false;
    function SocketService(is) {
        this.is = is;
        //url:string='10.11.163.178:3000';
        this.url = 'https://loly.club:3000/';
        this.socket = io(this.url, { secure: true });
        this.n = 0;
    }
    SocketService.prototype.sign = function (info) {
        this.socket.emit('signRq', info);
    };
    SocketService.prototype.login = function (info) {
        this.socket.emit('loginRq', info);
    };
    SocketService.prototype.sendName = function (name) {
        this.socket.emit('sendName', name);
    };
    SocketService.prototype.send = function (msg, to) {
        this.socket.emit('privateMsg', { msg: msg, to: to });
    };
    SocketService.prototype.sendAll = function (msg) {
        this.socket.emit('publicMsg', msg);
    };
    SocketService.prototype.search = function (val) {
        this.socket.emit('search', { username: val });
    };
    SocketService.prototype.onInit = function () {
        var _this = this;
        this.socket.on('signSuccess', function () {
            _this.sign_result = true;
            _this.is.createT('注册成功');
        });
        this.socket.on('isExits', function () {
            _this.sign_result = false;
            _this.is.createT('此用户已存在');
        });
        this.socket.on('loginSuccess', function () {
            _this.login_result = true;
            _this.is.createT('登录成功');
        });
        this.socket.on('loginFailed', function () {
            _this.login_result = false;
            _this.is.createT('登录失败');
        });
        this.socket.on('privateMsg', function (msg) {
            _this.abc = Promise.resolve(msg);
        });
        // this.socket.on('privateMsg',(msg)=>{
        //     this.is.createT('私人信息:'+msg);
        //     console.log(msg);           
        // })
        this.socket.on('publicMsg', function (msg) {
            _this.is.createT('公共信息:' + msg);
            console.log(msg);
        });
        this.socket.on('searchResult', function (userdata) {
            if (userdata == '无结果') {
                _this.search_result = null;
            }
            else {
                _this.search_result = {
                    nickname: userdata.nickname,
                    headimg: 'http://q2.qlogo.cn/headimg_dl?bs=2578443177&dst_uin=' + userdata.username + '&dst_uin=' + userdata.username + '&;dst_uin=' + userdata.username + '&spec=100&url_enc=0&referer=bu_interface&term_type=PC'
                };
            }
        });
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__inform_service__["a" /* InformService */]])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map