export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILED = "AUTH_FAILED";
export const AUTH_CHECK_TIMEOUT = "AUTH_CHECK_TIMEOUT";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_CHECK_STATUS = "AUTH_CHECK_STATUS";

interface IAuthStart {
  type: typeof AUTH_START;
}

interface IAuthSuccess {
  type: typeof AUTH_SUCCESS;
  payload: string;
}

interface IAuthFailed {
  type: typeof AUTH_FAILED;
  payload: any ;
}

interface IAuthCheckTimeoutAction {
  type: typeof AUTH_CHECK_TIMEOUT;
  payload: { expiresIn: string };
}

interface IAuthLogoutAction {
  type: typeof AUTH_LOGOUT;
}

interface IAuthCheckStatusAction {
  type: typeof AUTH_CHECK_STATUS;
}

export type AuthActionType =
  | IAuthStart
  | IAuthSuccess
  | IAuthFailed
  | IAuthCheckTimeoutAction
  | IAuthLogoutAction
  | IAuthCheckStatusAction;
