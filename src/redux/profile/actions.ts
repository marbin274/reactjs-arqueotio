import { PROFILE_REGISTER_ACTION, PROFILE_CLEAR_ACTION, ProfileActionType } from 'redux-app/profile/types';
import { User } from 'models/user';

export function profileRegister(user: User): ProfileActionType {
    return {
        type: PROFILE_REGISTER_ACTION,
        payload: user
    }
}

export function profileClear(): ProfileActionType {
    return {
        type: PROFILE_CLEAR_ACTION
    }
}