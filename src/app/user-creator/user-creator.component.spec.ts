import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatorComponent } from './user-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { Component, Input } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserCreatorComponent', () => {
  let component: UserCreatorComponent;
  let fixture: ComponentFixture<UserCreatorComponent>;
  const initialState = { info: '' };

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
    TestBed.configureTestingModule({
      imports: [FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [UserCreatorComponent, FakeErrorBarComponent],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
