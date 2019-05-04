import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { ProgramasService } from '../programas.service';
var HomePage = /** @class */ (function () {
    function HomePage(router, navCtrl, programasService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.programasService = programasService;
        this.sendObj = {};
        this.slideIndex = 0;
        this.slideOpts = {
            speed: 400
        };
        this.continuarLoading = false;
        this.sucesso = false;
        var programa = {
            tipoInter: 'E',
            faixaEtaria: 10,
            acomodacao: ['RE'],
            nivel: [],
            escolaridade: ['EM'],
            destinos: [],
            duracao: 4
        };
        this.programasService.envia(programa)
            .subscribe(function (produto) {
            console.log('sucesso!');
            console.log(produto);
        }, function () {
            console.log('deu ruim');
        });
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
    tslib_1.__decorate([
        ViewChild("slides"),
        tslib_1.__metadata("design:type", Object)
    ], HomePage.prototype, "slides", void 0);
    HomePage = tslib_1.__decorate([
        Component({
            selector: "app-home",
            templateUrl: "home.page.html",
            styleUrls: ["home.page.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [Router, NavController, ProgramasService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map