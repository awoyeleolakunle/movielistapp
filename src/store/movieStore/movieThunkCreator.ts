import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "redux";
import {
  addAMovie,
  addListOfMovies,
  rollBackMovie,
  selectedMovie,
} from "./movieActions";
import fetchAllMovies from "../../api/movieApis/fetchMoviesApi";
import { Movie } from "../../components/movieComponent/movieInterface";
import fetchAMovie from "../../api/movieApis/fectchAMovieApi";
import addMovie from "../../api/movieApis/addAMovieApi";
import { toast } from "react-toastify";
import { EMPTY_STRING } from "../../constants";

export const fetchMovies = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch): Promise<void> => {
    try {
      const response = await fetchAllMovies();
      const movies: Movie[] = response;
      dispatch(addListOfMovies(movies));
    } catch (error: any) {
      toast.error(error);
    }
  };
};

export const fetchAMovieFromBackend = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch): Promise<void> => {
    try {
      const querryParam = new URLSearchParams(window.location.search);
      const foundParam = querryParam.get("movieid");
      if (foundParam) {
        const cleanedFoundParam = foundParam.replace(/"/g, EMPTY_STRING);
        const fetchedMovie: Movie = await fetchAMovie(cleanedFoundParam);
        dispatch(selectedMovie(fetchedMovie));
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
};

export const addNewMovie = (
  newMovie: Movie
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch): Promise<void> => {
    try {
      dispatch(addAMovie(newMovie));
      const response = await addMovie(newMovie);
      toast.success(response.data.data);
    } catch (error: any) {
      dispatch(rollBackMovie(newMovie));
      console.log(error);
      toast.error(error.message);
    }
  };
};
