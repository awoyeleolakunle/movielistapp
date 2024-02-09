import React from "react";
import "../AddMoviePage/index.css";
import TopNav from "../../reusableComponents/topNav/topNav";
import Footer from "../../reusableComponents/footer/footer";
import MovieForm from "../../components/movieComponent/addMovieComponents/movieForm/movieForm";

const AddAMoviePage: React.FC = () => {
  return (
    <div className="mainContainerForAddMovie">
      <TopNav />
      <MovieForm />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default AddAMoviePage;
