import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from 'src/app/core/component/base-control.component';
import { NgControl } from '@angular/forms';

export const baseControlFactory = (ngControl: NgControl) => {
  return ngControl.valueAccessor;
};

@Component({
  selector: 'jps-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  providers: [
    {
      provide: BaseControlComponent,
      useFactory: baseControlFactory,
      deps: [NgControl]
    }
  ]
})
export class FormErrorsComponent {

  constructor(protected baseControlComponent: BaseControlComponent) { }

  get hasError(): boolean {
    return this.baseControlComponent?.hasError;
  }

  get errors(): string[] {
    return this.baseControlComponent?.errors;
  }
}
