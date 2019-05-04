import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriancaPage } from './crianca.page';

describe('CriancaPage', () => {
  let component: CriancaPage;
  let fixture: ComponentFixture<CriancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriancaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
