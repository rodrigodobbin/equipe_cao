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

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container blue\">\n      <ion-slides\n        #slides\n        pager=\"false\"\n        [options]=\"slideOpts\"\n        (ionSlideDidChange)=\"slideChanged()\"\n      >\n        <ion-slide>\n          <h1>\n            <span *ngIf=\"!dia && !mes && !ano\"\n              >Diz aê, qual o dia do seu nascimento...</span\n            >\n            <span *ngIf=\"dia && !mes && !ano\"\n              >Boa! agora precisamos do mês, escolhe aê...</span\n            >\n            <span *ngIf=\"dia && mes && !ano\">Agora só falta o ano...</span>\n            <span *ngIf=\"dia && mes && ano\"\n              >Pronto, acertei? Agora podemos seguir...</span\n            >\n          </h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <h2 class=\"number\">\n                <ion-spinner name=\"dots\" *ngIf=\"!faixaEtaria\"></ion-spinner>\n                <span *ngIf=\"faixaEtaria\">{{ faixaEtaria }}</span>\n              </h2>\n            </ion-avatar>\n            <div\n              class=\"dia datas animated slideInDown\"\n              [ngClass]=\"{ active: dia }\"\n            >\n              <ion-button color=\"azultop\" fill=\"clear\" (click)=\"escolheDia()\">\n                <span *ngIf=\"!dia\">Dia</span>\n                <span *ngIf=\"dia\">{{ dia }}</span>\n              </ion-button>\n            </div>\n            <div\n              class=\"mes datas animated slideInUp\"\n              [ngClass]=\"{ active: mes }\"\n            >\n              <ion-button\n                color=\"azultop\"\n                fill=\"clear\"\n                (click)=\"escolheMes()\"\n                [disabled]=\"!dia\"\n              >\n                <span *ngIf=\"!mes\">Mês</span>\n                <span *ngIf=\"mes\">{{ mes }}</span>\n              </ion-button>\n            </div>\n            <div\n              class=\"ano datas animated slideInRight\"\n              [ngClass]=\"{ active: ano }\"\n            >\n              <ion-button\n                color=\"azultop\"\n                fill=\"clear\"\n                (click)=\"escolheAno()\"\n                [disabled]=\"!dia || !mes\"\n              >\n                <span *ngIf=\"!ano\">Ano</span>\n                <span *ngIf=\"ano\">{{ ano }}</span>\n              </ion-button>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.22\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p class=\"animated fadeIn\">\n            <strong>Fique atento!</strong> Caso escolha uma localidade nos EUA é\n            necessário verificar se a acomodação escolhida permite a hospedagem\n            para estudantes da sua idade, as leis americanas variam de cidade\n            para cidade.\n          </p>\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"azultop\"\n          class=\"animated fadeIn\"\n          (click)=\"continue()\"\n          [disabled]=\"!dia || !mes || !ano\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assets_objects_dias_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/objects/dias.json */ "./src/assets/objects/dias.json");
var _assets_objects_dias_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/objects/dias.json */ "./src/assets/objects/dias.json", 1);
/* harmony import */ var _assets_objects_meses_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/objects/meses.json */ "./src/assets/objects/meses.json");
var _assets_objects_meses_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/objects/meses.json */ "./src/assets/objects/meses.json", 1);






