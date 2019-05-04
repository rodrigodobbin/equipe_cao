import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomaPage } from './idioma.page';

describe('IdiomaPage', () => {
  let component: IdiomaPage;
  let fixture: ComponentFixture<IdiomaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
