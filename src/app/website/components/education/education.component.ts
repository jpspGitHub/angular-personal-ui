import { Component, Injector } from '@angular/core';
import { EducationService } from '../../services/education.service';
import { EducationItem, LanguageItem } from '../../model';
import { Observable } from 'rxjs';
import { BaseSectionComponent } from './../../../core/component/base-section.component';
import { MenuAction } from '../../enums';

@Component({
  selector: 'jps-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent extends BaseSectionComponent {

  educationCourses$: Observable<EducationItem[]> = this.educationService.getCourses();
  languages$: Observable<LanguageItem[]> = this.educationService.getLanguages();

  constructor(public injector: Injector, protected educationService: EducationService) {
    super(injector, MenuAction.EDUCATION_SKILLS);
  }

}
