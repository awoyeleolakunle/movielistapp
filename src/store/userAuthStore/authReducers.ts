import { MOVIE_LIST_TOKEN } from "../../config/appConfig";
import { setCookie } from "../../reusableComponents/handleRetrievedToken";
import { LOGIN_USER_SUCCESS } from "./authActions";

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      setCookie(MOVIE_LIST_TOKEN, action.payload);
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
