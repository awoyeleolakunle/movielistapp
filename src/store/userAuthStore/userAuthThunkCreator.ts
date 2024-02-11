import { LoginDetails } from "../../components/signInComponent/signInForm";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "redux";
import login from "../../api/authApis/loginApi";
import { loginUserSuccess } from "./authActions";
import { toast } from "react-toastify";
import { DecodeToken } from "../../reusableComponents/handleRetrievedToken";
import { HOME_PAGE } from "../../constants";

export const loginUser = (
  loginDetails: LoginDetails,
  navigate: any
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch): Promise<void> => {
    try {
      const response: string | undefined = await login(loginDetails);
      if (response) {
        dispatch(loginUserSuccess(response));
        DecodeToken(response);
        navigate(HOME_PAGE);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
};
