import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../state/user.reducer';
import * as userActions from '../state/user.actions';
import { validateDate } from '../shared/validators/date.validator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCreatorComponent implements OnInit {

  creatorTitle = 'User Creator';
  error$: Observable<string>;
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required, validateDate()]),
  });

  constructor(private store: Store<fromUser.State>) { }

  ngOnInit() {
    this.error$ = this.store.pipe(select(fromUser.getError));
  }

  submitForm() {
    this.store.dispatch(new userActions.CreateUser({
      id: null,
      userName: this.userForm.get('userName').value,
      emailAddress: this.userForm.get('email').value,
      birthDate: this.userForm.get('birthDate').value
    }));
  }
}
