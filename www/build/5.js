webpackJsonp([5],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(277);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
        ],
    })
], MainPageModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(99);
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
        selector: 'page-main',template:/*ion-inline-start:"D:\12\myapp\src\pages\main\main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar color=\'bili\'>\n        <ion-title>欢迎！{{username}}</ion-title>  \n      </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list-header>\n        我的好友\n    </ion-list-header>\n  <ion-list  no-lines>\n    \n    <button ion-item (click)="chat(username,\'123456\')">\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/1.jpg">\n      </ion-avatar>\n      <h2 #to1>William</h2>\n      <p>Hello,nice to meet you。</p>\n    </button>\n    <button ion-item (click)="chat(username,\'2578443177\')">\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/2.jpg">\n      </ion-avatar>\n      <h2 #to2>Lera</h2>\n      <p>see you later!</p>\n    </button>\n    <button ion-item (click)="chat(username,\'123456789\',socket)">\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/3.jpg">\n      </ion-avatar>\n      <h2>Kristen</h2>\n      <p>wait a monment...</p>\n    </button>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n        群聊\n    </ion-list-header>\n    <button ion-item (click)="ss()">\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/flower.png">\n      </ion-avatar>\n      <h2>Job</h2>\n      <p>Manager：send the report to me</p>\n    </button>\n  </ion-list>\n  <ion-fab bottom left>\n      <button ion-fab color="bili" margin-bottom id="menuBtn"><ion-icon name="add" color="white" menuToggle></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\12\myapp\src\pages\main\main.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _e || Object])
], MainPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=5.js.map