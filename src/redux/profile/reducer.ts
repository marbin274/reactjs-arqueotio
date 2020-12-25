import {
    ProfileActionType,
    PROFILE_REGISTER_ACTION,
    PROFILE_CLEAR_ACTION
} from 'redux-app/profile/types';
import { state as initialState, IProfileState } from 'redux-app/profile/state';

export const reducer = (state = initialState, action: ProfileActionType): IProfileState => {
    switch (action.type) {
        case PROFILE_REGISTER_ACTION:
            return {
                user: action.payload
            }
        case PROFILE_CLEAR_ACTION:
            return initialState;
        default: return state;
    }

}