import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailComponent } from './experience-detail.component';
import { ExperienceService } from '../../services/experience.service';

describe('ExperienceDetailComponent', () => {
  let component: ExperienceDetailComponent;
  let fixture: ComponentFixture<ExperienceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceDetailComponent],
      providers: [ExperienceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
