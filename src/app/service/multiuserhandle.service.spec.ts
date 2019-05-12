import { TestBed, inject } from '@angular/core/testing';

import { MultiuserhandleService } from './multiuserhandle.service';

describe('MultiuserhandleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiuserhandleService]
    });
  });

  it('should be created', inject([MultiuserhandleService], (service: MultiuserhandleService) => {
    expect(service).toBeTruthy();
  }));
});
