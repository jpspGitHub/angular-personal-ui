import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BaseControlComponent } from 'src/app/core/component/base-control.component';

@Component({
  selector: 'jps-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseControlComponent implements ControlValueAccessor {

  @Input() placeholder: string;
  @Input() type: 'text' | 'number' | 'decimal' | 'email' | 'password' = 'text';
  @Input() rows = 1;
  constructor(public ngControl: NgControl) {
    super(ngControl);
    ngControl.valueAccessor = this;
  }

  val = '';

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  onChange: any = () => { };
  onTouch: any = () => { };

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
