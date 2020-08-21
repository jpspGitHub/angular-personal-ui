import { MenuAction } from 'src/app/website/enums';
import { BaseSectionComponent } from './base-section.component';
import { Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export abstract class BaseSectionBaseComponent extends BaseSectionComponent implements OnInit {


  protected fb: FormBuilder;
  formGroup: FormGroup;

  constructor(public injector: Injector, public linkedAction: MenuAction) {
    super(injector, linkedAction);
    this.fb = injector.get(FormBuilder);
    this.formGroup = this.buildGroup();
  }

  abstract buildGroup(): FormGroup;

}
