import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import * as fromUser from '../state/user.reducer';
import { Store, select } from '@ngrx/store';
import * as userActions from '../state/user.actions';

@Component({
  selector: 'app-crud-shell',
  templateUrl: './crud-shell.component.html',
  styleUrls: ['./crud-shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudShellComponent implements OnInit {

  appTitle = 'CRUD with NgRx';
  users$: Observable<User[]>;

  constructor(private store: Store<fromUser.State>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.Load());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
  }

}
