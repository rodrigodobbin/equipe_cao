import { TestBed } from '@angular/core/testing';

import { ProgramasService } from './programas.service';

describe('ProgramasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramasService = TestBed.get(ProgramasService);
    expect(service).toBeTruthy();
  });
});
