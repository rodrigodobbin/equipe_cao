(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["duracao-duracao-module"],{

/***/ "./src/app/duracao/duracao.module.ts":
/*!*******************************************!*\
  !*** ./src/app/duracao/duracao.module.ts ***!
  \*******************************************/
/*! exports provided: DuracaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuracaoPageModule", function() { return DuracaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _duracao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duracao.page */ "./src/app/duracao/duracao.page.ts");







var routes = [
    {
        path: '',
        component: _duracao_page__WEBPACK_IMPORTED_MODULE_6__["DuracaoPage"]
    }
];
var DuracaoPageModule = /** @class */ (function () {
    function DuracaoPageModule() {
    }
    DuracaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_duracao_page__WEBPACK_IMPORTED_MODULE_6__["DuracaoPage"]]
        })
    ], DuracaoPageModule);
    return DuracaoPageModule;
}());



/***/ }),

/***/ "./src/app/duracao/duracao.page.html":
/*!*******************************************!*\
  !*** ./src/app/duracao/duracao.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Tempo de curso</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"animated slideInUp container\">\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(2)\"\n      *ngIf=\"duracao !== 2\"\n    >\n      2 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 2\"\n    >\n      2 Semanas\n    </ion-button>\n    <img src=\"../../assets/img/relogio.png\" />\n  </div>\n\n  <div class=\"animated slideInUp container\">\n    <img src=\"../../assets/img/camera.png\" />\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(4)\"\n      *ngIf=\"duracao !== 4\"\n    >\n      4 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 4\"\n    >\n      4 Semanas\n    </ion-button>\n  </div>\n\n  <div class=\"animated slideInUp container\">\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(6)\"\n      *ngIf=\"duracao !== 6\"\n    >\n      6 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 6\"\n    >\n      6 Semanas\n    </ion-button>\n    <img src=\"../../assets/img/aviao.png\" />\n  </div>\n\n  <div class=\"animated slideInUp container\">\n    <img src=\"../../assets/img/cartao.png\" />\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(12)\"\n      *ngIf=\"duracao !== 12\"\n    >\n      12 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 12\"\n    >\n      12 Semanas\n    </ion-button>\n  </div>\n\n  <div class=\"animated slideInUp container\">\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(24)\"\n      *ngIf=\"duracao !== 24\"\n    >\n      24 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 24\"\n    >\n      24 Semanas\n    </ion-button>\n    <img src=\"../../assets/img/id.png\" />\n  </div>\n\n  <div class=\"animated slideInUp container\">\n    <img src=\"../../assets/img/globo.png\" />\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(36)\"\n      *ngIf=\"duracao !== 36\"\n    >\n      36 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 36\"\n    >\n      36 Semanas\n    </ion-button>\n  </div>\n\n  <div class=\"animated slideInUp container\">\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(52)\"\n      *ngIf=\"duracao !== 52\"\n    >\n      52 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 52\"\n    >\n      52 Semanas\n    </ion-button>\n    <img src=\"../../assets/img/musica.png\" />\n  </div>\n\n  <div class=\"animated slideInUp container\">\n    <img src=\"../../assets/img/feliz.png\" />\n    <ion-button\n      shape=\"round\"\n      color=\"dark\"\n      (click)=\"escolheDuracao(156)\"\n      *ngIf=\"duracao !== 156\"\n    >\n      156 Semanas\n    </ion-button>\n    <ion-button\n      shape=\"round\"\n      color=\"laranjatop\"\n      (click)=\"escolheDuracao(0)\"\n      *ngIf=\"duracao === 156\"\n    >\n      156 Semanas\n    </ion-button>\n  </div>\n\n  <div class=\"buttonDiv\">\n    <ion-button\n      size=\"large\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"laranjatop\"\n      class=\"animated fadeIn\"\n      (click)=\"continue()\"\n      [disabled]=\"duracao === 0\"\n    >\n      <span *ngIf=\"!continuarLoading && !sucesso\">Finalizar</span>\n      <ion-spinner\n        name=\"crescent\"\n        *ngIf=\"continuarLoading && !sucesso\"\n      ></ion-spinner>\n      <ion-icon\n        name=\"thumbs-up\"\n        *ngIf=\"sucesso\"\n        class=\"animated slideInUp\"\n      ></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/duracao/duracao.page.scss":
/*!*******************************************!*\
  !*** ./src/app/duracao/duracao.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-laranjatop); }\n\nion-title {\n  text-align: center;\n  --color: #fff; }\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 2rem 0; }\n\n.buttonDiv {\n  padding: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvYmJpbi9wcm9qZXRvcy9lcXVpcGVfY2FvL3NyYy9hcHAvZHVyYWNhby9kdXJhY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsYUFBUSxFQUFBOztBQUdWO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2R1cmFjYW8vZHVyYWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxhcmFuamF0b3ApO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi5idXR0b25EaXYge1xuICBwYWRkaW5nOiAycmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/duracao/duracao.page.ts":
/*!*****************************************!*\
  !*** ./src/app/duracao/duracao.page.ts ***!
  \*****************************************/
