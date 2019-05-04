(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["idioma-idioma-module"],{

/***/ "./src/app/idioma/idioma.module.ts":
/*!*****************************************!*\
  !*** ./src/app/idioma/idioma.module.ts ***!
  \*****************************************/
/*! exports provided: IdiomaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomaPageModule", function() { return IdiomaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _idioma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idioma.page */ "./src/app/idioma/idioma.page.ts");







var routes = [
    {
        path: '',
        component: _idioma_page__WEBPACK_IMPORTED_MODULE_6__["IdiomaPage"]
    }
];
var IdiomaPageModule = /** @class */ (function () {
    function IdiomaPageModule() {
    }
    IdiomaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_idioma_page__WEBPACK_IMPORTED_MODULE_6__["IdiomaPage"]]
        })
    ], IdiomaPageModule);
    return IdiomaPageModule;
}());



/***/ }),

/***/ "./src/app/idioma/idioma.page.html":
/*!*****************************************!*\
  !*** ./src/app/idioma/idioma.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container lightblue larger\">\n      <ion-slides\n        #slides\n        pager=\"true\"\n        [options]=\"slideOpts\"\n        (ionSlideDidChange)=\"slideChanged()\"\n      >\n        <ion-slide>\n          <h1>Qual seu nível no idioma escolhido?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/basico.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Básico</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Qual seu nível no idioma escolhido?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/intermediario.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Intermediário</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Qual seu nível no idioma escolhido?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/avancado.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Avançado</h1>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.66\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p *ngIf=\"slideIndex === 0\" class=\"animated slideInRight\">\n            Basico - Inglês básico: é quando conseguimos compreender e usar\n            expressões familiares e cotidianas, assim como enunciados bem\n            simples. Conseguir se apresentar, apresentar os outros, perguntar e\n            dar respostas como o local onde vive, as pessoas que conhece e as\n            coisas que possui. Resumindo, conseguir se comunicar de modo\n            simples.\n          </p>\n          <p *ngIf=\"slideIndex === 1\" class=\"animated slideInRight\">\n            Inglês intermediário: Consideramos intermdiário quando é possivel\n            compreender as questões principais em textos complexos (assuntos\n            concretos e abstratos), além de participações de discussões técnicas\n            na sua área de especialidade.\n          </p>\n\n          <p *ngIf=\"slideIndex === 2\" class=\"animated slideInRight\">\n            Avançado - Inglês avançado: Consideramos a capacidade de compreender\n            um vasto número de textos longos e exigentes, reconhecendo os seus\n            significados implícitos. Significa se expressar de forma fluente e\n            espontânea sem precisar procurar muito as palavras, usa o idioma de\n            modo flexível e eficaz para fins sociais, acadêmicos e\n            profissionais.\n          </p>\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"azulclarotop\"\n          class=\"animated bounceIn\"\n          (click)=\"continue()\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/idioma/idioma.page.scss":
/*!*****************************************!*\
  !*** ./src/app/idioma/idioma.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkaW9tYS9pZGlvbWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/idioma/idioma.page.ts":
/*!***************************************!*\
  !*** ./src/app/idioma/idioma.page.ts ***!
  \***************************************/
/*! exports provided: IdiomaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomaPage", function() { return IdiomaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var IdiomaPage = /** @class */ (function () {
    function IdiomaPage(router, actRoute) {
        this.router = router;
        this.actRoute = actRoute;
        this.slideIndex = 0;
        this.slideOpts = {
            speed: 400
        };
        this.continuarLoading = false;
        this.sucesso = false;
    }
    IdiomaPage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
        this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
        this.escolaridade = this.actRoute.snapshot.params["escolaridade"];
        this.pais = this.actRoute.snapshot.params["pais"];
    };
    IdiomaPage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        var nivel;
        if (this.slideIndex === 0) {
            nivel = "B";
        }
        else if (this.slideIndex === 1) {
            nivel = "I";
        }
        else if (this.slideIndex === 2) {
            nivel = "A";
        }
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            _this.router.navigate([
                "/genero/" + _this.tipoInter + "/" + _this.faixaEtaria + "/" + _this.acomodacao + "/" + _this.escolaridade + "/" + _this.pais + "/" + nivel
            ]);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    IdiomaPage.prototype.slideChanged = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            _this.slideIndex = index;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IdiomaPage.prototype, "slides", void 0);
    IdiomaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-idioma",
            template: __webpack_require__(/*! ./idioma.page.html */ "./src/app/idioma/idioma.page.html"),
            styles: [__webpack_require__(/*! ./idioma.page.scss */ "./src/app/idioma/idioma.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IdiomaPage);
    return IdiomaPage;
}());



/***/ })

}]);
//# sourceMappingURL=idioma-idioma-module.js.map