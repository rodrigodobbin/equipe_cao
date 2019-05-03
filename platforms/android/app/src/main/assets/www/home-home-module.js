(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"question_slider\">\n    <div class=\"container green larger\">\n      <ion-slides\n        #slides\n        pager=\"true\"\n        [options]=\"slideOpts\"\n        (ionSlideDidChange)=\"slideChanged()\"\n      >\n        <ion-slide>\n          <h1>Eaí, qual é seu objetivo?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/estudante.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Estudar</h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Eaí, qual é seu objetivo?</h1>\n          <div class=\"circle\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <ion-avatar>\n              <img src=\"../../assets/img/business-man.png\" />\n            </ion-avatar>\n          </div>\n          <h1>Estudar e trabalhar</h1>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"container smaller\">\n      <ion-progress-bar value=\"0.1\"></ion-progress-bar>\n\n      <div class=\"padding\">\n        <div class=\"info\">\n          <div>\n            <ion-icon name=\"bulb\"></ion-icon>\n          </div>\n          <p *ngIf=\"slideIndex === 0\" class=\"animated slideInRight\">\n            Oportunidade única de desenvolver habilidades do idioma no país onde\n            ele é falado, com professores especializados e apoio de material\n            didático e ótimas instalações. Todas as escolas são de excelente\n            qualidade e escolhidas criteriosamente pela equipe de experts da\n            Experimento.\n          </p>\n          <p *ngIf=\"slideIndex === 1\" class=\"animated slideInRight\">\n            Que tal aprimorar o idioma com uma experiência de estudo e trabalho\n            no exterior? Já pensou em receber um salário em dólar ou euro e de\n            quebra custear uma parte das despesas durante o seu intercâmbio no\n            exterior? ou até mesmo fazer um trabalho voluntário?\n          </p>\n        </div>\n        <ion-button\n          size=\"large\"\n          expand=\"full\"\n          shape=\"round\"\n          color=\"verdetop\"\n          class=\"animated bounceIn\"\n          (click)=\"continue()\"\n        >\n          <span *ngIf=\"!continuarLoading && !sucesso\">Continuar</span>\n          <ion-spinner\n            name=\"crescent\"\n            *ngIf=\"continuarLoading && !sucesso\"\n          ></ion-spinner>\n          <ion-icon\n            name=\"thumbs-up\"\n            *ngIf=\"sucesso\"\n            class=\"animated slideInUp\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question_slider {\n  display: flex;\n  flex-flow: column;\n  height: 100vh; }\n  .question_slider .container {\n    height: 50%; }\n  .question_slider .container.green {\n      background: var(--ion-color-verdetop); }\n  .question_slider .container.blue {\n      background: var(--ion-color-azultop); }\n  .question_slider .container ion-slides {\n      height: 100%;\n      --bullet-background: var(--ion-color-dark);\n      --bullet-background-active: var(--ion-color-dark); }\n  .question_slider .container ion-slides ion-slide {\n        flex-flow: column;\n        justify-content: flex-start; }\n  .question_slider .container ion-slides ion-slide h1 {\n          color: var(--ion-color-light);\n          margin-bottom: 1.4rem;\n          font-size: 1.4rem; }\n  .question_slider .container ion-slides ion-slide .circle {\n          position: relative;\n          width: 65%;\n          height: 65%; }\n  .question_slider .container ion-slides ion-slide .circle div {\n            position: absolute;\n            background: #fff;\n            border-radius: 50%; }\n  .question_slider .container ion-slides ion-slide .circle div:nth-child(1) {\n              top: 0;\n              left: 0;\n              opacity: 0.25;\n              width: 100%;\n              height: 100%;\n              z-index: 100; }\n  .question_slider .container ion-slides ion-slide .circle div:nth-child(2) {\n              top: 8%;\n              left: 8%;\n              opacity: 0.5;\n              width: 84%;\n              height: 84%;\n              z-index: 1000; }\n  .question_slider .container ion-slides ion-slide .circle div:nth-child(3) {\n              top: 16%;\n              left: 16%;\n              opacity: 0.75;\n              width: 68%;\n              height: 68%;\n              z-index: 10000; }\n  .question_slider .container ion-slides ion-slide .circle div:nth-child(4) {\n              top: 24%;\n              left: 24%;\n              background: var(--ion-color-verdetop);\n              width: 52%;\n              height: 52%;\n              z-index: 100000; }\n  .question_slider .container ion-slides ion-slide .circle ion-avatar {\n            position: absolute;\n            top: 26%;\n            left: 26%;\n            width: 48%;\n            height: 48%;\n            z-index: 1000000; }\n  .question_slider .container ion-slides ion-slide .circle ion-avatar img {\n              width: 100%;\n              height: 100%; }\n  .question_slider .container .padding {\n      padding: 2rem;\n      height: 100%;\n      justify-content: center;\n      display: flex;\n      flex-flow: column; }\n  .question_slider .container .padding .info {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 2.4rem; }\n  .question_slider .container .padding .info div {\n          margin-right: 2rem; }\n  .question_slider .container .padding .info div ion-icon {\n            font-size: 2rem; }\n  .question_slider .container .padding .info p {\n          font-size: 0.9rem; }\n  .question_slider .container .padding ion-button {\n        --background: var(--ion-color-verdetop); }\n  .question_slider .container.larger {\n      height: 55%; }\n  .question_slider .container.larger ion-slides ion-slide h1 {\n        margin-bottom: 1.2rem;\n        margin-top: 0.8rem; }\n  .question_slider .container.smaller {\n      height: 44%; }\n  .question_slider .container.smaller .padding .info {\n        margin-bottom: 2rem; }\n  .ion-color-verdetop {\n  --ion-color-base: #8bc713;\n  --ion-color-base-rgb: 139, 199, 19;\n  --ion-color-contrast: #fff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #7eb511;\n  --ion-color-tint: #92d213; }\n  .ion-color-azultop {\n  --ion-color-base: #274580;\n  --ion-color-base-rgb: 39, 69, 128;\n  --ion-color-contrast: #fff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #233e73;\n  --ion-color-tint: #2c4d8e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvYmJpbi9wcm9qZXRvcy9lcXVpcGVfY2FvL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0VBSGY7SUFLSSxXQUFXLEVBQUE7RUFMZjtNQU9NLHFDQUFxQyxFQUFBO0VBUDNDO01BVU0sb0NBQW9DLEVBQUE7RUFWMUM7TUFhTSxZQUFZO01BQ1osMENBQW9CO01BQ3BCLGlEQUEyQixFQUFBO0VBZmpDO1FBaUJRLGlCQUFpQjtRQUNqQiwyQkFBMkIsRUFBQTtFQWxCbkM7VUFvQlUsNkJBQTZCO1VBQzdCLHFCQUFxQjtVQUNyQixpQkFBaUIsRUFBQTtFQXRCM0I7VUF5QlUsa0JBQWtCO1VBQ2xCLFVBQVU7VUFDVixXQUFXLEVBQUE7RUEzQnJCO1lBNkJZLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsa0JBQWtCLEVBQUE7RUEvQjlCO2NBaUNjLE1BQU07Y0FDTixPQUFPO2NBQ1AsYUFBYTtjQUNiLFdBQVc7Y0FDWCxZQUFZO2NBQ1osWUFBWSxFQUFBO0VBdEMxQjtjQXlDYyxPQUFPO2NBQ1AsUUFBUTtjQUNSLFlBQVk7Y0FDWixVQUFVO2NBQ1YsV0FBVztjQUNYLGFBQWEsRUFBQTtFQTlDM0I7Y0FpRGMsUUFBUTtjQUNSLFNBQVM7Y0FDVCxhQUFhO2NBQ2IsVUFBVTtjQUNWLFdBQVc7Y0FDWCxjQUFjLEVBQUE7RUF0RDVCO2NBeURjLFFBQVE7Y0FDUixTQUFTO2NBQ1QscUNBQXFDO2NBQ3JDLFVBQVU7Y0FDVixXQUFXO2NBQ1gsZUFBZSxFQUFBO0VBOUQ3QjtZQWtFWSxrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVO1lBQ1YsV0FBVztZQUNYLGdCQUFnQixFQUFBO0VBdkU1QjtjQXlFYyxXQUFXO2NBQ1gsWUFBWSxFQUFBO0VBMUUxQjtNQWlGTSxhQUFhO01BQ2IsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsaUJBQWlCLEVBQUE7RUFyRnZCO1FBdUZRLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHFCQUFxQixFQUFBO0VBMUY3QjtVQTRGVSxrQkFBa0IsRUFBQTtFQTVGNUI7WUE4RlksZUFBZSxFQUFBO0VBOUYzQjtVQWtHVSxpQkFBaUIsRUFBQTtFQWxHM0I7UUFzR1EsdUNBQWEsRUFBQTtFQXRHckI7TUEwR00sV0FBVyxFQUFBO0VBMUdqQjtRQThHWSxxQkFBcUI7UUFDckIsa0JBQWtCLEVBQUE7RUEvRzlCO01BcUhNLFdBQVcsRUFBQTtFQXJIakI7UUF5SFUsbUJBQW1CLEVBQUE7RUFPN0I7RUFDRSx5QkFBaUI7RUFDakIsa0NBQXFCO0VBQ3JCLDBCQUFxQjtFQUNyQix1Q0FBeUI7RUFDekIsMEJBQWtCO0VBQ2xCLHlCQUFpQixFQUFBO0VBR25CO0VBQ0UseUJBQWlCO0VBQ2pCLGlDQUFxQjtFQUNyQiwwQkFBcUI7RUFDckIsdUNBQXlCO0VBQ3pCLDBCQUFrQjtFQUNsQix5QkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb25fc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogNTAlO1xuICAgICYuZ3JlZW4ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZlcmRldG9wKTtcbiAgICB9XG4gICAgJi5ibHVlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1henVsdG9wKTtcbiAgICB9XG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI1O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIHRvcDogOCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDglO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgICAgIGhlaWdodDogODQlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICB0b3A6IDE2JTtcbiAgICAgICAgICAgICAgbGVmdDogMTYlO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgICB3aWR0aDogNjglO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDY4JTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgIHRvcDogMjQlO1xuICAgICAgICAgICAgICBsZWZ0OiAyNCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12ZXJkZXRvcCk7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MiU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTIlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyNiU7XG4gICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgICAgaGVpZ2h0OiA0OCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnBhZGRpbmcge1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgLmluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xuICAgICAgICBkaXYge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmVyZGV0b3ApO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmxhcmdlciB7XG4gICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5zbWFsbGVyIHtcbiAgICAgIGhlaWdodDogNDQlO1xuICAgICAgLnBhZGRpbmcge1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW9uLWNvbG9yLXZlcmRldG9wIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzhiYzcxMztcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDEzOSwgMTk5LCAxOTtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICM3ZWI1MTE7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICM5MmQyMTM7XG59XG5cbi5pb24tY29sb3ItYXp1bHRvcCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMyNzQ1ODA7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiAzOSwgNjksIDEyODtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICMyMzNlNzM7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICMyYzRkOGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HomePage = /** @class */ (function () {
    function HomePage(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.sendObj = {};
        this.slideIndex = 0;
        this.slideOpts = {
            speed: 400
        };
        this.continuarLoading = false;
        this.sucesso = false;
    }
    HomePage.prototype.continue = function () {
        var _this = this;
        if (this.continuarLoading)
            return;
        this.continuarLoading = true;
        var tipoInter = this.slideIndex === 0 ? "E" : "TE";
        this.sendObj["tipoInter"] = tipoInter;
        setTimeout(function () {
            _this.sucesso = true;
        }, 600);
        setTimeout(function () {
            var navigationExtras = {
                queryParams: {
                    sendObj: _this.sendObj
                }
            };
            _this.router.navigate(["/idade/" + _this.sendObj["tipoInter"]]);
            // this.navCtrl.navigateForward("/idade", navigationExtras);
        }, 1200);
        setTimeout(function () {
            _this.sucesso = false;
            _this.continuarLoading = false;
        }, 1600);
    };
    HomePage.prototype.slideChanged = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            _this.slideIndex = index;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePage.prototype, "slides", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map