import { BaseSectionComponent } from './../../../core/component/base-section.component';
import { Component, Injector } from '@angular/core';
import { MenuAction } from '../../enums';

@Component({
  selector: 'jps-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent extends BaseSectionComponent {

  constructor(public injector: Injector) {
    super(injector, MenuAction.SERVICES);
  }
}
