export interface IAuthState {
  isAuthenticated: boolean;
  token?: string;
  loading: boolean;
  error?: any
}
export const state: IAuthState = {
  isAuthenticated: false,
  token: undefined,
  loading: false
} 