import { MenuService } from './../../services/menu.service';
import { SectionService } from './../../../core/services/section.service';
import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/component/base.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'jps-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseComponent {

  constructor(protected sectionService: SectionService, protected menuService: MenuService) {
    super();
  }

  subscriptions(): void {
    this.menuService.selectAction$
      .pipe(takeUntil(this.subscriber.done))
      .subscribe(action => this.sectionService.goToSection(action));
  }

}
