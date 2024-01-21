// actions.ts
import { Movie } from '../components/addMovie';


export const ADD_A_MOVIE = 'ADD_A_MOVIE'; 
export const ADD_MOVIES = 'ADD_MOVIES';



export const addMovie = (movie: Movie) => ({ 
    type: ADD_A_MOVIE,
    payload: movie,
  });

  
export function addListOfMovies(movies: Movie[]) {
    return ({
        type: ADD_MOVIES,
        payload: movies,
    });
}