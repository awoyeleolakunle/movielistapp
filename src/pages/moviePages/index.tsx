import React from "react";
import "../moviePages/index.css";
import TopNav from "../../reusableComponents/topNav/topNav";
import AfterNav from "../../components/movieComponent/movieDisplayComponent/afterNavComponent/afterNav";
import Footer from "../../reusableComponents/footer/footer";
import MovieList from "../../components/movieComponent/movieDisplayComponent/listOfMovieComponent/movieList";
import { useFetchMovies } from "../../components/movieComponent/movieDisplayComponent/listOfMovieComponent/movieListLogic";

const MoviePage: React.FC = () => {
  return (
    <div className="homePageContainer">
      <TopNav />
      <AfterNav />
      <MovieList fetchMovies={useFetchMovies} />
      <Footer />
    </div>
  );
};

export default MoviePage;
