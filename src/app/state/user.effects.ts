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

    readonly CREATE_USER_ERROR_MESSAGE = 'Something went wrong during creating user, please try again or try later.';
    readonly LOAD_USER_ERROR_MESSAGE = 'Something went wrong during loading data, please try again or try later.';
    readonly DELETE_USER_ERROR_MESSAGE = 'Something went wrong during deleting user, please try again or try later.';
    readonly UPDATE_USER_ERROR_MESSAGE = 'Something went wrong during editing user, please try again or try later.';

    constructor(private actions$: Actions,
                private userService: UserService,
                private router: Router) { }

    @Effect()
    loadAllUsers$ = this.actions$.pipe(
        ofType(userActions.UserActionTypes.LoadAllUsers),
        mergeMap((action: userActions.LoadAllUsers) => this.userService.getAllUsers().pipe(
            map((users: User[]) => {
                console.log(users);
                return new userActions.LoadAllUsersSuccess(users);
            }),
            catchError(err => of(new userActions.LoadAllUsersFail(this.LOAD_USER_ERROR_MESSAGE)))
        ))
    );

    @Effect()
    loadSingleUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.LoadSingleUser),
        map((action: userActions.LoadSingleUser) => action.payload),
        mergeMap((loadedUserId: number) =>
            this.userService.getUser(loadedUserId).pipe(
                map(loadedUser => new userActions.LoadSingleUserSuccess(loadedUser)),
                catchError(err => of((new userActions.LoadSingleUserFail(this.LOAD_USER_ERROR_MESSAGE)))
                )
            )));

    @Effect()
    deleteUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.DeleteUser),
        map((action: userActions.DeleteUser) => action.payload),
        mergeMap((userId: any) =>
            this.userService.deleteUser(userId).pipe(
                map(() => new userActions.DeleteUserSuccess(userId)),
                catchError(err => of((new userActions.DeleteUserFail(this.CREATE_USER_ERROR_MESSAGE)))
                )
            )));

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
                catchError(err => of((new userActions.CreateUserFail(this.CREATE_USER_ERROR_MESSAGE)))
                )
            )));

    @Effect()
    updateUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.UpdateUser),
        map((action: userActions.UpdateUser) => action.payload),
        mergeMap((user: User) =>
            this.userService.updateUser(user).pipe(
                map(updatedUser => {
                    this.router.navigate(['/']);
                    return new userActions.UpdateUserSuccess(updatedUser);
                }),
                catchError(err => of((new userActions.UpdateUserFail(this.UPDATE_USER_ERROR_MESSAGE)))
                )
            )));
}
