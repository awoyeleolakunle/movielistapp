import React from "react";
import "../loginPage/index.css";
import TopNav from "../../reusableComponents/topNav/topNav";
import Footer from "../../reusableComponents/footer/footer";
import SignInForm from "../../components/signInComponent/signInForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../store/userAuthStore/userAuthThunkCreator";

const Login: React.FC = () => {
  return (
    <div className="mainContainer-login">
      <TopNav />
      <SignInForm loginUser={loginUser} />
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
