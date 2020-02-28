import { Action } from '@ngrx/store';
import { User } from '../shared/models/user.model';

export enum UserActionTypes {
    LoadAllUsers = '[User] Load All Users',
    LoadAllUsersSuccess = '[User] Load All Users Success',
    LoadAllUsersFail = '[User] Load All Users Fail',
    LoadSingleUser = '[User] Load Single User',
    LoadSingleUserSuccess = '[User] Load Single User Success',
    LoadSingleUserFail = '[User] Load Single User Fail',
    CreateUser = '[User] Create',
    CreateUserSuccess = '[User] Create Success',
    CreateUserFail = '[User] Create Fail',
    DeleteUser = '[User] Delete',
    DeleteUserSuccess = '[User] Delete Success',
    DeleteUserFail = '[User] Delete Fail',
    UpdateUser = '[User] Update',
    UpdateUserSuccess = '[User] Update Success',
    UpdateUserFail = '[User] Update Fail'
}

export class LoadAllUsers implements Action {
    readonly type = UserActionTypes.LoadAllUsers;
}

export class LoadAllUsersSuccess implements Action {
    readonly type = UserActionTypes.LoadAllUsersSuccess;

    constructor(public payload: User[]) {}
}

export class LoadAllUsersFail implements Action {
    readonly type = UserActionTypes.LoadAllUsersFail;

    constructor(public payload: string) {}
}

export class LoadSingleUser implements Action {
    readonly type = UserActionTypes.LoadSingleUser;

    constructor(public payload: number) {}
}

export class LoadSingleUserSuccess implements Action {
    readonly type = UserActionTypes.LoadSingleUserSuccess;

    constructor(public payload: User) {}
}

export class LoadSingleUserFail implements Action {
    readonly type = UserActionTypes.LoadSingleUserFail;

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

export class UpdateUser implements Action {
    readonly type = UserActionTypes.UpdateUser;
    constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
    readonly type = UserActionTypes.UpdateUserSuccess;

    constructor(public payload: User) {}
}

export class UpdateUserFail implements Action {
    readonly type = UserActionTypes.UpdateUserFail;

    constructor(public payload: string) {}
}

export class DeleteUser implements Action {
    readonly type = UserActionTypes.DeleteUser;
    constructor(public payload: number) {}
}

export class DeleteUserSuccess implements Action {
    readonly type = UserActionTypes.DeleteUserSuccess;

    constructor(public payload: number) {}
}

export class DeleteUserFail implements Action {
    readonly type = UserActionTypes.DeleteUserFail;

    constructor(public payload: string) {}
}

export type UserActions = LoadAllUsers
    | LoadAllUsersSuccess
    | LoadAllUsersFail
    | LoadSingleUser
    | LoadSingleUserSuccess
    | LoadSingleUserFail
    | CreateUser
    | CreateUserSuccess
    | CreateUserFail
    | DeleteUser
    | DeleteUserSuccess
    | DeleteUserFail
    | UpdateUser
    | UpdateUserSuccess
    | UpdateUserFail;
