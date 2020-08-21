import { Injectable } from '@angular/core';
import { MenuItem } from '../model';
import { Observable, of, Subject } from 'rxjs';
import { MenuAction } from '../enums';

@Injectable()
export class MenuService {


  selectActionSubject = new Subject<MenuAction>();
  selectAction$ = this.selectActionSubject.asObservable();

  constructor() { }

  getMenuItems(): Observable<MenuItem[]> {
    return of(mockMenuItems());
  }
}

function mockMenuItems(): MenuItem[] {

  return [
    {
      displayName: 'About me',
      action: MenuAction.ABOUT_ME,
      icon: 'far fa-question-circle'
    },
    {
      displayName: 'Experience',
      action: MenuAction.EXPERIENCE,
      icon: 'fas fa-history'
    },
    {
      displayName: 'Recommendations',
      action: MenuAction.RECOMMENDATIONS,
      icon: 'far fa-star'
    },
    {
      displayName: 'Education & Skills',
      action: MenuAction.EDUCATION_SKILLS,
      icon: 'fas fa-brain'
    },
    {
      displayName: 'Services',
      action: MenuAction.SERVICES,
      icon: 'fas fa-concierge-bell'
    },
    {
      displayName: 'Contact',
      action: MenuAction.CONTACT,
      icon: 'fas fa-id-card-alt'
    },
  ];
}
