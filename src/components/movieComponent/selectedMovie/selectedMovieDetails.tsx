import "../selectedMovie/movieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import React, { useEffect } from "react";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { BY_COMMA_AND_SPACE } from "../../../constants";

interface MovieFetched {
  fetchAMovieFromBackend: () =>
    | ThunkAction<void, RootState, unknown, Action<string>>
    | any;
}

const MovieDetails: React.FC<MovieFetched> = ({ fetchAMovieFromBackend }) => {
  const dispatch = useDispatch();
  const foundMovie = useSelector(
    (state: RootState) => state.movie?.selectedMovie
  );

  useEffect(() => {
    dispatch(fetchAMovieFromBackend());
  }, [fetchAMovieFromBackend]);

  return (
    <div>
      {foundMovie && (
        <div className="listToBeDisplayedInSelectedPage">
          <img
            className="selectedMovieImage"
            src={foundMovie.imageUrl}
            alt=""
            style={{}}
          />
          <div
            className="otherMovieDetailsN"
            style={{
              background: "#000;",
              transition: "background 0.5s ease-in-out",
              width: "100%",
              height: "500px",
            }}
          >
            <p>Genre : {foundMovie.genre}</p>
            <p>Title : {foundMovie.title}</p>
            <p>Director : {foundMovie.director}</p>
            <p>Description : {foundMovie.description}</p>
            <p>Pg Ratings : {foundMovie.pgRatings} </p>
            {foundMovie.cast && <p>Casts : {foundMovie.cast.join(BY_COMMA_AND_SPACE)}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
