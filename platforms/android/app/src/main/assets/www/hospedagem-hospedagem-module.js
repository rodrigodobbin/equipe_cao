(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospedagem-hospedagem-module"],{

/***/ "./src/app/hospedagem/hospedagem.module.ts":
/*!*************************************************!*\
  !*** ./src/app/hospedagem/hospedagem.module.ts ***!
  \*************************************************/
/*! exports provided: HospedagemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospedagemPageModule", function() { return HospedagemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hospedagem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hospedagem.page */ "./src/app/hospedagem/hospedagem.page.ts");







var routes = [
    {
        path: '',
        component: _hospedagem_page__WEBPACK_IMPORTED_MODULE_6__["HospedagemPage"]
    }
];
var HospedagemPageModule = /** @class */ (function () {
    function HospedagemPageModule() {
    }
    HospedagemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hospedagem_page__WEBPACK_IMPORTED_MODULE_6__["HospedagemPage"]]
        })
    ], HospedagemPageModule);
    return HospedagemPageModule;
}());



/***/ }),

/***/ "./src/app/hospedagem/hospedagem.page.html":
/*!*************************************************!*\
  !*** ./src/app/hospedagem/hospedagem.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container purple\">\n      <ion-slides #slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide>\n          <h1>Quer ficar hospedado onde?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <p class=\"text\">{{ acomodacaoTexto }}</p>\n            </ion-avatar>\n            <div\n              class=\"casa hospedagens animated zoomInRight\"\n              [ngClass]=\"{ active: acomodacao === 'CF' }\"\n              (click)=\"escolheAcomodacao('casa')\"\n            >\n              <img src=\"../../assets/img/home.png\" />\n            </div>\n            <div\n              class=\"estudantil hospedagens animated zoomInUp\"\n              [ngClass]=\"{ active: acomodacao === 'RE' }\"\n              (click)=\"escolheAcomodacao('estudantil')\"\n            >\n              <img src=\"../../assets/img/escola.png\" />\n            </div>\n            <div\n              class=\"ap hospedagens animated zoomInDown\"\n              [ngClass]=\"{ active: acomodacao === 'A' }\"\n              (click)=\"escolheAcomodacao('ap')\"\n            >\n              <img src=\"../../assets/img/ap.png\" />\n            </div>\n            <div\n              class=\"hotel hospedagens animated zoomInLeft\"\n              [ngClass]=\"{ active: acomodacao === 'H' }\"\n              (click)=\"escolheAcomodacao('hotel')\"\n            >\n              <img src=\"../../assets/img/hotel.png\" />\n            </div>\n            <div\n              class=\"campus hospedagens animated zoomInUp\"\n              [ngClass]=\"{ active: acomodacao === 'CU' }\"\n              (click)=\"escolheAcomodacao('campus')\"\n            >\n              <img src=\"../../assets/img/campus.png\" />\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.33\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p class=\"animated fadeIn\">\n            A escolha do local onde você ficará hospedado poderá influenciar no\n            quanto você irá utilizar o idioma no dia a dia.\n          </p>\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"roxotop\"\n          class=\"animated fadeIn\"\n          (click)=\"continue()\"\n          [disabled]=\"!acomodacao\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/hospedagem/hospedagem.page.scss":
/*!*************************************************!*\
  !*** ./src/app/hospedagem/hospedagem.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3BlZGFnZW0vaG9zcGVkYWdlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/hospedagem/hospedagem.page.ts":
/*!***********************************************!*\
  !*** ./src/app/hospedagem/hospedagem.page.ts ***!
  \***********************************************/
/*! exports provided: HospedagemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospedagemPage", function() { return HospedagemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HospedagemPage = /** @class */ (function () {
    function HospedagemPage(actRoute, router) {
        this.actRoute = actRoute;
        this.router = router;
        this.acomodacao = "CF";
        this.acomodacaoTexto = "Casa de família";
        this.continuarLoading = false;
        this.sucesso = false;
    }
    HospedagemPage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
    };
    HospedagemPage.prototype.escolheAcomodacao = function (tipo) {
        switch (tipo) {
            case "casa":
                this.acomodacao = "CF";
                this.acomodacaoTexto = "Casa de família";
                break;
            case "estudantil":
                this.acomodacao = "RE";
                this.acomodacaoTexto = "Residência Estudantil";
                break;
            case "ap":
                this.acomodacao = "A";
                this.acomodacaoTexto = "Apartamento";
                break;
            case "hotel":
                this.acomodacao = "H";
                this.acomodacaoTexto = "Hotel";
                break;
            case "campus":
                this.acomodacao = "CU";
                this.acomodacaoTexto = "Campus universitário";
                break;
        }
    };
    HospedagemPage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            _this.router.navigate([
                "/formacao/" + _this.tipoInter + "/" + _this.faixaEtaria + "/" + _this.acomodacao
            ]);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    HospedagemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-hospedagem",
            template: __webpack_require__(/*! ./hospedagem.page.html */ "./src/app/hospedagem/hospedagem.page.html"),
            styles: [__webpack_require__(/*! ./hospedagem.page.scss */ "./src/app/hospedagem/hospedagem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HospedagemPage);
    return HospedagemPage;
}());



/***/ })

}]);
//# sourceMappingURL=hospedagem-hospedagem-module.js.map