import { ExperienceService } from './../../services/experience.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/component/base.component';

@Component({
  selector: 'jps-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent extends BaseComponent {

  selectedItem$ = this.experienceService.selectedItem$;

  constructor(protected experienceService: ExperienceService) {
    super();
  }
}
