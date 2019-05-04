import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrigadoPage } from './obrigado.page';

describe('ObrigadoPage', () => {
  let component: ObrigadoPage;
  let fixture: ComponentFixture<ObrigadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrigadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrigadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
