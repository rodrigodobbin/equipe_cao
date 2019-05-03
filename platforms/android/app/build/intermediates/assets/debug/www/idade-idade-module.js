(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["idade-idade-module"],{

/***/ "./src/app/idade/idade.module.ts":
/*!***************************************!*\
  !*** ./src/app/idade/idade.module.ts ***!
  \***************************************/
/*! exports provided: IdadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdadePageModule", function() { return IdadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _idade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idade.page */ "./src/app/idade/idade.page.ts");







var routes = [
    {
        path: "",
        component: _idade_page__WEBPACK_IMPORTED_MODULE_6__["IdadePage"]
    }
];
var IdadePageModule = /** @class */ (function () {
    function IdadePageModule() {
    }
    IdadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_idade_page__WEBPACK_IMPORTED_MODULE_6__["IdadePage"]]
        })
    ], IdadePageModule);
    return IdadePageModule;
}());



/***/ }),

/***/ "./src/app/idade/idade.page.html":
/*!***************************************!*\
  !*** ./src/app/idade/idade.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>idade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/idade/idade.page.scss":
/*!***************************************!*\
  !*** ./src/app/idade/idade.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkYWRlL2lkYWRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/idade/idade.page.ts":
/*!*************************************!*\
  !*** ./src/app/idade/idade.page.ts ***!
  \*************************************/
/*! exports provided: IdadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdadePage", function() { return IdadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var IdadePage = /** @class */ (function () {
    function IdadePage(actRoute) {
        this.actRoute = actRoute;
    }
    IdadePage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        console.log(this.tipoInter);
    };
    IdadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-idade",
            template: __webpack_require__(/*! ./idade.page.html */ "./src/app/idade/idade.page.html"),
            styles: [__webpack_require__(/*! ./idade.page.scss */ "./src/app/idade/idade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IdadePage);
    return IdadePage;
}());



/***/ })

}]);
//# sourceMappingURL=idade-idade-module.js.map