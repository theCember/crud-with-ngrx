import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../state/user.reducer';
import * as userActions from '../state/user.actions';
import { validateDate } from '../shared/validators/date.validator';
import { Observable } from 'rxjs';
import { detectChanges } from '@angular/core/src/render3';

@Component({
  selector: 'app-create-shell',
  templateUrl: './create-shell.component.html',
  styleUrls: ['./create-shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateShellComponent implements OnInit {

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
