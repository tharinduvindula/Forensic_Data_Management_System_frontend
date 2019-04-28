import { TestBed, inject } from '@angular/core/testing';

import { AddDemoService } from './add-demo.service';

describe('AddDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDemoService]
    });
  });

  it('should be created', inject([AddDemoService], (service: AddDemoService) => {
    expect(service).toBeTruthy();
  }));
});
