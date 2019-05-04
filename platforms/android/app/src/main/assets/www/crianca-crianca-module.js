(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crianca-crianca-module"],{

/***/ "./src/app/crianca/crianca.module.ts":
/*!*******************************************!*\
  !*** ./src/app/crianca/crianca.module.ts ***!
  \*******************************************/
/*! exports provided: CriancaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriancaPageModule", function() { return CriancaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _crianca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crianca.page */ "./src/app/crianca/crianca.page.ts");







var routes = [
    {
        path: '',
        component: _crianca_page__WEBPACK_IMPORTED_MODULE_6__["CriancaPage"]
    }
];
var CriancaPageModule = /** @class */ (function () {
    function CriancaPageModule() {
    }
    CriancaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_crianca_page__WEBPACK_IMPORTED_MODULE_6__["CriancaPage"]]
        })
    ], CriancaPageModule);
    return CriancaPageModule;
}());



/***/ }),

/***/ "./src/app/crianca/crianca.page.html":
/*!*******************************************!*\
  !*** ./src/app/crianca/crianca.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container pink larger\">\n      <ion-slides #slides pager=\"false\">\n        <ion-slide>\n          <h1>Vc tem experiência com criança?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/bola.png\" />\n            </ion-avatar>\n          </div>\n\n          <br />\n\n          <ion-segment\n            [(ngModel)]=\"gostaCrianca\"\n            color=\"laranjatop\"\n            (ionChange)=\"segmentChanged($event)\"\n          >\n            <ion-segment-button value=\"T\">\n              <ion-label>Sim</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"F\">\n              <ion-label>Não</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.88\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p class=\"animated fadeIn\">\n            Se voce gosta crianças poderá atual como Aupair ou Demipair nos EUA\n            ou Australia.\n          </p>\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"rosatop\"\n          class=\"animated fadeIn\"\n          (click)=\"continue()\"\n          [disabled]=\"!genero\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/crianca/crianca.page.scss":
/*!*******************************************!*\
  !*** ./src/app/crianca/crianca.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaWFuY2EvY3JpYW5jYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/crianca/crianca.page.ts":
/*!*****************************************!*\
  !*** ./src/app/crianca/crianca.page.ts ***!
  \*****************************************/
/*! exports provided: CriancaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriancaPage", function() { return CriancaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CriancaPage = /** @class */ (function () {
    function CriancaPage(actRoute, router) {
        this.actRoute = actRoute;
        this.router = router;
        this.gostaCrianca = "T";
        this.continuarLoading = false;
        this.sucesso = false;
    }
    CriancaPage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
        this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
        this.escolaridade = this.actRoute.snapshot.params["escolaridade"];
        this.pais = this.actRoute.snapshot.params["pais"];
        this.nivel = this.actRoute.snapshot.params["nivel"];
        this.genero = this.actRoute.snapshot.params["genero"];
    };
    CriancaPage.prototype.segmentChanged = function (evt) {
        evt.preventDefault();
    };
    CriancaPage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            _this.router.navigate([
                "/duracao/" + _this.tipoInter + "/" + _this.faixaEtaria + "/" + _this.acomodacao + "/" + _this.escolaridade + "/" + _this.pais + "/" + _this.nivel + "/" + _this.genero + "/" + _this.gostaCrianca
            ]);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    CriancaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-crianca",
            template: __webpack_require__(/*! ./crianca.page.html */ "./src/app/crianca/crianca.page.html"),
            styles: [__webpack_require__(/*! ./crianca.page.scss */ "./src/app/crianca/crianca.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CriancaPage);
    return CriancaPage;
}());



/***/ })

}]);
//# sourceMappingURL=crianca-crianca-module.js.map