import axiosPublic from "api/public.api";
import { LoginSingInType } from "models/loginSingIn";
export type AuthApiLoginProps = { username: string; password: string };

export class AuthApi {
  static async login(params: AuthApiLoginProps) {
    const firebaseKey = process.env.APP_FIREBASE_APÍ_KEY;
    return await axiosPublic.post<LoginSingInType>(
      `/v1/accounts:signInWithPassword?key=${firebaseKey}`,
      {
        email: params.username,
        password: params.password,
        returnSecureToken: true,
      }
    );
  }
}
