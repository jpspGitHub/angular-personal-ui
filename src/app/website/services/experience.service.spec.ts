import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceService]
    });
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
