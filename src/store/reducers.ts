import { combineReducers } from "redux";
import { Movie } from "../components/movieComponent/movieInterface";

interface MovieState {
  listOfMovies: Movie[];
  selectedMovie: Movie | null;
}

const initialMovieState: MovieState = {
  listOfMovies: [],
  selectedMovie: null,
};

const movieReducer = (state = initialMovieState, action: any) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return { ...state, listOfMovies: action.payload };

    case "ADD_A_MOVIE":
      return {
        ...state,
        listOfMovies: [...state.listOfMovies, action.payload],
      };
    case "SELECT_A_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case "ROLLBACK_MOVIE":
      return {
        ...state,
        listOfMovies: state.listOfMovies.filter(
          (movie) => movie.title !== action.payload.title
        ),
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  movie: movieReducer,
});
