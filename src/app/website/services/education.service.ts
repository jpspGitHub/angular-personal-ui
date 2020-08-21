import { Injectable } from '@angular/core';
import { EducationItem, LanguageItem } from '../model';
import { of, Observable } from 'rxjs';
import { LanguageLevel } from '../enums';

@Injectable()
export class EducationService {

  constructor() { }

  getCourses(): Observable<EducationItem[]> {
    return of(educationItemMock());
  }

  getLanguages(): Observable<LanguageItem[]> {
    return of(languageItemsMock());
  }
}

export function educationItemMock(): EducationItem[] {
  return [
    {
      name: 'Analyst Programmer',
      institute: 'ORT University',
      img: 'assets/resources/education/ORT-logo.jpg'
    },
    {
      name: 'OOP Programmer',
      institute: 'ORT University',
      img: 'assets/resources/education/ORT-logo.jpg'
    },
    {
      name: 'Technician in Business Informatics',
      institute: 'CLIE Institute',
      img: 'assets/resources/education/CLIE-logo.jpg'
    },
    {
      name: 'Windows Operator',
      institute: 'CLIE Institute',
      img: 'assets/resources/education/generic.jpg'
    },
  ];
}

export function languageItemsMock(): LanguageItem[] {
  return [
    {
      name: 'Spanish',
      img: 'assets/resources/icons/es.svg',
      comprehensionLevel: LanguageLevel.NATIVE,
      expressionLevel: LanguageLevel.NATIVE,
      writtenLevel: LanguageLevel.NATIVE,
    },
    {
      name: 'English',
      img: 'assets/resources/icons/en.svg',
      comprehensionLevel: LanguageLevel.HIGH,
      expressionLevel: LanguageLevel.HIGH,
      writtenLevel: LanguageLevel.HIGH,
    },
    {
      name: 'Portuguese',
      img: 'assets/resources/icons/pt.svg',
      comprehensionLevel: LanguageLevel.HIGH,
      expressionLevel: LanguageLevel.HIGH,
      writtenLevel: LanguageLevel.MEDIUM,
    },
  ];
}
