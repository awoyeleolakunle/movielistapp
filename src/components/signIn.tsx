import React, { ChangeEvent, useState } from "react";
import "./signIn.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import TopNav from "./../reusableComponents/topNav/topNav";
import Footer from "../reusableComponents/footer/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Base_Url } from "../config/appConfig";
import { handleInputChange } from "../reusableComponents/handleChange";
import { ERROR_MESSAGE } from "../reusableComponents/errorHandling";

export interface LoginDetails {
  emailAddress: string;
  password: string;
}

export const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    emailAddress: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event, setLoginDetails);
  };

  const decodeToken = (token: string) => {
    const decodedToken: any = jwtDecode(token);

    if (decodedToken.accessTypes[0] === "ADMIN") {
      sessionStorage.setItem("movieListToken", token);
    } else {
      sessionStorage.setItem("movieListToken", token);
    }
    navigate("/");
  };

  const loginUser = async () => {
    try {
      const response = await axios.post(
        `${Base_Url}/api/v1/movielistapp/login`,
        loginDetails
      );
      console.log(response);
      console.log(response.data);
      if (response.data.status === 200) {
        decodeToken(response.data.data);
      }
    } catch (error: any) {
      if (
        error &&
        error.response.data.status &&
        error.response.data.status === 400
      ) {
        toast.error(error.response.data.data);
      } else {
        toast.error(ERROR_MESSAGE.NETWORK_FAILED);
      }
    }
  };

  return (
    <div className="mainContainer-login">
      <TopNav />
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
        <button className="sign-In-Button" onClick={loginUser}>
          Sign In
        </button>
      </div>
      <p>
        Not yet a member ? <a href="/registerUser">Sign Up</a>
      </p>
      <br />
      <br />
      <br />
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
};
