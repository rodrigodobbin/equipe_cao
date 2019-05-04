import { TestBed } from '@angular/core/testing';
import { ProgramasService } from './programas.service';
describe('ProgramasService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProgramasService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=programas.service.spec.js.map