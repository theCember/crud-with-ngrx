import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromUser from '../state/user.reducer';
import * as userActions from '../state/user.actions';
import { validateDate } from '../shared/validators/date.validator';

@Component({
  selector: 'app-create-shell',
  templateUrl: './create-shell.component.html',
  styleUrls: ['./create-shell.component.css']
})
export class CreateShellComponent implements OnInit {

  creatorTitle = 'User Creator';
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required, validateDate()]),
  });

  constructor(private store: Store<fromUser.State>) { }

  ngOnInit() {
  }

  submitForm() {
    //this.store.dispatch(new userActions.Load());
  }

}
