import { BaseComponent } from './base.component';
import { NgControl, Validators, AbstractControl } from '@angular/forms';

export abstract class BaseControlComponent extends BaseComponent {
  errors: string[] = [];

  get hasError(): boolean {
    return this.errors.length > 0;
  }

  get required(): boolean {
    const validator = this.ngControl.control?.validator({} as AbstractControl);
    return validator?.required;
  }
  constructor(protected ngControl: NgControl) {
    super();
  }

  customOnInit() {
    this.ngControl.statusChanges?.subscribe(value => {
      if (value === 'INVALID') {
        this.errors = [];
        Object.keys(this.ngControl.errors).forEach(key => {
          this.errors = [...this.errors, key];
        });
      }
    });

  }
  customNgAfterViewInit(): void {
  }

}
