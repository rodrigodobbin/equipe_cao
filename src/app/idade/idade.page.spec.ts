import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadePage } from './idade.page';

describe('IdadePage', () => {
  let component: IdadePage;
  let fixture: ComponentFixture<IdadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
