import { TestBed, inject } from '@angular/core/testing';

import { BeforLoginService } from './befor-login.service';

describe('BeforLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeforLoginService]
    });
  });

  it('should be created', inject([BeforLoginService], (service: BeforLoginService) => {
    expect(service).toBeTruthy();
  }));
});
