import { TestBed, inject } from '@angular/core/testing';

import { QuizzControllerService } from './quizz-controller.service';

describe('QuizzControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizzControllerService]
    });
  });

  it('should be created', inject([QuizzControllerService], (service: QuizzControllerService) => {
    expect(service).toBeTruthy();
  }));
});
