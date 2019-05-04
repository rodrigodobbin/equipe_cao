import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisPage } from './pais.page';

describe('PaisPage', () => {
  let component: PaisPage;
  let fixture: ComponentFixture<PaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
