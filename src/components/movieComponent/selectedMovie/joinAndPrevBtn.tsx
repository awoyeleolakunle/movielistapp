import React from "react";
import "../selectedMovie/joinNowAndPrevBtn.css";
import { useNavigate } from "react-router-dom";

const JoinNowAndPrevBtn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn">Download Now</button>
      <br />
      <br />
      <br />

      <button className="prevBtn" onClick={() => navigate("/")}>
        Go back to previous page
      </button>
    </div>
  );
};

export default JoinNowAndPrevBtn;
