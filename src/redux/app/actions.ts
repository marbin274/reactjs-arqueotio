import {
  DialogGlobalProps,
  MessageType,
  AppActionType,
  APP_SHOW_ALERT_INFO,
  APP_SHOW_ALERT_ERROR,
  APP_SHOW_ALERT_SUCCESS,
  APP_SHOW_ALERT_WARNING,
  APP_HIDE_ALERT,
  APP_SHOW_DIALOG_CONFIRMATION,
  APP_SHOW_LOADING,
  APP_HIDE_DIALOG,
  APP_SHOW_SERVICE_ERROR,
  APP_SHOW_SERVICE_SUCCESS,
} from "redux-app/app/types";

export function appShowAlertInfo(payload: MessageType): AppActionType {
  return {
    type: APP_SHOW_ALERT_INFO,
    payload: { ...payload, severity: "info" },
  };
}

export const appShowAlertError = (payload: MessageType): AppActionType => ({
  type: APP_SHOW_ALERT_ERROR,
  payload: { ...payload, severity: "error" },
});

export const appShowAlertSuccess = (payload: MessageType): AppActionType => ({
  type: APP_SHOW_ALERT_SUCCESS,
  payload: { ...payload, severity: "success" },
});

export const appShowAlertWarning = (payload: MessageType): AppActionType => ({
  type: APP_SHOW_ALERT_WARNING,
  payload: { ...payload, severity: "warning" },
});

export const appHideAlert = (): AppActionType => ({
  type: APP_HIDE_ALERT,
});

export const appShowDialogConfirmation = (
  payload: DialogGlobalProps
): AppActionType => ({
  type: APP_SHOW_DIALOG_CONFIRMATION,
  payload: {
    ...payload,
    type: "confirm",
  },
});

export const appShowDialogInformation = (
  payload: DialogGlobalProps
): AppActionType => ({
  type: APP_SHOW_DIALOG_CONFIRMATION,
  payload: {
    ...payload,
    type: "info",
  },
});

export const appHideDialog = (): AppActionType => ({
  type: APP_HIDE_DIALOG,
});

export const appLoading = (): AppActionType => ({
  type: APP_SHOW_LOADING,
});

export const appLoadingDone = (): AppActionType => ({
  type: APP_SHOW_LOADING,
});

export const appShowServiceError = (error: any): AppActionType => {
  return {
    type: APP_SHOW_SERVICE_ERROR,
    payload: {
      severity: "error",
      message:
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error.message
          : "Ocurrió un problema durante la petición. Por favor de volver a intentarlo",
    },
  };
};

export const appShowServiceSuccess = (payload: MessageType): AppActionType => ({
  type: APP_SHOW_SERVICE_SUCCESS,
  payload,
});
