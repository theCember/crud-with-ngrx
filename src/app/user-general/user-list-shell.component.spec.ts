import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListShellComponent } from './user-list-shell.component';

describe('CrudShellComponent', () => {
  let component: UserListShellComponent;
  let fixture: ComponentFixture<UserListShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
