import {
    DialogGlobalProps,
    MessageType
} from 'redux-app/app/types';

export interface IAppState {
    message: MessageType,
    dialog: DialogGlobalProps
    loader: { loading: boolean, message?: string, content?: any, noOpacity?: boolean, hideProgress?: boolean }
}

export const state: IAppState = {
    message: {
        visible: false,
        name: null,
        message: '',
        status: null,
        severity: "info",
    },
    dialog: {
        type: "info"
    },
    loader: { loading: false }
}