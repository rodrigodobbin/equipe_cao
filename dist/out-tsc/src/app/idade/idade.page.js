import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
var IdadePage = /** @class */ (function () {
    function IdadePage(actRoute) {
        this.actRoute = actRoute;
    }
    IdadePage.prototype.ngOnInit = function () {
        this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
        console.log(this.tipoInter);
    };
    IdadePage = tslib_1.__decorate([
        Component({
            selector: "app-idade",
            templateUrl: "./idade.page.html",
            styleUrls: ["./idade.page.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], IdadePage);
    return IdadePage;
}());
export { IdadePage };
//# sourceMappingURL=idade.page.js.map