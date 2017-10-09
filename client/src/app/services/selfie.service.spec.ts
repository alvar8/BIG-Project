import { TestBed, inject } from '@angular/core/testing';

import { SelfieService } from './selfie.service';

describe('SelfieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelfieService]
    });
  });

  it('should be created', inject([SelfieService], (service: SelfieService) => {
    expect(service).toBeTruthy();
  }));
});
