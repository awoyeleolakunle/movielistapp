import React from "react";
import "../addMovieButton/addAMovieBtn.css";

interface AddAMovieButtonProps {
  addMovie: () => void;
}

const AddAMovieButton: React.FC<AddAMovieButtonProps> = ({ addMovie }) => {
  return (
    <div>
      <button className="addMovieBtn" onClick={addMovie}>
        Add Movie
      </button>
    </div>
  );
};

export default AddAMovieButton;
