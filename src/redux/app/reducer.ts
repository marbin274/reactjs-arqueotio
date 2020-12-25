import { state as initialState } from "redux-app/app/state";
import { IAppState } from "redux-app/app/state";
import {
  DialogGlobalProps,
  MessageType,
  AppActionType,
  APP_HIDE_ALERT,
  APP_HIDE_DIALOG,
  APP_SHOW_ALERT_ERROR,
  APP_SHOW_ALERT_INFO,
  APP_SHOW_ALERT_SUCCESS,
  APP_SHOW_ALERT_WARNING,
  APP_SHOW_DIALOG_CONFIRMATION,
  APP_SHOW_DIALOG_INFORMATION,
  APP_SHOW_LOADING,
  APP_HIDE_LOADING,
  APP_SHOW_SERVICE_ERROR,
} from "redux-app/app/types";

export const reducer = (
  state = initialState,
  action: AppActionType
): IAppState => {
  switch (action.type) {
    case APP_SHOW_ALERT_INFO:
    case APP_SHOW_ALERT_ERROR:
    case APP_SHOW_ALERT_SUCCESS:
    case APP_SHOW_ALERT_WARNING:
    case APP_SHOW_SERVICE_ERROR:
      return AppShowAlert(state, action);
    case APP_HIDE_ALERT:
      return {
        ...state,
        message: {
          ...state.message,
          visible: false,
        },
      };
    case APP_SHOW_DIALOG_CONFIRMATION:
    case APP_SHOW_DIALOG_INFORMATION:
      return AppShowDialog(state, action);
    case APP_HIDE_DIALOG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          visible: false,
        },
      };
    case APP_SHOW_LOADING:
      return {
        ...state,
        loader: {
          ...state.loader,
          loading: true,
        },
      };
    case APP_HIDE_LOADING:
      return {
        ...state,
        loader: {
          ...state.loader,
          loading: false,
        },
      };
    default:
      return state;
  }
};

const AppShowAlert = (
  state: IAppState,
  action: { payload: MessageType }
): IAppState => ({
  ...state,
  message: {
    visible: true,
    name: action.payload.name,
    message: action.payload.message,
    status: action.payload.status,
    severity: action.payload.severity,
  },
});

const AppShowDialog = (
  state: IAppState,
  action: { payload: DialogGlobalProps }
): IAppState => ({
  ...state,
  dialog: {
    type: action.payload.type,
    content: action.payload.content,
    title: action.payload.title,
    showTitle: action.payload.showTitle,
    onOpen: action.payload.onOpen,
    onClose: action.payload.onClose,
    onAccept: action.payload.onAccept,
    onCancel: action.payload.onCancel,
    visible: true,
  },
});
