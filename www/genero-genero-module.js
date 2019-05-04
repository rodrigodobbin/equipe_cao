(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["genero-genero-module"],{

/***/ "./src/app/genero/genero.module.ts":
/*!*****************************************!*\
  !*** ./src/app/genero/genero.module.ts ***!
  \*****************************************/
/*! exports provided: GeneroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneroPageModule", function() { return GeneroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _genero_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genero.page */ "./src/app/genero/genero.page.ts");







var routes = [
    {
        path: '',
        component: _genero_page__WEBPACK_IMPORTED_MODULE_6__["GeneroPage"]
    }
];
var GeneroPageModule = /** @class */ (function () {
    function GeneroPageModule() {
    }
    GeneroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_genero_page__WEBPACK_IMPORTED_MODULE_6__["GeneroPage"]]
        })
    ], GeneroPageModule);
    return GeneroPageModule;
}());



/***/ }),

/***/ "./src/app/genero/genero.page.html":
/*!*****************************************!*\
  !*** ./src/app/genero/genero.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container purple\">\n      <ion-slides #slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide>\n          <h1>Qual seu gênero?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <p class=\"text\">{{ generoTexto }}</p>\n            </ion-avatar>\n            <div\n              class=\"masculino generos animated zoomInUp\"\n              [ngClass]=\"{ active: genero === 'M' }\"\n              (click)=\"escolheGenero('M')\"\n            >\n              <img src=\"../../assets/img/masculino.png\" />\n            </div>\n            <div\n              class=\"feminino generos animated zoomInDown\"\n              [ngClass]=\"{ active: genero === 'F' }\"\n              (click)=\"escolheGenero('F')\"\n            >\n              <img src=\"../../assets/img/feminino.png\" />\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.45\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p class=\"animated fadeIn\" *ngIf=\"genero === 'M'\">\n            Para ser Demipair na Austrália você precisa ser homem e ter de 18-26\n            anos.\n          </p>\n          <p class=\"animated fadeIn\" *ngIf=\"genero === 'F'\">\n            Para ser Aupair no Estados Unidos você precisa ser mulher e ter de\n            18-26 anos.\n          </p>\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"roxotop\"\n          class=\"animated fadeIn\"\n          (click)=\"continue()\"\n          [disabled]=\"!genero\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/genero/genero.page.scss":
/*!*****************************************!*\
  !*** ./src/app/genero/genero.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyby9nZW5lcm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/genero/genero.page.ts":
/*!***************************************!*\
  !*** ./src/app/genero/genero.page.ts ***!
  \***************************************/
/*! exports provided: GeneroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneroPage", function() { return GeneroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GeneroPage = /** @class */ (function () {
    function GeneroPage(actRoute, router) {
        this.actRoute = actRoute;
        this.router = router;
        this.genero = "M";
        this.generoTexto = "Masculino";
        this.continuarLoading = false;
        this.sucesso = false;
    }
    GeneroPage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
        this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
        this.escolaridade = this.actRoute.snapshot.params["escolaridade"];
        this.pais = this.actRoute.snapshot.params["pais"];
        this.nivel = this.actRoute.snapshot.params["nivel"];
    };
    GeneroPage.prototype.escolheGenero = function (tipo) {
        switch (tipo) {
            case "M":
                this.genero = "M";
                this.generoTexto = "Masculino";
                break;
            case "F":
                this.genero = "F";
                this.generoTexto = "Feminino";
                break;
        }
    };
    GeneroPage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            _this.router.navigate([
                "/genero/" + _this.tipoInter + "/" + _this.faixaEtaria + "/" + _this.acomodacao + "/" + _this.escolaridade + "/" + _this.pais + "/" + _this.nivel + "/" + _this.genero
            ]);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    GeneroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-genero",
            template: __webpack_require__(/*! ./genero.page.html */ "./src/app/genero/genero.page.html"),
            styles: [__webpack_require__(/*! ./genero.page.scss */ "./src/app/genero/genero.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GeneroPage);
    return GeneroPage;
}());



/***/ })

}]);
//# sourceMappingURL=genero-genero-module.js.map