import { SectionService } from './../../../core/services/section.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/component/base.component';
import { MenuAction } from '../../enums';

@Component({
  selector: 'jps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent {
  constructor(public sectionService: SectionService) {
    super();
  }

  onSeeModeClick() {
    this.sectionService.goToSection(MenuAction.ABOUT_ME);
  }
}
