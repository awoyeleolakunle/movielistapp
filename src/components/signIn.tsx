import React, { ChangeEvent, useState } from "react";
import "./signIn.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";

export interface Login {
  emailAddress: string;
  password: string;
}

export const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState<Login>({
    emailAddress: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const decodeToken = (token: string) => {
    const slicedToken = token.slice(0, 6);
    const decodedToken = jwtDecode(slicedToken);
    console.log("I'm the decoded token :", decodeToken);
  };

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/movielistapp/login",
        loginDetails
      );
      console.log(response);
      console.log(response.data);
      if (response.status === 200) {
        decodeToken(response.data);
        toast.success("Movie added successfully");
      }
    } catch (error) {}
  };

  return (
    <div>
      <div>
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
          <label htmlFor="password">Email Address</label>
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
