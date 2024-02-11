import React from "react";
import "../AddMoviePage/index.css";
import TopNav from "../../reusableComponents/topNav/topNav";
import Footer from "../../reusableComponents/footer/footer";
import MovieForm from "../../components/movieComponent/addMovieComponents/movieForm/movieForm";
import { addNewMovie } from "../../store/movieStore/movieThunkCreator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAMoviePage: React.FC = () => {
  return (
    <div className="mainContainerForAddMovie">
      <TopNav />
      <MovieForm addNewMovie={addNewMovie} />
      <br />
      <br />
      <br />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default AddAMoviePage;
