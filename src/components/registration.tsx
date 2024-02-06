import React, { useState, ChangeEvent } from "react";

import "../components/registration.css";
import TopNav from "./../reusableComponents/topNav/topNav";
import Footer from "../reusableComponents/footer/footer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Base_Url } from "../config/appConfig";
import { SUCCESS_MESSAGE } from "../reusableComponents/successResponses";
import { handleInputChange } from "../reusableComponents/handleChange";
export interface User {
  _id?: string;
  emailAddress: string;
  password: string;
  phoneNumber: string;
}

export const RegisterUser: React.FC = () => {
  const [newUser, setNewUser] = useState<User>({
    emailAddress: "",
    password: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(event, setNewUser);
  };

  const decodeToken = (token: string) => {
    const decodedToken = jwtDecode(token);
    navigate("/");
  };

  const addNewUser = async () => {
    console.log(newUser);
    try {
      const response = await axios.post(
        `${Base_Url}/api/v1/movielistapp/register`,
        newUser
      );
      if (response.data.status === 201) {
        decodeToken(response.data.data);
        toast.success(SUCCESS_MESSAGE);
      } else if (response.data.status === 400) {
        toast.success(response.data.data);
      }
    } catch (error: any) {
      if (error.response.data.status === 400) {
        toast.error(error.response.data.data);
      }
    }
  };

  return (
    <div className="mainContainerRegistration">
      <TopNav />
      <div className="words">
        <p>Sign Up To </p>
        <p>Amazing Views</p>
      </div>

      <div className="form-Div">
        <div className="registrationForm">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="text"
            name="emailAddress"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </div>

        <div className="registrationForm">
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="registrationForm">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone Number"
            onChange={handleChange}
          />
        </div>
        <br />

        <button className="sign-up-button" onClick={addNewUser}>
          Sign Up
        </button>
      </div>
      <br />
      <br />
      <br />

      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
};
