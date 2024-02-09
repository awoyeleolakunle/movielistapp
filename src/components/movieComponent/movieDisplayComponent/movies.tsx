import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./movie.css";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../movieInterface";
import { addListOfMovies } from "../../../store/actions";
import TopNav from "../../../reusableComponents/topNav/topNav";
import Footer from "../../../reusableComponents/footer/footer";
import { Base_Url } from "../../../config/appConfig";
import { RootState } from "../../../store/store";
import { ERROR_MESSAGE } from "../../../reusableComponents/errorHandling";

export const MovieList = () => {
  const dispatch = useDispatch();
  const listOfMovies = useSelector(
    (state: RootState) => state.movie.listOfMovies ?? []
  );

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      console.log();
      try {
        const response = await axios.get(
          `${Base_Url}/api/v1/movielistapp/allMovie`
        );
        const data = response.data.data;
        dispatch(addListOfMovies(data));
      } catch (error) {
        console.log(ERROR_MESSAGE.ERROR_FETCHING);
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
    <div className="homePageContainer">
      <TopNav />

      <div className="afterNavDiv">
        <h1>Only on Bained</h1>
        <br></br>
        <p>Bained is the home of amazing original programming that you can’t</p>
        <p>
          find anywhere else. Movies, TV shows, specials and more, all tailored
        </p>
        <p>specifically to you.</p>
      </div>
      <br />

      <div style={{ color: "rgb(255,255,255)" }}>
        {/* <ul className="listToBeDisplayed">
          {listOfMovies.map((movie: Movie) => (
            <li
              key={movie._id}
              onClick={() => showSelectedMovieDetails(movie.title)}
            >
              <div className="movieDetails">
                <img
                  className="movieImageLink"
                  src={movie.imageUrl}
                  alt="Not found"
                  style={{
                    width: "100%",
                    height: "200px",
                    maxHeight: "100%",
                  }}
                />
                <div className="otherMovieDetails">
                  <p>Genre: {movie.genre}</p>
                  <p>Title: {movie.title}</p>
                  <p>Director: {movie.director}</p>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
      <br />
      <br />

      {/* <div className="afterMovieDisplayDiv">
        <h1>There is even more to watch</h1>
        <br></br>
        <p>
          Bained has an extensive library of feature films, documentaries, TV
        </p>
        <p>shows, anime, award-winning Bained originals, and more. Watch as</p>
        <p>much as you want, anytime you want.</p>
      </div> */}
      <br></br>
      <button className="joinNowBtn2">Join Now</button>
      <br />
      <br />
      <br />
      <br />
      <a className="bainedLink" href="#">
        Read about Bained TV shows and movies and watch bonus videos on
        bained.com.
      </a>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
