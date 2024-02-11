import React from "react";
import "../signInComponent/signInButton.css";
import { useDispatch } from "react-redux";
import { LoginDetails } from "./signInForm";
import { useNavigate } from "react-router-dom";

interface signInProps {
  loginUser: (loginDetails: LoginDetails, navigate: any) => any;
  loginDetails: LoginDetails;
}
const SignInButton: React.FC<signInProps> = ({ loginDetails, loginUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginUser = () => {
    dispatch(loginUser(loginDetails, navigate));
  };

  return (
    <div>
      <button className="sign-In-Button" onClick={handleLoginUser}>
        Sign In
      </button>
    </div>
  );
};

export default SignInButton;
