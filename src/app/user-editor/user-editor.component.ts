import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateDate } from 'src/app/shared/validators/date.validator';
import * as fromUser from '../state/user.reducer';
import * as userActions from '../state/user.actions';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditorComponent implements OnInit {

  currentUserId: number;
  error$: Observable<string>;
  editorTitle = 'User Editior';
  editForm: FormGroup;

  constructor(private store: Store<fromUser.State>,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl('', [Validators.required, validateDate()]),
    });
    this.error$ = this.store.pipe(select(fromUser.getError));
    this.userService.getUser(this.route.snapshot.params.id).subscribe(
      (user) => {
        this.currentUserId = user.id;
        this.fillFormWithData(user);
      }
    );
  }

  private fillFormWithData(user: User): void {
    this.editForm.setValue({
      userName: user.userName,
      email: user.emailAddress,
      birthDate: new Date(user.birthDate).toISOString()
    });
  }

  submitForm(): void {
    this.store.dispatch(new userActions.UpdateUser({
      id: this.currentUserId,
      userName: this.editForm.get('userName').value,
      emailAddress: this.editForm.get('email').value,
      birthDate: this.editForm.get('birthDate').value
    }));
  }
}
