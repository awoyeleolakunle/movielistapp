import React, { useEffect } from "react";
import "../listOfMovieComponent/movieList.css";
import MovieItem from "../movieItem/movieItem";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../movieItem/movieItemInterface";
import { RootState } from "../../../../store/store";
import { useMovieDetailsNavigation } from "../listOfMovieComponent/movieListLogic";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

interface movieListProps {
  fetchMovies: () =>
    | ThunkAction<void, RootState, unknown, Action<string>>
    | any;
}

const MovieList: React.FC<movieListProps> = ({ fetchMovies }) => {
  const dispatch = useDispatch();

  const showSelectedMovieDetails = useMovieDetailsNavigation();
  const listOfMovies: Movie[] = useSelector(
    (state: RootState) => state.movie.listOfMovies ?? []
  );
  console.log(listOfMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="listMainDiv" style={{ color: "rgb(255,255,255)" }}>
      <ul className="listToBeDisplayed">
        {listOfMovies.map((movie: Movie) => (
          <MovieItem
            key={movie._id}
            movie={movie}
            showSelectedMovieDetails={showSelectedMovieDetails}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
