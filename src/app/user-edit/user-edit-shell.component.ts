import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user-service.service';
import { User } from '../shared/models/user.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../state/user.reducer';
import * as userActions from '../state/user.actions';

@Component({
  selector: 'app-user-edit-shell',
  templateUrl: './user-edit-shell.component.html',
  styleUrls: ['./user-edit-shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditShellComponent implements OnInit {

  userToEdit$: Observable<User>;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private store: Store<fromUser.State>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadSingleUser(this.route.snapshot.params.id));
    this.userToEdit$ = this.store.pipe(select(fromUser.getLoadedUser));
  }

}
