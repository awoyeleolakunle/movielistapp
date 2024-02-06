import React, { useEffect } from "react";
import axios from "axios";
import "../components/selectedMoviePage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectedMovie } from "../store/actions";
import TopNav from "../reusableComponents/topNav/topNav";
import Footer from "../reusableComponents/footer/footer";
import { Base_Url } from "../config/appConfig";

export const SelectedMovie: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const foundMovie = useSelector(
    (state: RootState) => state.movie?.selectedMovie
  );

  useEffect(() => {
    const querryParam = new URLSearchParams(window.location.search);
    const foundParam = querryParam.get("movieid");

    const fetchMovies = async () => {
      const cleanFoundParam = foundParam?.replace(/"/g, "");
      const response = await axios.get(
        `${Base_Url}/api/v1/movielistapp/findMovieByTitle?title=${cleanFoundParam}`
      );
      console.log("I'm the found data ", response.data.data);
      dispatch(selectedMovie(response.data.data));
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="mainContainer2">
      <TopNav />
      {foundMovie && (
        <div
          className="listToBeDisplayedInSelectedPage"
          style={
            {
              // zIndex: "1",
            }
          }
        >
          {/* {foundMovie && ( */}
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
