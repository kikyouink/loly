webpackJsonp([2],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePageModule", function() { return ThemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemePageModule = (function () {
    function ThemePageModule() {
    }
    return ThemePageModule;
}());
ThemePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* ThemePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* ThemePage */]),
        ],
    })
], ThemePageModule);

//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(100);
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
 * Generated class for the ThemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThemePage = (function () {
    function ThemePage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.items = [
            {
                color: 'blue',
                colorName: '新桥'
            },
            {
                color: 'purple',
                colorName: '葡萄'
            },
            {
                color: 'red',
                colorName: '热情'
            },
            {
                color: 'gold',
                colorName: '黄金'
            },
            {
                color: 'pink',
                colorName: '少女'
            },
            {
                color: 'green',
                colorName: '原谅'
            },
        ];
    }
    ThemePage.prototype.setTheme = function (theme) {
        this.global.set('theme', 'theme-dark');
    };
    ThemePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThemePage');
    };
    return ThemePage;
}());
ThemePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-theme',template:/*ion-inline-start:"D:\12\myapp\src\pages\theme\theme.html"*/'<!--\n  Generated template for the ThemePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color=\'bili\'>\n    <ion-title>主题</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row class="color-list">\n      <ion-col col-4 *ngFor="let item of items">\n        <button ion-button round [ngStyle]="{\'background-color\': item.color}" (click)="setTheme(item.color)">\n          {{item.colorName}}\n        </button>\n      </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\12\myapp\src\pages\theme\theme.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppState */]])
], ThemePage);

//# sourceMappingURL=theme.js.map

/***/ })

});
//# sourceMappingURL=2.js.map