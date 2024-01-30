import React, { useState, ChangeEvent } from "react";

import "../components/registration.css";
import TopNav from "./../reusableComponents/topNav/topNav";
import Footer from "../reusableComponents/footer/footer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export interface User {
  _id: string;
  emailAddress: string;
  password: string;
  phoneNumber: string;
}

export const RegisterUser: React.FC = () => {
  const [newUser, setNewUser] = useState<User>({
    _id: "",
    emailAddress: "",
    password: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const decodeToken = (token: string) => {
    const decodedToken = jwtDecode(token);
    console.log("I'm the decoded token :", decodedToken);
    navigate("/");
  };

  const addNewUser = async () => {
    console.log(newUser);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/movielistapp/register",
        newUser
      );

      console.log(" I'm the response ", response);
      console.log("I'm the response date ", response.data);
      console.log("I'm the response status", response.status);
      if (response.status === 201) {
        decodeToken(response.data);
        toast.success("Movie added successfully");
      } else if (response.status === 400) {
        console.log(response.data);
        toast.success(response.data);
      }
    } catch (error) {
      console.log("Error connecting to the server", error);
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
      <ToastContainer />
    </div>
  );
};
