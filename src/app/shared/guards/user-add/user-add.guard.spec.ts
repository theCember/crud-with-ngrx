import { TestBed, async, inject } from '@angular/core/testing';

import { UserAddGuard } from './user-add.guard';

describe('UserAddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAddGuard]
    });
  });

  it('should ...', inject([UserAddGuard], (guard: UserAddGuard) => {
    expect(guard).toBeTruthy();
  }));
});
