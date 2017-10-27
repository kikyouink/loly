webpackJsonp([2],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePageModule", function() { return ThemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(284);
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_storage_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_theme_service__ = __webpack_require__(102);
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
    function ThemePage(navCtrl, navParams, sto, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sto = sto;
        this.global = global;
    }
    ThemePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThemePage');
        this.list = [
            {
                name: '新桥',
                color: 'blue',
            }, {
                name: '葡萄',
                color: 'purple',
            }, {
                name: '原谅',
                color: 'darkgray',
            }, {
                name: '纯白',
                color: 'white',
                textColor: '#488aff',
            }, {
                name: '夜间',
                color: 'black',
            }, {
                name: '少女',
                color: 'indianred',
            },
        ];
    };
    ThemePage.prototype.changeTheme = function (color) {
        var theme = 'theme-' + color;
        console.log('传入的主题是:' + theme);
        this.global.set('theme', theme);
        this.sto.save('theme', theme);
        this.navCtrl.pop();
    };
    return ThemePage;
}());
ThemePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-theme',template:/*ion-inline-start:"D:\12\myapp\src\pages\theme\theme.html"*/'<!--\n  Generated template for the ThemePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>主题</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row >\n    <ion-col col-4  style=\'text-align:center\' *ngFor="let button of list">\n      <button ion-button round class=\'themeBtn\' (click)="changeTheme(button.color)" [style.background-color]=\'button.color\' [style.color]=\'button.textColor\'>{{button.name}}</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\12\myapp\src\pages\theme\theme.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__provider_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__provider_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__provider_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__provider_theme_service__["a" /* ThemeService */]) === "function" && _d || Object])
], ThemePage);

var _a, _b, _c, _d;
//# sourceMappingURL=theme.js.map

/***/ })

});
//# sourceMappingURL=2.js.map