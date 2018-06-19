/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MygridComponent } from './mygrid.component';

describe('MygridComponent', () => {
  let component: MygridComponent;
  let fixture: ComponentFixture<MygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
