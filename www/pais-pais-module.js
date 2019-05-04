(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pais-pais-module"],{

/***/ "./src/app/pais/pais.module.ts":
/*!*************************************!*\
  !*** ./src/app/pais/pais.module.ts ***!
  \*************************************/
/*! exports provided: PaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageModule", function() { return PaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pais.page */ "./src/app/pais/pais.page.ts");







var routes = [
    {
        path: '',
        component: _pais_page__WEBPACK_IMPORTED_MODULE_6__["PaisPage"]
    }
];
var PaisPageModule = /** @class */ (function () {
    function PaisPageModule() {
    }
    PaisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pais_page__WEBPACK_IMPORTED_MODULE_6__["PaisPage"]]
        })
    ], PaisPageModule);
    return PaisPageModule;
}());



/***/ }),

/***/ "./src/app/pais/pais.page.html":
/*!*************************************!*\
  !*** ./src/app/pais/pais.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container orange larger\">\n      <ion-slides\n        #slides\n        pager=\"true\"\n        [options]=\"slideOpts\"\n        (ionSlideDidChange)=\"slideChanged()\"\n      >\n        <ion-slide>\n          <h1>Em qual país você quer fazer seu intercâmbio?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/irlanda.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Irlanda</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Em qual país você quer fazer seu intercâmbio?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/canada.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Canadá</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Em qual país você quer fazer seu intercâmbio?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/australia.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Austrália</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Em qual país você quer fazer seu intercâmbio?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/nvzelandia.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Nova Zelândia</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Em qual país você quer fazer seu intercâmbio?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/usa.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Estados Unidos</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Em qual país você quer fazer seu intercâmbio?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/africa-do-sul.png\" />\n            </ion-avatar>\n          </div>\n          <h1>África do Sul</h1>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.55\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p *ngIf=\"slideIndex === 0\" class=\"animated fadeIn\">\n            <strong>Você sabia</strong> que Dublin, a capital da Irlanda, possui\n            wi-fi gratuito nos ônibus, o que pode ser de grande ajuda para quem\n            está recém chegando na cidade.\n          </p>\n          <p *ngIf=\"slideIndex === 1\" class=\"animated fadeIn\">\n            <strong>Você sabia</strong> que a cidade de Niagara Falls, na divisa\n            do Canadá com os EUA, fica a cerca de 1h de Toronto, entre os lagos\n            Erie e Ontário. Tudo ali gira em torno das enormes cataratas, que\n            despejam água de cerca de 60m de altura, formando arco-íris e nuvens\n            de vapor que refrescam os visitantes.\n          </p>\n          <p *ngIf=\"slideIndex === 2\" class=\"animated fadeIn\">\n            <strong>Você sabia</strong> que é possível comer carne de canguru na\n            Austrália?! Pois é! Por mais estranho que possa parecer, o hábito\n            (criado há anos pelos aborígenes) que é símbolo do país vem\n            crescendo entre os australianos nos últimos anos.\n          </p>\n          <p *ngIf=\"slideIndex === 3\" class=\"animated fadeIn\">\n            <strong>Você sabia</strong> que na Nova Zelandia cerca de 30% do\n            país é coberto de florestas naturais.\n          </p>\n          <p *ngIf=\"slideIndex === 4\" class=\"animated fadeIn\">\n            <strong>Você sabia</strong> que \"Grand Central Terminal\" localizado\n            em New York é o maior terminal de trens do mundo e tem uma\n            arquitetura impressionante, que já serviu de cenário para mais de 40\n            filmes. Uma verdadeira maravilha da engenharia: 44 plataformas com\n            67 trilhos bem no meio de Manhattan.\n          </p>\n          <p *ngIf=\"slideIndex === 5\" class=\"animated fadeIn\">\n            <strong>Você sabia</strong> que fazer intercâmbio na África do Sul é\n            mais em conta do que fazer um intercâmbio em países da Europa, EUA\n            ou Canadá. Claro, tudo depende do nível de escola que você vai\n            escolher.\n          </p>\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"laranjatop\"\n          class=\"animated bounceIn\"\n          (click)=\"continue()\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pais/pais.page.scss":
/*!*************************************!*\
  !*** ./src/app/pais/pais.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaXMvcGFpcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pais/pais.page.ts":
/*!***********************************!*\
  !*** ./src/app/pais/pais.page.ts ***!
  \***********************************/
/*! exports provided: PaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPage", function() { return PaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PaisPage = /** @class */ (function () {
    function PaisPage(router, actRoute) {
        this.router = router;
        this.actRoute = actRoute;
        this.slideIndex = 0;
        this.slideOpts = {
            speed: 400
        };
        this.continuarLoading = false;
        this.sucesso = false;
    }
    PaisPage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
        this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
        this.escolaridade = this.actRoute.snapshot.params["escolaridade"];
    };
    PaisPage.prototype.slideChanged = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            _this.slideIndex = index;
        });
    };
    PaisPage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        var destinos;
        if (this.slideIndex == 0) {
            destinos = "IRL";
        }
        else if (this.slideIndex == 1) {
            destinos = "CAN";
        }
        else if (this.slideIndex == 2) {
            destinos = "AUS";
        }
        else if (this.slideIndex == 3) {
            destinos = "NZL";
        }
        else if (this.slideIndex == 4) {
            destinos = "EUA";
        }
        else if (this.slideIndex == 5) {
            destinos = "ZA";
        }
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            _this.router.navigate([
                "/idioma/" + _this.tipoInter + "/" + _this.faixaEtaria + "/" + _this.acomodacao + "/" + _this.escolaridade + "/" + destinos
            ]);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaisPage.prototype, "slides", void 0);
    PaisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pais",
            template: __webpack_require__(/*! ./pais.page.html */ "./src/app/pais/pais.page.html"),
            styles: [__webpack_require__(/*! ./pais.page.scss */ "./src/app/pais/pais.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PaisPage);
    return PaisPage;
}());



/***/ })

}]);
//# sourceMappingURL=pais-pais-module.js.map