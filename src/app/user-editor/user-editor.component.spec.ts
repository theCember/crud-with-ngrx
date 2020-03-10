import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditorComponent } from './user-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user-service.service';
import { of, Observable } from 'rxjs';
import { initialState } from '../state/user.reducer';

describe('UserEditorComponent', () => {
  const MOCKED_ERROR_MESSAGE = 'Something went wrong during editing user, please try again or try later.';
  let component: UserEditorComponent;
  let fixture: ComponentFixture<UserEditorComponent>;
  let mockUser;
  let mockActivatedRoute;
  let mockUserService;

  @Component({
    selector: 'app-error-bar',
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
    @Input() errorMessage: string;
  }

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: { params: { id: '1' } }
    };
    mockUser = {
      id: 1,
      userName: 'newUser',
      emailAddress: 'filgr@gmail.com',
      birthDate: new Date('2020-02-29T23:00:00.000Z')
    };
    mockUserService = jasmine.createSpyObj(['getAllUsers', 'getUser', 'updateUser', 'addNewUser', 'deleteUser']);
    TestBed.configureTestingModule({
      imports: [FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule],
      declarations: [UserEditorComponent, FakeErrorBarComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        },
        { provide: UserService, useValue: mockUserService }
      ]
    });
    fixture = TestBed.createComponent(UserEditorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    mockUserService.getUser.and.returnValue(of(mockUser));
    fixture.componentInstance.error$ = of(MOCKED_ERROR_MESSAGE);
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });
});
