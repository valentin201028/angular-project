import { TestBed } from '@angular/core/testing';

import { StopGuard } from './stop.guard';

describe('StopGuard', () => {
  let guard: StopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
