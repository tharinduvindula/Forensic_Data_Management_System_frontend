import { TestBed, inject } from '@angular/core/testing';

import { LectureruserService } from './lectureruser.service';

describe('LectureruserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LectureruserService]
    });
  });

  it('should be created', inject([LectureruserService], (service: LectureruserService) => {
    expect(service).toBeTruthy();
  }));
});
