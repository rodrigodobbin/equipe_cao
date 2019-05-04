import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoPage } from './formacao.page';

describe('FormacaoPage', () => {
  let component: FormacaoPage;
  let fixture: ComponentFixture<FormacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
