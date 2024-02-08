import React from "react";
import "../moviePages/index.css";
import TopNav from "../../reusableComponents/topNav/topNav";
import AfterNav from "../../components/movieComponent/movieDisplayComponent/afterNavComponent/afterNav";
import Footer from "../../reusableComponents/footer/footer";
import MovieList from "../../components/movieComponent/movieDisplayComponent/listOfMovieComponent/movieList";
import AfterMovieDisplayDiv from "../../components/movieComponent/movieDisplayComponent/afterMovieListDisplay/afterListOfMovieDisplay";
import BeforeFooter from "../../components/movieComponent/movieDisplayComponent/beforeFooterDiv/beforeFooter";
import { fetchMovies } from "../../store/reduxCreators";
const MoviePage: React.FC = () => {
  return (
    <div className="homePageContainer">
      <TopNav />
      <AfterNav />
      <br />
      <MovieList fetchMovies={fetchMovies} />
      <br />
      <br />
      <AfterMovieDisplayDiv />
      <br />
      <br />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default MoviePage;
