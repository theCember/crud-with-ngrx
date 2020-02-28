import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditShellComponent } from './user-edit-shell.component';

describe('UserEditShellComponent', () => {
  let component: UserEditShellComponent;
  let fixture: ComponentFixture<UserEditShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
