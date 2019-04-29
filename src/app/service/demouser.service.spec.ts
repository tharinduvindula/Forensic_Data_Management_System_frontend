import { TestBed, inject } from '@angular/core/testing';

import { DemouserService } from './demouser.service';

describe('DemouserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemouserService]
    });
  });

  it('should be created', inject([DemouserService], (service: DemouserService) => {
    expect(service).toBeTruthy();
  }));
});
