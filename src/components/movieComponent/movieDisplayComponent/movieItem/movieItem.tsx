import React from "react";
import "../movieItem/movieItem.css";
import { MovieItemProps } from "./movieItemInterface";

const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  showSelectedMovieDetails,
}) => {
  return (
    <li key={movie._id} onClick={() => showSelectedMovieDetails(movie.title)}>
      <div className="movieDetails">
        <img
          className="movieImageLink"
          src={movie.imageUrl}
          alt="Not found"
          style={{
            width: "100%",
            height: "200px",
            maxHeight: "100%",
          }}
        />
        <div className="otherMovieDetails">
          <p>Genre: {movie.genre}</p>
          <p>Title: {movie.title}</p>
          <p>Director: {movie.director}</p>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
