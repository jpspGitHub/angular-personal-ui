import { Component, Injector } from '@angular/core';
import { MenuAction, ContactFormNames } from '../../enums';
import { BaseSectionBaseComponent } from 'src/app/core/component/base-section-form.component';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jps-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends BaseSectionBaseComponent {
  readonly ContactFormNames = ContactFormNames;
  constructor(public injector: Injector) {
    super(injector, MenuAction.CONTACT);
  }

  buildGroup(): FormGroup {
    return this.fb.group({
      [ContactFormNames.NAME]: ['', Validators.required],
      [ContactFormNames.LOCATION]: ['', Validators.required],
      [ContactFormNames.EMAIL]: ['', Validators.required],
      [ContactFormNames.MESSAGE]: ['', Validators.required],
    });
  }
}
