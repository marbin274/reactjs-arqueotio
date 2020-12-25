export type DialogGlobalProps = {
  type?: "confirm" | "info";
  content?: any;
  title?: any;
  showTitle?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onAccept?: () => void;
  onCancel?: () => void;
  visible?: boolean;
};

export declare type SeveretyMessageType =
  | "success"
  | "info"
  | "warning"
  | "error";
export declare type MessageType = {
  visible?: boolean;
  severity?: SeveretyMessageType;
  name?: string | null;
  message: string;
  status?: any;
};

export const APP_SHOW_ALERT_SUCCESS = "APP_SHOW_ALERT_SUCCESS";
export const APP_SHOW_ALERT_INFO = "APP_SHOW_ALERT_INFO";
export const APP_SHOW_ALERT_WARNING = "APP_SHOW_ALERT_WARNING";
export const APP_SHOW_ALERT_ERROR = "APP_SHOW_ALERT_ERROR";
export const APP_HIDE_ALERT = "APP_HIDE_ALERT";

export const APP_SHOW_DIALOG_INFORMATION = "APP_SHOW_DIALOG_INFORMATION";
export const APP_SHOW_DIALOG_CONFIRMATION = "APP_SHOW_DIALOG_CONFIRMATION";
export const APP_HIDE_DIALOG = "APP_HIDE_DIALOG";

export const APP_SHOW_LOADING = "APP_SHOW_LOADING";
export const APP_HIDE_LOADING = "APP_HIDE_LOADING";

export const APP_SHOW_SERVICE_ERROR = "APP_SHOW_SERVICE_ERROR";
export const APP_SHOW_SERVICE_SUCCESS = "APP_SHOW_SERVICE_SUCCESS";

interface IAppShowAlertErrorAction {
  type: typeof APP_SHOW_ALERT_ERROR;
  payload: MessageType;
}

interface IAppShowAlertInfoAction {
  type: typeof APP_SHOW_ALERT_INFO;
  payload: MessageType;
}

interface IAppShowAlertSuccessAction {
  type: typeof APP_SHOW_ALERT_SUCCESS;
  payload: MessageType;
}

interface IAppShowAlertWarningAction {
  type: typeof APP_SHOW_ALERT_WARNING;
  payload: MessageType;
}

interface AppHideAlertAction {
  type: typeof APP_HIDE_ALERT;
}

interface IAppHideDialogAction {
  type: typeof APP_HIDE_DIALOG;
}

interface IAppShowDialogConfirmationAction {
  type: typeof APP_SHOW_DIALOG_CONFIRMATION;
  payload: DialogGlobalProps;
}

interface IAppShowDialogInformationAction {
  type: typeof APP_SHOW_DIALOG_INFORMATION;
  payload: DialogGlobalProps;
}

interface IAppShowLoading {
  type: typeof APP_SHOW_LOADING;
}
interface IAppHideLoading {
  type: typeof APP_HIDE_LOADING;
}

interface IAppShowServiceErrorAction {
  type: typeof APP_SHOW_SERVICE_ERROR;
  payload: MessageType;
}

interface IAppShowServiceErrorActionDone {
  type: typeof APP_SHOW_SERVICE_SUCCESS;
  payload: MessageType;
}

export type AppActionType =
  | IAppShowAlertErrorAction
  | IAppShowAlertInfoAction
  | IAppShowAlertSuccessAction
  | IAppShowAlertWarningAction
  | AppHideAlertAction
  | IAppHideDialogAction
  | IAppShowDialogConfirmationAction
  | IAppShowDialogInformationAction
  | IAppShowLoading
  | IAppHideLoading
  | IAppShowServiceErrorAction
  | IAppShowServiceErrorActionDone;
