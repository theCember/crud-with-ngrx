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

describe('UserEditorComponent', () => {
  let component: UserEditorComponent;
  let fixture: ComponentFixture<UserEditorComponent>;
  const initialState = { info: '' };
  let mockActivatedRoute = {
    paramMap: { id: '1' }
  };
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

  beforeEach(async(() => {
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
