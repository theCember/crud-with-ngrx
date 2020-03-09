import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListShellComponent } from './user-list-shell.component';
import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user.model';
import { provideMockStore } from '@ngrx/store/testing';

describe('UserListShellComponent', () => {
  let component: UserListShellComponent;
  let fixture: ComponentFixture<UserListShellComponent>;
  const initialState = { info: '' };
  let mockUserService;

  @Component({
    selector: 'app-user-list',
    template: `
      <div class="row" *ngIf="errorMessage">
      <div class="alert alert-dismissible alert-danger">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <p>{{errorMessage}}</p>
      </div>
      </div>
    `
  })
  class FakeErrorBarComponent {
    @Input() users: User[];
  }

  beforeEach(async(() => {
    mockUserService = jasmine.createSpyObj(['getAllUsers', 'getUser', 'updateUser', 'addNewUser', 'deleteUser']);
    TestBed.configureTestingModule({
      declarations: [ UserListShellComponent, FakeErrorBarComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
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
