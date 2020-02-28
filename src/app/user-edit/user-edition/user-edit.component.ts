import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateDate } from 'src/app/shared/validators/date.validator';
import * as fromUser from '../../state/user.reducer';
import * as userActions from '../../state/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  readonly DELAY_FORM_FILLING = 1000;
  @Input() userToEdit: User;
  error$: Observable<string>;

  editorTitle = 'User Edition';
  editForm: FormGroup;

  constructor(private store: Store<fromUser.State>,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl('', [Validators.required, validateDate()]),
    });
    this.fillFormWithDelay();
  }

  private fillFormWithDelay(): void {
    setTimeout(() => {
      this.editForm.setValue({
        userName: this.userToEdit.userName,
        email: this.userToEdit.emailAddress,
        birthDate: this.getParsedBirthDay()
      });
    }, this.DELAY_FORM_FILLING);
  }

  getParsedBirthDay(): string {
    return new Date(this.userToEdit.birthDate).toISOString();
  }

  submitForm(): void {
    this.store.dispatch(new userActions.UpdateUser({
      id: this.userToEdit.id,
      userName: this.editForm.get('userName').value,
      emailAddress: this.editForm.get('email').value,
      birthDate: this.editForm.get('birthDate').value
    }));
  }
}
