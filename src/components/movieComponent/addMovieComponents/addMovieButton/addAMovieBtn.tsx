import React from "react";
import "../addMovieButton/addAMovieBtn.css";

interface AddAMovieButtonProps {
  onClick: () => void;
}

const AddAMovieButton: React.FC<AddAMovieButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button className="addMovieBtn" onClick={onClick}>
        Add Movie
      </button>
    </div>
  );
};

export default AddAMovieButton;
