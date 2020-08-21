import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { EducationService } from '../../services/education.service';
import { of } from 'rxjs';
import { LanguageItem, EducationItem } from '../../model';
import { LanguageLevel } from '../../enums';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponent],
      providers: [
        {
          provide: EducationService,
          useValue: {
            getCourses: () => of(mockCourses()),
            getLanguages: () => of(mockLanguages())
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template', () => {
    it('should display all courses', () => {

    });

    it('should display all languages', () => {

    });
  });
});


export function mockCourses(): EducationItem[] {
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

export function mockLanguages(): LanguageItem[] {
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
