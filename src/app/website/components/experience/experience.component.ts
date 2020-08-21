import { BaseSectionComponent } from './../../../core/component/base-section.component';
import { Component, Injector } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { ExperienceItem } from '../../model';
import { MenuAction } from '../../enums';

@Component({
  selector: 'jps-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent extends BaseSectionComponent {

  constructor(public injector: Injector) {
    super(injector, MenuAction.EXPERIENCE);
  }
}
