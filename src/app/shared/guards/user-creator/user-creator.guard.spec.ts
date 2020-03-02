import { TestBed, async, inject } from '@angular/core/testing';

import { UserCreatorGuard } from './user-creator.guard';

describe('UserCreatorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCreatorGuard]
    });
  });

  it('should ...', inject([UserCreatorGuard], (guard: UserCreatorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
