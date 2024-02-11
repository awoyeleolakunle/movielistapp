import { Movie } from "../../components/movieComponent/movieInterface";

export const SELECT_A_MOVIE: string = "SELECT_A_MOVIE";
export const ADD_MOVIES: string = "ADD_MOVIES";
export const ADD_A_MOVIE: string = "ADD_A_MOVIE";
export const ROLLBACK_MOVIE: string = "ROLLBACK_MOVIE";

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
