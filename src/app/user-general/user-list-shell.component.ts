import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../state/user.reducer';
import * as userActions from '../state/user.actions';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListShellComponent implements OnInit {

  appTitle = 'CRUD with NgRx';
  users$: Observable<User[]>;

  constructor(private store: Store<fromUser.State>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadAllUsers());
    this.users$ = this.store.pipe(select(fromUser.getAllUsers));
  }

  handleUserDeletion(userId: any): void {
    this.store.dispatch(new userActions.DeleteUser(userId));
  }

}
