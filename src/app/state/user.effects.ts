import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from '../shared/services/user-service.service';
import * as userActions from './user.actions';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions,
                private userService: UserService,
                private router: Router) { }

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(userActions.UserActionTypes.Load),
        mergeMap((action: userActions.Load) => this.userService.getAllUsers().pipe(
            map((users: User[]) => {
                console.log(users);
                return new userActions.LoadSuccess(users);
            }),
            catchError(err => of(new userActions.LoadFail(err)))
        ))
    );

    @Effect()
    createUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.CreateUser),
        map((action: userActions.CreateUser) => action.payload),
        mergeMap((user: User) =>
            this.userService.addNewUser(user).pipe(
                map(createdUser => {
                    this.router.navigate(['/']);
                    return new userActions.CreateUserSuccess(createdUser);
                }),
                catchError(err => of(new userActions.CreateUserFail(err)))
            )
        ));
}
