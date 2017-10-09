import { TestBed, inject } from '@angular/core/testing';

import { DataemotionService } from './dataemotion.service';

describe('DataemotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataemotionService]
    });
  });

  it('should be created', inject([DataemotionService], (service: DataemotionService) => {
    expect(service).toBeTruthy();
  }));
});
