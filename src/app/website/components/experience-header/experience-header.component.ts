import { ExperienceService } from './../../services/experience.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/component/base.component';

import { takeUntil, switchMap, map } from 'rxjs/operators';
import { ExperienceItem } from '../../model';
import { Observable } from 'rxjs';
@Component({
  selector: 'jps-experience-header',
  templateUrl: './experience-header.component.html',
  styleUrls: ['./experience-header.component.scss']
})
export class ExperienceHeaderComponent extends BaseComponent {

  experiences$: Observable<ExperienceItem[]>;


  constructor(protected experienceService: ExperienceService) {
    super();
  }

  onSelectItem(item: ExperienceItem) {
    this.experienceService.selectedItemSubject.next(item);
  }

  subscriptions() {
    const experiences$ = this.experienceService.getExperience();

    this.experiences$ = this.experienceService.selectedItem$
      .pipe(
        takeUntil(this.subscriber.done),
        switchMap(selection => {
          return experiences$
            .pipe(
              takeUntil(this.subscriber.done),
              map(experiences => experiences.map((item, index) => (
                {
                  ...item,
                  selected: selection && selection.fullName === item.fullName
                }
              )))
            );
        })
      );
  }

}
