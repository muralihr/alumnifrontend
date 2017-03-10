/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlumniDetailComponent } from './alumnidetail.component';

describe(' AlumniDetailComponent', () => {
  let component:  AlumniDetailComponent;
  let fixture: ComponentFixture< AlumniDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AlumniDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AlumniDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
