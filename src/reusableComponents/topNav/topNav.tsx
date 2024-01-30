import React, { useState } from "react";
import "../topNav/topNav.css";

import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="topNav">
      <div className="leftNavDetails">Bained Movies</div>
      <div className="rightNavDetails">
        <p className="unlimited">Unlimited Movies</p>
        <button onClick={() => navigate("/addMovie")} className="joinNowBtn">
          Add Movie
        </button>
        <button className="signInBtn" onClick={() => navigate("/login")}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default TopNav;
