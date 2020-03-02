import { TestBed, async, inject } from '@angular/core/testing';

import { UserEditGuard } from './user-edit.guard';

describe('UserAddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEditGuard]
    });
  });

  it('should ...', inject([UserEditGuard], (guard: UserEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
