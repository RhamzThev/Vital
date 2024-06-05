import { TestBed } from '@angular/core/testing';

import { FoodLogService } from './food-log.service';

describe('FoodLogService', () => {
  let service: FoodLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
