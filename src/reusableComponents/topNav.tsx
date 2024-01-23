import React from "react";
import "../reusableComponents/topNav.css";

import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="topNav">
      <div className="leftNavDetails">Bained Movies</div>
      <div className="rightNavDetails">
        <p className="unlimited">Unlimited Movies</p>
        <button onClick={() => navigate("/addMovie")} className="joinNowBtn">
          Add Movie
        </button>
        <button className="signInBtn">Sign In</button>
      </div>
    </div>
  );
};

export default TopNav;
