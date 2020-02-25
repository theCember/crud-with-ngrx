import { User } from '../shared/models/user.model';
import { UserActions, UserActionTypes } from './user.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface UserState {
    users: User[];
    error: string;
}

const initialState: UserState = {
    users: [],
    error: ''
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(
    getUserFeatureState,
    state => state.users
);

export function reducer(state: UserState = initialState, action: UserActions): UserState {
    switch ( action.type ) {
        case UserActionTypes.LoadSuccess:
            return {
                ...state,
                users: action.payload
            };
        case UserActionTypes.LoadFail:
            return {
                ...state,
                users: [],
                error: action.payload
            };
    }
}
