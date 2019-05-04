(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formacao-formacao-module"],{

/***/ "./src/app/formacao/formacao.module.ts":
/*!*********************************************!*\
  !*** ./src/app/formacao/formacao.module.ts ***!
  \*********************************************/
/*! exports provided: FormacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormacaoPageModule", function() { return FormacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _formacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formacao.page */ "./src/app/formacao/formacao.page.ts");







var routes = [
    {
        path: '',
        component: _formacao_page__WEBPACK_IMPORTED_MODULE_6__["FormacaoPage"]
    }
];
var FormacaoPageModule = /** @class */ (function () {
    function FormacaoPageModule() {
    }
    FormacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_formacao_page__WEBPACK_IMPORTED_MODULE_6__["FormacaoPage"]]
        })
    ], FormacaoPageModule);
    return FormacaoPageModule;
}());



/***/ }),

/***/ "./src/app/formacao/formacao.page.html":
/*!*********************************************!*\
  !*** ./src/app/formacao/formacao.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container pink larger\">\n      <ion-slides\n        #slides\n        pager=\"true\"\n        [options]=\"slideOpts\"\n        (ionSlideDidChange)=\"slideChanged()\"\n      >\n        <ion-slide>\n          <h1>Qual a sua formação acadêmica?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/ensino-fundamental.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Ensino fundamental</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Qual a sua formação acadêmica?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/ensino-medio.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Ensino médio</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Qual a sua formação acadêmica?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/estudante.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Ensino médio completo</h1>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.44\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <!-- <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p *ngIf=\"slideIndex === 0\" class=\"animated fadeIn\">\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis\n            iure id nemo quibusdam, libero accusantium. Eum, cupiditate pariatur\n            voluptates porro tempore, suscipit aut voluptatibus delectus esse\n            voluptatum, neque harum quos.\n          </p>\n          <p *ngIf=\"slideIndex === 1\" class=\"animated fadeIn\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A itaque\n            voluptatibus debitis quidem adipisci, temporibus ad nam quae totam\n            veniam dolor dicta id nostrum repellendus fugiat cum odio dolores\n            autem.\n          </p>\n          <p *ngIf=\"slideIndex === 2\" class=\"animated fadeIn\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas\n            ipsa ratione alias ipsum laboriosam minus fuga, hic asperiores\n            fugiat quod molestiae unde, neque non, debitis excepturi recusandae\n            ab molestias dolorum?\n          </p> -->\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"rosatop\"\n          class=\"animated bounceIn\"\n          (click)=\"continue()\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/formacao/formacao.page.scss":
/*!*********************************************!*\
  !*** ./src/app/formacao/formacao.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1hY2FvL2Zvcm1hY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/formacao/formacao.page.ts":
/*!*******************************************!*\
  !*** ./src/app/formacao/formacao.page.ts ***!
  \*******************************************/
/*! exports provided: FormacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormacaoPage", function() { return FormacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FormacaoPage = /** @class */ (function () {
    function FormacaoPage(router, actRoute) {
        this.router = router;
        this.actRoute = actRoute;
        this.slideIndex = 0;
        this.slideOpts = {
            speed: 400
        };
        this.continuarLoading = false;
        this.sucesso = false;
    }
    FormacaoPage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
        this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
    };
    FormacaoPage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        var escolaridade;
        if (this.slideIndex == 0) {
            escolaridade = "EF";
        }
        else if (this.slideIndex == 1) {
            escolaridade = "EM";
        }
        else if (this.slideIndex == 2) {
            escolaridade = "GC";
        }
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            _this.router.navigate([
                "/pais/" + _this.tipoInter + "/" + _this.faixaEtaria + "/" + _this.acomodacao + "/" + escolaridade
            ]);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    FormacaoPage.prototype.slideChanged = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            _this.slideIndex = index;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormacaoPage.prototype, "slides", void 0);
    FormacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-formacao",
            template: __webpack_require__(/*! ./formacao.page.html */ "./src/app/formacao/formacao.page.html"),
            styles: [__webpack_require__(/*! ./formacao.page.scss */ "./src/app/formacao/formacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FormacaoPage);
    return FormacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=formacao-formacao-module.js.map