import React, { useState } from "react";
import "../movieForm/movieForm.css";
import ImageInputHandler from "../imageInputComponent/imageInput";
import TextInput from "../textInput/textInput";
import { handleInputChange } from "../../../../reusableComponents/handleChange";
import { Movie } from "../../movieInterface";
import AddAMovieButton from "../addMovieButton/addAMovieBtn";
import CastInput from "../castInput/castInput";
import { EMPTY_STRING } from "../../../../constants";
import { useDispatch } from "react-redux";

interface addMovieProps {
  addNewMovie: (movie: Movie) => any;
}
const MovieForm: React.FC<addMovieProps> = ({ addNewMovie }) => {
  const [newMovie, setNewMovie] = useState<Movie>({
    imageUrl: EMPTY_STRING,
    genre: EMPTY_STRING,
    director: EMPTY_STRING,
    title: EMPTY_STRING,
    description: EMPTY_STRING,
    pgRatings: EMPTY_STRING,
    cast: [],
  });

  const dispatch = useDispatch();

  const handleAddAMovie = () => {
    dispatch(addNewMovie(newMovie));
  };

  return (
    <div>
      <div className="addMovieDiv">
        <ImageInputHandler
          setNewImageUrl={(url) => setNewMovie({ ...newMovie, imageUrl: url })}
        />
        <TextInput
          label="Genre"
          name="genre"
          value={newMovie.genre}
          onChange={(e) => handleInputChange(e, setNewMovie)}
        />
        <TextInput
          label="Title"
          name="title"
          value={newMovie.title}
          onChange={(e) => handleInputChange(e, setNewMovie)}
        />
        <TextInput
          name="director"
          label="Director"
          value={newMovie.director}
          onChange={(e) => handleInputChange(e, setNewMovie)}
        />
        <TextInput
          label="Description"
          name="description"
          value={newMovie.description}
          onChange={(e) => handleInputChange(e, setNewMovie)}
        />
        <TextInput
          label="PgRatings"
          name="pgRatings"
          value={newMovie.pgRatings}
          onChange={(e) => handleInputChange(e, setNewMovie)}
        />
        <CastInput
          onAddToCast={(castName: string) =>
            setNewMovie((prevMovie) => ({
              ...prevMovie,
              cast: [...prevMovie.cast, castName],
            }))
          }
        />
      </div>
      <br />
      <AddAMovieButton addMovie={handleAddAMovie} />
    </div>
  );
};

export default MovieForm;
