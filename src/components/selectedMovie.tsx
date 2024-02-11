import React, { useEffect } from "react";
import axios from "axios";
import "../components/selectedMoviePage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectedMovie } from "../store/movieStore/movieActions";
import TopNav from "../reusableComponents/topNav/topNav";
import Footer from "../reusableComponents/footer/footer";
import { Base_Url } from "../config/appConfig";
import { Movie } from "./movieComponent/movieInterface";

export const SelectedMovie: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const foundMovie = useSelector(
    (state: RootState) => state.movie?.selectedMovie
  );

  return (
    <div className="mainContainer2">
      <TopNav />
      {foundMovie && (
        <div className="listToBeDisplayedInSelectedPage">
          <img
            className="selectedMovieImage"
            src={foundMovie.imageUrl}
            alt=""
            style={{}}
          />
          <div
            className="otherMovieDetailsN"
            style={{
              background: "#000;",
              transition: "background 0.5s ease-in-out",
              width: "100%",
              height: "500px",
            }}
          >
            <p>Genre : {foundMovie.genre}</p>
            <p>Title : {foundMovie.title}</p>
            <p>Director : {foundMovie.director}</p>
            <p>Description : {foundMovie.description}</p>
            <p>Pg Ratings : {foundMovie.pgRatings} </p>
            {foundMovie.cast && <p>Casts : {foundMovie.cast.join(", ")}</p>}
          </div>
        </div>
      )}
      <button className="btn">Download Now</button>
      <br />
      <br />
      <br />

      <button className="prevBtn" onClick={() => navigate("/")}>
        Go back to previous page
      </button>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
