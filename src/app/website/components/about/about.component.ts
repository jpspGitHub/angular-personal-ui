import { MenuAction } from './../../enums/menu-action.enum';
import { BaseSectionComponent } from './../../../core/component/base-section.component';
import { Component, Injector } from '@angular/core';

@Component({
  selector: 'jps-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseSectionComponent {
  constructor(public injector: Injector) {
    super(injector, MenuAction.ABOUT_ME);
  }
}
