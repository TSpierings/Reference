import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeService = TestBed.get(TimeService);
    expect(service).toBeTruthy();
  });
});
