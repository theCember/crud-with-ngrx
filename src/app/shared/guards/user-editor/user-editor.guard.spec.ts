import { TestBed, async, inject } from '@angular/core/testing';

import { UserEditorGuard } from './user-editor.guard';

describe('UserEditorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEditorGuard]
    });
  });

  it('should ...', inject([UserEditorGuard], (guard: UserEditorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
