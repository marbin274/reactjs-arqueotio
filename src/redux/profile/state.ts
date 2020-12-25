import { User } from 'models/user';

export interface IProfileState {
    user?: User;
}


export const state: IProfileState = {
    user: undefined
}