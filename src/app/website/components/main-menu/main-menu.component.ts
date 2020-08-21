import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../model';
import { Observable } from 'rxjs';
import { MenuAction } from '../../enums';

@Component({
  selector: 'jps-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainMenuComponent implements OnInit {

  openMenu = false;
  menuItems$: Observable<MenuItem[]> = this.menuService.getMenuItems();

  constructor(protected menuService: MenuService) { }

  ngOnInit(): void {
  }

  onMenuItemClick(action: MenuAction) {
    this.menuService.selectActionSubject.next(action);
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
}
