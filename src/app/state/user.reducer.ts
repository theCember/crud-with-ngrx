import { User } from '../shared/models/user.model';
import { UserActions, UserActionTypes } from './user.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../index';

export interface State extends fromRoot.State {
    users: UserState;
}

export interface UserState {
    users: User[];
    newUser: User;
    userToUpdate: User;
    deletedUserId: number;
    error: string;
}

export const initialState: UserState = {
    users: [],
    newUser: {
        id: null,
        userName: null,
        emailAddress: null,
        birthDate: null
    },
    userToUpdate: {
        id: null,
        userName: null,
        emailAddress: null,
        birthDate: null
    },
    deletedUserId: null,
    error: ''
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getAllUsers = createSelector(
    getUserFeatureState,
    state => state.users
);

export const getError = createSelector(
    getUserFeatureState,
    state => state.error
);

export function reducer(state: UserState = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.LoadAllUsersSuccess:
            return {
                ...state,
                users: action.payload,
                error: ''
            };
        case UserActionTypes.LoadAllUsersFail:
            return {
                ...state,
                users: [],
                error: action.payload
            };
        case UserActionTypes.CreateUserSuccess:
            return {
                ...state,
                newUser: action.payload,
                error: ''
            };
        case UserActionTypes.CreateUserFail:
            return {
                ...state,
                newUser: {
                    id: null,
                    userName: null,
                    emailAddress: null,
                    birthDate: null
                },
                error: action.payload
            };
        case UserActionTypes.DeleteUserSuccess:
            return {
                ...state,
                deletedUserId: action.payload,
                error: ''
            };
        case UserActionTypes.DeleteUserFail:
            return {
                ...state,
                deletedUserId: null,
                error: action.payload
            };
        case UserActionTypes.UpdateUserSuccess:
            return {
                ...state,
                userToUpdate: action.payload,
                error: ''
            };
        case UserActionTypes.UpdateUserFail:
            return {
                ...state,
                userToUpdate: {
                    id: null,
                    userName: null,
                    emailAddress: null,
                    birthDate: null
                },
                error: action.payload
            };
        default:
            return state;
    }
}
