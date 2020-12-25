import { combineReducers } from 'redux';
import { reducer as AuthReducer } from 'redux-app/auth/reducer';
import { reducer as ProfileReducer } from 'redux-app/profile/reducer';
import { reducer as AppReducer } from 'redux-app/app/reducer';
import { IAuthState } from 'redux-app/auth/state';
import { IProfileState } from 'redux-app/profile/state';
import { IAppState } from 'redux-app/app/state';

export interface IRootReducer {
    auth: IAuthState,
    profile: IProfileState,
    app: IAppState
}

export const rootReducer = combineReducers<IRootReducer>({
    auth: AuthReducer,
    profile: ProfileReducer,
    app: AppReducer
});
