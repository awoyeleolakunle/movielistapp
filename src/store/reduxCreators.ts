import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import { Action, UnknownAction } from "redux";
import { Base_Url } from "../config/appConfig";
import { addListOfMovies } from "./actions";
import { ERROR_MESSAGE } from "../reusableComponents/errorHandling";
import fetchAllMovies from "../api/movieApis/fetchMoviesApi";
import { Movie } from "../components/movieComponent/addMovieComponents/addMovie";
import { useDispatch } from "react-redux";
import React from "react";

export const fetchMovies = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch): Promise<void> => {
    try {
      const response = await fetchAllMovies();
      console.log("I fetched the movies ");
      const movies: Movie[] = response;
      dispatch(addListOfMovies(movies));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    // try {
    //   const listOfFetchedMovies: Movie[] = await fetchAllMovies();
    //   dispatch(addListOfMovies(listOfFetchedMovies));
    // } catch (error) {
    //   console.log(ERROR_MESSAGE.ERROR_FETCHING);
    // }
  };
};
