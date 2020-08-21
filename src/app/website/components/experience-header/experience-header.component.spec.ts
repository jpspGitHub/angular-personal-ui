import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHeaderComponent } from './experience-header.component';
import { ExperienceService } from '../../services/experience.service';

describe('ExperienceHeaderComponent', () => {
  let component: ExperienceHeaderComponent;
  let fixture: ComponentFixture<ExperienceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceHeaderComponent],
      providers: [ExperienceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
