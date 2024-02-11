import React, { ChangeEvent, useState } from "react";
import "./signIn.css";
import axios from "axios";
import TopNav from "../../reusableComponents/topNav/topNav";
import Footer from "../../reusableComponents/footer/footer";

import { useNavigate } from "react-router-dom";
import { Base_Url } from "../../config/appConfig";
import { handleInputChange } from "../../reusableComponents/handleChange";
import { ERROR_MESSAGE } from "../../reusableComponents/errorHandling";
import { useDispatch } from "react-redux";
import { loginUserSuccess } from "../../store/userAuthStore/authActions";
import { EMPTY_STRING } from "../../constants";
import SignInButton from "./signInButton";

export interface LoginDetails {
  emailAddress: string;
  password: string;
}

type loginType = {
  loginUser: (loginDetails: LoginDetails, navigate: any) => any;
};

const SignInForm: React.FC<loginType> = ({ loginUser }) => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    emailAddress: EMPTY_STRING,
    password: EMPTY_STRING,
  });

  // const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event, setLoginDetails);
  };

  return (
    <div>
      <div className="form-login">
        <div className="login-Form">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="text"
            name="emailAddress"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </div>

        <div className="login-Form">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <br />
        <SignInButton loginDetails={loginDetails} loginUser={loginUser} />
      </div>
      <p>
        Not yet a member ? <a href="/registerUser">Sign Up</a>
      </p>
    </div>
  );
};

export default SignInForm;
