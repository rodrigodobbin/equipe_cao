import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroPage } from './genero.page';

describe('GeneroPage', () => {
  let component: GeneroPage;
  let fixture: ComponentFixture<GeneroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
