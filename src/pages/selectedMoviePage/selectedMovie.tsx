import React from "react";
import TopNav from "../../reusableComponents/topNav/topNav";
import Footer from "../../reusableComponents/footer/footer";
import "../selectedMoviePage/selectedMovie.css";
import MovieDetails from "../../components/movieComponent/selectedMovie/selectedMovieDetails";
import { fetchAMovieFromBackend } from "../../store/reduxCreators";

const SelectedMoviePage: React.FC = () => {
  return (
    <div className="mainContainer2">
      <TopNav />
      <MovieDetails fetchAMovieFromBackend={fetchAMovieFromBackend} />
      <Footer />
    </div>
  );
};

export default SelectedMoviePage;
