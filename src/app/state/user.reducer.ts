import { User } from '../shared/models/user.model';
import { UserActions, UserActionTypes } from './user.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AppState {
    users: UserState;
}

export interface UserState {
    users: User[];
    error: string;
}

const initialState: UserState = {
    users: [{
        id: 1,
        userName: "You-ser",
        emailAddress: "a@gmail.com",
        birthDate: new Date()
      }],
    error: ''
};

//const getUserFeatureState = createFeatureSelector<UserState>('users');
export const selectFeature = (state: AppState) => state.users;

export const getUsers = createSelector(
    selectFeature,
    state => state.users
);

export function reducer(state = initialState, action: UserActions): UserState {
    switch ( action.type ) {
        case UserActionTypes.LoadSuccess:
            return {
                ...state,
                users: action.payload,
                error: ''
            };
        case UserActionTypes.LoadFail:
            return {
                ...state,
                users: [],
                error: action.payload
            };
        default:
            return state;
    }
}
