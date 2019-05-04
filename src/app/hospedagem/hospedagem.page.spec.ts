import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemPage } from './hospedagem.page';

describe('HospedagemPage', () => {
  let component: HospedagemPage;
  let fixture: ComponentFixture<HospedagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
