import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { IdadePage } from "./idade.page";
var routes = [
    {
        path: "",
        component: IdadePage
    }
];
var IdadePageModule = /** @class */ (function () {
    function IdadePageModule() {
    }
    IdadePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [IdadePage]
        })
    ], IdadePageModule);
    return IdadePageModule;
}());
export { IdadePageModule };
//# sourceMappingURL=idade.module.js.map