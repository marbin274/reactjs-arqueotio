import { state as initialState, IAuthState } from "redux-app/auth/state";
import {
  AuthActionType,
  AUTH_START,
  AUTH_FAILED,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
} from "redux-app/auth/types";

export const reducer = (
  state = initialState,
  action: AuthActionType
): IAuthState => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...initialState,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        token: action.payload,
      };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
