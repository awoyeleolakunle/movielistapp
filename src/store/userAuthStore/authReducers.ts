import { setCookie } from "../../reusableComponents/handleRetrievedToken";
import { LOGIN_USER_SUCCESS } from "./authActions";

const initialState = {
  token: null,
  loading: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      setCookie("movieListToken", action.payload);
      console.log("Im the reducers action.payload : ", action.payload);
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