/*! exports provided: DuracaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuracaoPage", function() { return DuracaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _programas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../programas.service */ "./src/app/programas.service.ts");




var DuracaoPage = /** @class */ (function () {
    function DuracaoPage(actRoute, programaService, router) {
        this.actRoute = actRoute;
        this.programaService = programaService;
        this.router = router;
        this.duracao = 0;
        this.continuarLoading = false;
        this.sucesso = false;
    }
    DuracaoPage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
        this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
        this.escolaridade = this.actRoute.snapshot.params["escolaridade"];
        this.pais = this.actRoute.snapshot.params["pais"];
        this.nivel = this.actRoute.snapshot.params["nivel"];
        this.genero = this.actRoute.snapshot.params["genero"];
        this.gostaCrianca = this.actRoute.snapshot.params["gostaCrianca"];
    };
    DuracaoPage.prototype.escolheDuracao = function (duracao) {
        this.duracao = duracao;
    };
    DuracaoPage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        var programa = {
            tipoInter: this.tipoInter,
            faixaEtaria: this.faixaEtaria,
            acomodacao: [this.acomodacao],
            nivel: [this.nivel],
            escolaridade: [this.escolaridade],
            destinos: [this.pais],
            duracao: this.duracao,
            gostaCrianca: this.gostaCrianca === "T" ? true : false,
            sexo: this.genero
        };
        var variavel = [];
        variavel["Cursos de idiomas"] = "CI";
        variavel["Programa de Férias"] = "PF";
        variavel["High School"] = "HS";
        variavel["Telefone da Experimento"] = "TE";
        variavel[""] = "TE";
        variavel["Programa Universitário e Programa Profissional"] = "PUPP";
        variavel["Programa Universitário"] = "PU";
        variavel["Formação Profissional"] = "FP";
        variavel["Trabalho voluntário"] = "TV";
        variavel["Aupair"] = "AU";
        variavel["Demi pair"] = "DEMI";
        this.programaService.envia(programa).subscribe(function (programa) {
            _this.sucesso = true;
            setTimeout(function () {
                _this.router.navigate([
                    "/resultadoprograma/" + variavel[programa.cursoCode ? programa.cursoCode : ""]
                ]);
            }, 500);
            setTimeout(function () {
                _this.sucesso = false;
                _this.continuarLoading = false;
            }, 1000);
        }, function () {
            alert("Ocorreu um erro inesperado");
            _this.sucesso = false;
            _this.continuarLoading = false;
        });
    };
    DuracaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-duracao",
            template: __webpack_require__(/*! ./duracao.page.html */ "./src/app/duracao/duracao.page.html"),
            styles: [__webpack_require__(/*! ./duracao.page.scss */ "./src/app/duracao/duracao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _programas_service__WEBPACK_IMPORTED_MODULE_3__["ProgramasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DuracaoPage);
    return DuracaoPage;
}());



/***/ }),

/***/ "./src/app/programas.service.ts":
/*!**************************************!*\
  !*** ./src/app/programas.service.ts ***!
  \**************************************/
/*! exports provided: ProgramasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramasService", function() { return ProgramasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProgramasService = /** @class */ (function () {
    function ProgramasService(_http) {
        this._http = _http;
    }
    ProgramasService.prototype.envia = function (programa) {
        return this._http.post('http://34.201.76.22:7854/getTipo', programa);
    };
    ProgramasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProgramasService);
    return ProgramasService;
}());



/***/ })

}]);
//# sourceMappingURL=duracao-duracao-module.js.map