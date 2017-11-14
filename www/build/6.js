webpackJsonp([6],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = (function () {
    function MainPageModule() {
    }
    return MainPageModule;
}());
MainPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
        ],
    })
], MainPageModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, menuCtrl, app, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.statusBar = statusBar;
        this.username = '';
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
        console.log(this.navParams.get('username'));
        this.username = this.navParams.get('username');
        this.items = [
            {
                username: '2578443177',
                src: 'assets/img/avatar/1.jpg',
                nickname: 'William',
                lastWords: 'Hello,nice to meet you。',
            },
            {
                username: '123456',
                src: 'assets/img/avatar/2.jpg',
                nickname: 'Lera',
                lastWords: 'see you later!',
            },
            {
                username: '123456789',
                src: 'assets/img/avatar/3.jpg',
                nickname: 'Kristen',
                lastWords: 'wait a monment...',
            },
        ];
        this.items2 = [
            {
                groupname: '群聊',
                src: 'assets/img/avatar/flower.png',
                nickname: 'Job',
                lastWords: 'Manager：send the report to me',
            }
        ];
    };
    MainPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
        console.log('打开菜单');
    };
    MainPage.prototype.chat = function (formname, toname) {
        this.app.getRootNav().push('ChatPage', {
            from: formname,
            to: toname,
        });
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"D:\12\myapp\src\pages\main\main.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>欢迎！{{username}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list-header>\n    我的好友\n  </ion-list-header>\n  <ion-list no-lines>\n    <button ion-item (click)="chat(username,item.username)" *ngFor="let item of items">\n      <ion-avatar item-start>\n        <img [src]="item.src">\n      </ion-avatar>\n      <h2>{{item.nickname}}</h2>\n      <p>{{item.lastWords}}</p>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      群聊\n    </ion-list-header>\n    <button ion-item (click)="chat(username,item.groupname)" *ngFor="let item of items2">\n      <ion-avatar item-start>\n        <img [src]="item.src">\n      </ion-avatar>\n      <h2>{{item.nickname}}</h2>\n      <p>{{item.lastWords}}</p>\n    </button>\n  </ion-list>\n  <ion-fab bottom left>\n    <button ion-fab margin-bottom id="menuBtn">\n      <ion-icon name="add" color="white" menuToggle></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\12\myapp\src\pages\main\main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=6.js.map