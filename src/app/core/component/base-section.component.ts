import { SectionService } from './../services/section.service';
import { BaseComponent } from './base.component';
import { MenuAction } from 'src/app/website/enums';
import { Injector } from '@angular/core';

export class BaseSectionComponent extends BaseComponent {

  sectionService: SectionService;
  action: MenuAction;

  constructor(public injector: Injector, public linkedAction: MenuAction) {
    super();
    this.sectionService = injector.get(SectionService);
    this.sectionService.addSection(this);
    this.action = linkedAction;
  }

}
