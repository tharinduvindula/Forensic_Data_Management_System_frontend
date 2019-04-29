import { TestBed, inject } from '@angular/core/testing';

import { ScreenlockService } from './screenlock.service';

describe('ScreenlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenlockService]
    });
  });

  it('should be created', inject([ScreenlockService], (service: ScreenlockService) => {
    expect(service).toBeTruthy();
  }));
});
