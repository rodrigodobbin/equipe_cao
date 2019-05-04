import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProgramasService = /** @class */ (function () {
    function ProgramasService(_http) {
        this._http = _http;
    }
    ProgramasService.prototype.envia = function (programa) {
        return this._http.post('http://35.198.15.237:7854/getTipo', programa);
    };
    ProgramasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProgramasService);
    return ProgramasService;
}());
export { ProgramasService };
//# sourceMappingURL=programas.service.js.map