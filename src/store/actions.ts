// actions.ts
import { Movie } from "../components/movieComponent/addMovieComponents/addMovie";

export const SELECT_A_MOVIE = "SELECT_A_MOVIE";
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_A_MOVIE = "ADD_A_MOVIE";
export const ROLLBACK_MOVIE = "ROLLBACK_MOVIE";

export const addAMovie = (movie: Movie) => ({
  type: ADD_A_MOVIE,
  payload: movie,
});

export function addListOfMovies(movies: Movie[]) {
  return {
    type: ADD_MOVIES,
    payload: movies,
  };
}

export function selectedMovie(movie: Movie) {
  return {
    type: SELECT_A_MOVIE,
    payload: movie,
  };
}

export function rollBackMovie(movie: Movie) {
  return {
    type: ROLLBACK_MOVIE,
    payload: movie,
  };
}
