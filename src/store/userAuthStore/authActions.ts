export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const loginUserSuccess = (token: string) => ({
  type: LOGIN_USER_SUCCESS,
  payload: token,
});
