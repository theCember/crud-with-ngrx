import { Action } from '@ngrx/store';
import { User } from '../shared/models/user.model';

export enum UserActionTypes {
    Load = '[User] Load',
    LoadSuccess = '[User] Load Success',
    LoadFail = '[User] Load Fail',
    CreateUser = '[User] Create',
    CreateUserSuccess = '[User] Create Success',
    CreateUserFail = '[User] Create Fail'
}

export class Load implements Action {
    readonly type = UserActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = UserActionTypes.LoadSuccess;

    constructor(public payload: User[]) {}
}

export class LoadFail implements Action {
    readonly type = UserActionTypes.LoadFail;

    constructor(public payload: string) {}
}

export class CreateUser implements Action {
    readonly type = UserActionTypes.CreateUser;
    constructor(public payload: User) {}
}

export class CreateUserSuccess implements Action {
    readonly type = UserActionTypes.CreateUserSuccess;

    constructor(public payload: User) {}
}

export class CreateUserFail implements Action {
    readonly type = UserActionTypes.CreateUserFail;

    constructor(public payload: string) {}
}

export type UserActions = Load
    | LoadSuccess
    | LoadFail
    | CreateUser
    | CreateUserSuccess
    | CreateUserFail;
