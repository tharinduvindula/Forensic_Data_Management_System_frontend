import { TestBed, inject } from '@angular/core/testing';

import { AddDeceasedService } from './add-deceased.service';

describe('AddDeceasedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDeceasedService]
    });
  });

  it('should be created', inject([AddDeceasedService], (service: AddDeceasedService) => {
    expect(service).toBeTruthy();
  }));
});
