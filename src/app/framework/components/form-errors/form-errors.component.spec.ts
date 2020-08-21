import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorsComponent } from './form-errors.component';
import { NgControl } from '@angular/forms';

describe('FormErrorsComponent', () => {
  let component: FormErrorsComponent;
  let fixture: ComponentFixture<FormErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormErrorsComponent],
      providers: [NgControl]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
