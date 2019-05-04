import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule } from "@angular/router";
var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomePageModule" },
    {
        path: "idade/:tipoInter",
        loadChildren: "./idade/idade.module#IdadePageModule"
    },
    { path: 'formacao', loadChildren: './formacao/formacao.module#FormacaoPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map