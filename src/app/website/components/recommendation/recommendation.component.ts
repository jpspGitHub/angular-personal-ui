import { BaseSectionComponent } from './../../../core/component/base-section.component';
import { Component, OnInit, HostListener, ElementRef, ViewChild, Injector } from '@angular/core';
import { RecommendationService } from '../../services/recommendation.service';
import { Observable, Subject, merge as mergeObservables, BehaviorSubject } from 'rxjs';
import { Recommendation } from '../../model';
import { Selectable } from '../../../core/model/selectable';
import { map, merge, withLatestFrom, combineAll, tap } from 'rxjs/operators';
import { trigger, transition, animate } from '@angular/animations';
import { MenuAction } from '../../enums';

enum ButtonAction {
  NEXT,
  PREVIOUS
}
@Component({
  selector: 'jps-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent extends BaseSectionComponent {

  listLength: number;
  actionSubject = new Subject<ButtonAction>();
  action$ = this.actionSubject.asObservable();
  positionSubject = new Subject<string>();
  position$: Observable<string> = this.positionSubject.asObservable();
  selectedIndexSubject = new BehaviorSubject<number>(0);
  selectedIndex$: Observable<number> = this.selectedIndexSubject.asObservable();

  recommendations$: Observable<Selectable<Recommendation>[]> = this.recommendationService.getRecommendations()
    .pipe(
      tap(items => this.listLength = items.length),
      map(item => item.map((recommendation, index) => ({ item: recommendation, selected: index === 0 })))
    );

  @ViewChild('recommendationWrapper') wrapper: ElementRef;


  constructor(public injector: Injector, protected recommendationService: RecommendationService) {
    super(injector, MenuAction.RECOMMENDATIONS);
  }

  customOnInit() {
    this.action$
      .subscribe(button => {
        const ratio = button === ButtonAction.NEXT ? 1 : -1;
        let newIndex = this.selectedIndexSubject.value + ratio;
        if (newIndex > (this.listLength - 1)) {
          newIndex = 0;
        } else if (newIndex < 0) {
          newIndex = this.listLength;
        }

        this.selectedIndexSubject.next(newIndex);
        this.positionSubject.next(`translateX(${(this.wrapper.nativeElement.offsetWidth * newIndex) * - 1}px)`);

      });
  }

  next() {
    this.actionSubject.next(ButtonAction.NEXT);
  }

  previous() {
    this.actionSubject.next(ButtonAction.PREVIOUS);
  }

}
