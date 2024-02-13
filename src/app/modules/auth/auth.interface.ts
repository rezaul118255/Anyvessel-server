export type ILogingUser = {
    email: string;
    password:string,
    role:string
}
export type ILoginUserResponse = {
    accessToken: string;
    refreshToken?: string;
    user:{}
  };
  export type IRefreshTokenResponse = {
    accessToken: string;
  };
  