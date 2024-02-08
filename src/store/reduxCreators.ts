import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import { Action } from "redux";
import { addListOfMovies, selectedMovie } from "./actions";
import fetchAllMovies from "../api/movieApis/fetchMoviesApi";
import { Movie } from "../components/movieComponent/addMovieComponents/addMovie";
import fetchAMovie from "../api/movieApis/fectchAMovieApi";

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
      console.error(error);
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
        console.log("I got here");
        const cleanedFoundParam = foundParam.replace(/"/g, "");
        const fetchedMovie: Movie = await fetchAMovie(cleanedFoundParam);
        dispatch(selectedMovie(fetchedMovie));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
