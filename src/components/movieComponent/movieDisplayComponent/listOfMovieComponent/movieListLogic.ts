import { useNavigate } from "react-router-dom";
import { Base_Url } from "./../../../../config/appConfig";
import axios from "axios";
import { ERROR_MESSAGE } from "../../../../reusableComponents/errorHandling";
import { useDispatch } from "react-redux";
import { addListOfMovies } from "../../../../store/actions";
import React, { useEffect } from "react"; 

export const useMovieDetailsNavigation = () => {

  const navigate = useNavigate();
  const showSelectedMovieDetails = (movieTitle: string) => {
    navigate(
      `/selectedMoviePage?movieid=${encodeURIComponent(
        JSON.stringify(movieTitle)
      )}`
    );
  };
  return showSelectedMovieDetails;
};

export const useFetchMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
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
};
