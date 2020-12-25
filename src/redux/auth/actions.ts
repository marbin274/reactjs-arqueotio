import { AuthApi, AuthApiLoginProps } from "api/auth.api";
import {
  appShowAlertSuccess,
  appShowServiceError,
} from "redux-app/app/actions";
import {
  AuthActionType,
  AUTH_START,
  AUTH_FAILED,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
} from "redux-app/auth/types";

export const auth = (payload: AuthApiLoginProps) => {
  return (dispatch: any) => {
    dispatch(authStart());
    AuthApi.login({ username: payload.username, password: payload.password })
      .then(({ data }) => {
        dispatch(
          appShowAlertSuccess({
            message: "Inicio de sesión exitosa. Redireccionando...",
          })
        );
        setTimeout(() => {
          const expirationDate = new Date(
            new Date().getTime() + parseInt(data.expiresIn) * 1000
          );
          localStorage.setItem("token", data.idToken);
          localStorage.setItem("expirationDate", expirationDate.toString());
          dispatch(authSuccess(data.idToken));
          dispatch(checkAuthTimeout(parseInt(data.expiresIn)));
        }, 1500);
      })
      .catch((error: any) => {
        dispatch(authFailed(error));
        dispatch(appShowServiceError(error));
      });
  };
};

export const authStart = (): AuthActionType => ({
  type: AUTH_START,
});

export const authSuccess = (payload: string): AuthActionType => {
  return {
    type: AUTH_SUCCESS,
    payload,
  };
};

export const authFailed = (payload: { error: any }): AuthActionType => {
  return {
    type: AUTH_FAILED,
    payload,
  };
};

export const checkAuthTimeout = (expirationTime: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export function authLogout(): AuthActionType {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGOUT,
  };
}

export const authCheckState = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDateString = localStorage.getItem("expirationDate");
      const expirationDate: Date = expirationDateString
        ? new Date(expirationDateString)
        : new Date();
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
