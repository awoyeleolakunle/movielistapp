import React, { useEffect } from "react";
import "../listOfMovieComponent/movieList.css";
import MovieItem from "../movieItem/movieItem";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../movieItem/movieItemInterface";
import { RootState } from "../../../../store/store";
import {
  useMovieDetailsNavigation,
  useFetchMovies,
} from "../listOfMovieComponent/movieListLogic";

interface movieListProps {
  fetchMovies: () => void;
}
const MovieList: React.FC<movieListProps> = ({ fetchMovies }) => {
  const showSelectedMovieDetails = useMovieDetailsNavigation();
  const listOfMovies: Movie[] = useSelector(
    (state: RootState) => state.movie.listOfMovies ?? []
  );

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div style={{ color: "rgb(255,255,255)" }}>
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
