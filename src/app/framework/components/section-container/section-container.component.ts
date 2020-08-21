import { MenuAction } from '../../../website/enums/menu-action.enum';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MenuItem } from 'src/app/website/model';

@Component({
  selector: 'jps-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionContainerComponent implements OnInit {

  @Input() title: string;
  @Input() action: MenuAction;
  constructor() { }

  ngOnInit(): void {
  }

}
