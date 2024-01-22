import React, { useEffect } from "react";
import axios from "axios";
import "../components/selectedMoviePage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addMovie } from "../store/actions";

export const SelectedMovie: React.FC = () => {
  const dispatch = useDispatch();

  const foundMovie = useSelector(
    (state: RootState) => state.movie?.selectedMovie
  );
  const navigate = useNavigate();

  useEffect(() => {
    const querryParam = new URLSearchParams(window.location.search);
    const foundParam = querryParam.get("movieid");

    const fetchMovies = async () => {
      const cleanFoundParam = foundParam?.replace(/"/g, "");
      const response = await axios.get(
        `http://localhost:5000/api/v1/movielistapp/findMovieByTitle?title=${cleanFoundParam}`
      );
      console.log("I'm the found data ", response.data);
      dispatch(addMovie(response.data));
    };

    fetchMovies();
  }, []);

  return (
    <div className="mainContainer2">
      <div className="bainedCinemaInSelectedMovie">
        Bained makes it done easily with zero stress
      </div>

      <div className="listToBeDisplayedInSelectedPage">
        {foundMovie && (
          <>
            <img src={foundMovie.imageUrl} alt="" />
            <div className="otherMovieDetailsN">
              <p>Genre : {foundMovie.genre}</p>
              <p>Title : {foundMovie.title}</p>
              <p>Director : {foundMovie.director}</p>
            </div>
          </>
        )}
      </div>

      <button className="btn">Download Now</button>
      <br />
      <button className="prevBtn" onClick={() => navigate("/")}>
        Go to the previous page
      </button>
    </div>
  );
};
