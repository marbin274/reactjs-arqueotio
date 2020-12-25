import axiosPublic from "api/public.api";
import { LoginSingInType } from "models/loginSingIn";
export type AuthApiLoginProps = { username: string; password: string };

export class AuthApi {
  static async login(params: AuthApiLoginProps) {
    return await axiosPublic.post<LoginSingInType>(
      "/v1/accounts:signInWithPassword?key=AIzaSyCT-NdIbTLiMldhiY8E-PQPwyVqf5lfr9I",
      {
        email: params.username,
        password: params.password,
        returnSecureToken: true,
      }
    );
  }
}
