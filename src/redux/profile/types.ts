import { User } from "models/user";

export const PROFILE_REGISTER_ACTION = "PROFILE_REGISTER_ACTION";
export const PROFILE_CLEAR_ACTION = "PROFILE_CLEAR_ACTION";

interface IProfileRegisterAction {
    type: typeof PROFILE_REGISTER_ACTION
    payload: User
}

interface IProfileClearAction {
    type: typeof PROFILE_CLEAR_ACTION
}

export type ProfileActionType = IProfileRegisterAction | IProfileClearAction;