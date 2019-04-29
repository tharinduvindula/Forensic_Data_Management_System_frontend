import { TestBed, inject } from '@angular/core/testing';
import { AdminuserService } from './adminuser.service';

describe('AdminuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminuserService]
    });
  });

  it('should be created', inject([AdminuserService], (service: AdminuserService) => {
    expect(service).toBeTruthy();
  }));
});
