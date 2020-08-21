import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIndicatorComponent } from './skill-indicator.component';

describe('SkillIndicatorComponent', () => {
  let component: SkillIndicatorComponent;
  let fixture: ComponentFixture<SkillIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
