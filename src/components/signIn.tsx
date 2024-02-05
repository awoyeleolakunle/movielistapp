import React, { ChangeEvent, useState } from "react";
import "./signIn.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import TopNav from "./../reusableComponents/topNav/topNav";
import Footer from "../reusableComponents/footer/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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
    const { name, value } = event.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const decodeToken = (token: string) => {
    const decodedToken: any = jwtDecode(token);
    console.log("I'm the decoded token :", decodedToken);

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
        "http://localhost:5000/api/v1/movielistapp/login",
        loginDetails
      );
      console.log(response);
      console.log(response.data);
      if (response.data.status === 200) {
        decodeToken(response.data.data);
        toast.success("Movie added successfully");
      }
    } catch (error: any) {
      if (error.response.data.status === 400) {
        toast.error(error.response.data.data);
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
