(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["obrigado-obrigado-module"],{

/***/ "./src/app/obrigado/obrigado.module.ts":
/*!*********************************************!*\
  !*** ./src/app/obrigado/obrigado.module.ts ***!
  \*********************************************/
/*! exports provided: ObrigadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrigadoPageModule", function() { return ObrigadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _obrigado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./obrigado.page */ "./src/app/obrigado/obrigado.page.ts");







var routes = [
    {
        path: '',
        component: _obrigado_page__WEBPACK_IMPORTED_MODULE_6__["ObrigadoPage"]
    }
];
var ObrigadoPageModule = /** @class */ (function () {
    function ObrigadoPageModule() {
    }
    ObrigadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_obrigado_page__WEBPACK_IMPORTED_MODULE_6__["ObrigadoPage"]]
        })
    ], ObrigadoPageModule);
    return ObrigadoPageModule;
}());



/***/ }),

/***/ "./src/app/obrigado/obrigado.page.html":
/*!*********************************************!*\
  !*** ./src/app/obrigado/obrigado.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"argola\" [ngClass]=\"tema\"></div>\n\n  <img src=\"../../assets/img/experimento.png\" alt=\"Experimento\" class=\"logo\" />\n\n  <div class=\"obrigado\">\n    <h3><i>Obrigado</i></h3>\n  </div>\n\n  <div class=\"padding\">\n    <ion-button\n      size=\"large\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"rosatop\"\n      class=\"animated fadeIn\"\n      (click)=\"voltar()\"\n    >\n      <span>Fazer de novo</span>\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/obrigado/obrigado.page.scss":
/*!*********************************************!*\
  !*** ./src/app/obrigado/obrigado.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgba(202, 18, 106, 0.4); }\n\n.logo {\n  width: 50%;\n  display: block;\n  margin: 30% auto 0;\n  position: relative; }\n\n.argola {\n  position: fixed;\n  top: -27%;\n  left: -2%;\n  width: 135%;\n  height: 64%;\n  border-radius: 50%;\n  background: #fff; }\n\nion-button {\n  text-transform: none;\n  margin-top: 35%; }\n\n.obrigado {\n  position: relative;\n  margin: 0 auto;\n  width: 40%;\n  text-align: center;\n  background: var(--ion-color-rosatop);\n  padding: 0.5rem; }\n\n.obrigado h3 {\n    color: #fff;\n    font-size: 1.8rem;\n    font-weight: bold;\n    margin: 0; }\n\n.padding {\n  padding: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvYmJpbi9wcm9qZXRvcy9lcXVpcGVfY2FvL3NyYy9hcHAvb2JyaWdhZG8vb2JyaWdhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQWEsRUFBQTs7QUFHZjtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG9CQUFvQjtFQUNwQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlLEVBQUE7O0FBTmpCO0lBUUksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsU0FBUyxFQUFBOztBQUliO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb2JyaWdhZG8vb2JyaWdhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjAyLCAxOCwgMTA2LCAwLjQpO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwJSBhdXRvIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFyZ29sYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtMjclO1xuICBsZWZ0OiAtMiU7XG4gIHdpZHRoOiAxMzUlO1xuICBoZWlnaHQ6IDY0JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1hcmdpbi10b3A6IDM1JTtcbn1cblxuLm9icmlnYWRvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itcm9zYXRvcCk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/obrigado/obrigado.page.ts":
/*!*******************************************!*\
  !*** ./src/app/obrigado/obrigado.page.ts ***!
  \*******************************************/
/*! exports provided: ObrigadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrigadoPage", function() { return ObrigadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ObrigadoPage = /** @class */ (function () {
    function ObrigadoPage(router) {
        this.router = router;
    }
    ObrigadoPage.prototype.ngOnInit = function () { };
    ObrigadoPage.prototype.voltar = function () {
        this.router.navigate(["/"]);
    };
    ObrigadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-obrigado",
            template: __webpack_require__(/*! ./obrigado.page.html */ "./src/app/obrigado/obrigado.page.html"),
            styles: [__webpack_require__(/*! ./obrigado.page.scss */ "./src/app/obrigado/obrigado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ObrigadoPage);
    return ObrigadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=obrigado-obrigado-module.js.map