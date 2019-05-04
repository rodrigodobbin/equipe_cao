import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormacaoPage } from './formacao.page';
var routes = [
    {
        path: '',
        component: FormacaoPage
    }
];
var FormacaoPageModule = /** @class */ (function () {
    function FormacaoPageModule() {
    }
    FormacaoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FormacaoPage]
        })
    ], FormacaoPageModule);
    return FormacaoPageModule;
}());
export { FormacaoPageModule };
//# sourceMappingURL=formacao.module.js.map