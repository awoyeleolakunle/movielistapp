import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/movie.css";
import { useDispatch, useSelector } from "react-redux";
import { addListOfMovies } from "../store/actions";
import { Movie } from "../components/addMovie";
import { RootState } from "../store/store";
import displayPicture from "../../src/assets/displayPictures.svg";
import { logo_URL } from "../../src/config/appConfig";

export const MovieList = () => {
  const displayPicture = require("../assets/displayPicture.svg").default;

  const dispatch = useDispatch();

  const listOfMovies = useSelector(
    (state: RootState) => state.movie.listOfMovies ?? []
  );

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/movielistapp/allMovie"
        );
        const data = response.data;
        console.log(data);
        console.log("I'm the fetched data ", data);
        dispatch(addListOfMovies(data));
      } catch (error) {
        console.log("Error fetching from the JSON file");
      }
    };

    fetchMovies();
  }, [dispatch]);

  console.log("I'm the list of movies : ", listOfMovies);

  const showSelectedMovieDetails = (movieTitle: string) => {
    navigate(
      `/selectedMoviePage?movieid=${encodeURIComponent(
        JSON.stringify(movieTitle)
      )}`
    );
  };

  console.log(listOfMovies);

  return (
    // <div className="mainContainer">
    //   <nav className="navListElements">
    //     <img className="movieLogo" src={logo_URL} alt="" />
    //     <ul>
    //       <li>All Shows</li>
    //       <li>Movies</li>
    //       <li>TV shows</li>
    //       <li onClick={() => navigate("/addMovie")}>Add a movie</li>
    //     </ul>
    //   </nav>

    //   <div className="bainedCinema"> Welcome to Bained Cinema</div>

    //   <ul className="listToBeDisplayed">
    //     {listOfMovies.map((movie: Movie) => (
    //       <li
    //         key={movie._id}
    //         onClick={() => showSelectedMovieDetails(movie.title)}
    //       >
    //         <div className="movieDetails">
    //           <img
    //             className="movieImageLink"
    //             src={movie.imageUrl}
    //             alt="Not found"
    //             style={{ width: "100%", height: "200px", maxHeight: "100%" }}
    //           />
    //           <div className="otherMovieDetails">
    //             <p>Genre: {movie.genre}</p>
    //             <p>Title: {movie.title}</p>
    //             <p>Director: {movie.director}</p>
    //           </div>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="homePageContainer">
      <div className="topNav">
        <div className="leftNavDetails">Bained Movies</div>
        <div className="rightNavDetails">
          <p className="unlimited">Unlimited Movies</p>
          <button className="joinNowBtn">Add Movie</button>
          <button className="signInBtn">Sign In</button>
        </div>
      </div>

      <div className="afterNavDiv">
        <h1>Only on Bained</h1>
        <br></br>
        <p>Bained is the home of amazing original programming that you can’t</p>
        <p>
          find anywhere else. Movies, TV shows, specials and more, all tailored
        </p>
        <p>specifically to you.</p>
      </div>

      <div className="afterMovieDisplayDiv">
        <h1>There is even more to watch</h1>
        <br></br>
        <p>
          Netflix has an extensive library of feature films, documentaries, TV
        </p>
        <p>shows, anime, award-winning Netflix originals, and more. Watch as</p>
        <p>much as you want, anytime you want.</p>
      </div>
      <br></br>
      <button className="joinNowBtn2">Join Now</button>
    </div>
  );
};
