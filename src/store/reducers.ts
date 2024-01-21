
import { combineReducers } from 'redux';
import { Movie } from '../components/addMovie';

interface MovieState {
  listOfMovies: Movie[];
  selectedMovie :null
}

const initialMovieState: MovieState = {
  listOfMovies: [],
  selectedMovie: null
 
};

const movieReducer = (state = initialMovieState, action: any) => {
  switch (action.type){ 

    case 'ADD_MOVIES':
      return { ...state, listOfMovies: action.payload };

  
    case 'ADD_A_MOVIE':
        return{
           ...state, selectedMovie: action.payload
        };

  default:
    return state;
    }
};

export const rootReducer = combineReducers({
  movie: movieReducer,

});