var IdadePage = /** @class */ (function () {
    function IdadePage(actRoute, pickerCtrl, router) {
        this.actRoute = actRoute;
        this.pickerCtrl = pickerCtrl;
        this.router = router;
        this.continuarLoading = false;
        this.sucesso = false;
    }
    IdadePage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
    };
    IdadePage.prototype.escolheDia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pickerCtrl.create({
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (item) {
                                        _this.dia = item.Dia.value;
                                        _this.calculaIdade();
                                    }
                                },
                                {
                                    text: "Cancelar",
                                    role: "cancel"
                                }
                            ],
                            columns: [
                                {
                                    name: "Dia",
                                    options: _assets_objects_dias_json__WEBPACK_IMPORTED_MODULE_4__
                                }
                            ]
                        })];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IdadePage.prototype.escolheMes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pickerCtrl.create({
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (item) {
                                        _this.mes = item.Mes.value;
                                        _this.calculaIdade();
                                    }
                                },
                                {
                                    text: "Cancelar",
                                    role: "cancel"
                                }
                            ],
                            columns: [
                                {
                                    name: "Mes",
                                    options: _assets_objects_meses_json__WEBPACK_IMPORTED_MODULE_5__
                                }
                            ]
                        })];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IdadePage.prototype.escolheAno = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var anos, i, obj, picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        anos = [];
                        for (i = 2010; i > 1970; i--) {
                            obj = {
                                text: "" + i,
                                value: i
                            };
                            anos.push(obj);
                        }
                        return [4 /*yield*/, this.pickerCtrl.create({
                                buttons: [
                                    {
                                        text: "Ok",
                                        handler: function (item) {
                                            _this.ano = item.Ano.value;
                                            _this.calculaIdade();
                                        }
                                    },
                                    {
                                        text: "Cancelar",
                                        role: "cancel"
                                    }
                                ],
                                columns: [
                                    {
                                        name: "Ano",
                                        options: anos
                                    }
                                ]
                            })];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IdadePage.prototype.calculaIdade = function () {
        if (this.dia && this.mes && this.ano) {
            this.faixaEtaria = this.idade(this.ano, this.mes, this.dia);
        }
    };
    IdadePage.prototype.idade = function (ano_aniversario, mes_aniversario, dia_aniversario) {
        var d = new Date(), ano_atual = d.getFullYear(), mes_atual = d.getMonth() + 1, dia_atual = d.getDate();
        ano_aniversario = +ano_aniversario;
        mes_aniversario = +mes_aniversario;
        dia_aniversario = +dia_aniversario;
        var quantos_anos = ano_atual - ano_aniversario;
        if (mes_atual < mes_aniversario ||
            (mes_atual == mes_aniversario && dia_atual < dia_aniversario)) {
            quantos_anos--;
        }
        return quantos_anos < 0 ? 0 : quantos_anos;
    };
    IdadePage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            _this.router.navigate([
                "/hospedagem/" + _this.tipoInter + "/" + _this.faixaEtaria
            ]);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    IdadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-idade",
            template: __webpack_require__(/*! ./idade.page.html */ "./src/app/idade/idade.page.html"),
            styles: [__webpack_require__(/*! ./idade.page.scss */ "./src/app/idade/idade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IdadePage);
    return IdadePage;
}());



/***/ }),

/***/ "./src/assets/objects/dias.json":
/*!**************************************!*\
  !*** ./src/assets/objects/dias.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {

module.exports = [{"text":"1","value":1},{"text":"2","value":2},{"text":"3","value":3},{"text":"4","value":4},{"text":"5","value":5},{"text":"6","value":6},{"text":"7","value":7},{"text":"8","value":8},{"text":"9","value":9},{"text":"10","value":10},{"text":"11","value":11},{"text":"12","value":12},{"text":"13","value":13},{"text":"14","value":14},{"text":"15","value":15},{"text":"16","value":16},{"text":"17","value":17},{"text":"18","value":18},{"text":"19","value":19},{"text":"20","value":20},{"text":"21","value":21},{"text":"22","value":22},{"text":"23","value":23},{"text":"24","value":24},{"text":"25","value":25},{"text":"26","value":26},{"text":"27","value":27},{"text":"28","value":28},{"text":"29","value":29},{"text":"30","value":30},{"text":"31","value":31}];

/***/ }),

/***/ "./src/assets/objects/meses.json":
/*!***************************************!*\
  !*** ./src/assets/objects/meses.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"text":"Janeiro","value":1},{"text":"Fevereiro","value":2},{"text":"Março","value":3},{"text":"Abril","value":4},{"text":"Maio","value":5},{"text":"Junho","value":6},{"text":"Julho","value":7},{"text":"Agosto","value":8},{"text":"Setembro","value":9},{"text":"Outubro","value":10},{"text":"Novembro","value":11},{"text":"Dezembro","value":12}];

/***/ })

}]);
//# sourceMappingURL=idade-idade-module.js.map