import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./addMovie.css";
import TopNav from "../../../reusableComponents/topNav/topNav";
import Footer from "../../../reusableComponents/footer/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleInputChange } from "../../../reusableComponents/handleChange";
import handleImageUpload from "../../../reusableComponents/handleImageUpload";
import { fetchToken } from "../../../reusableComponents/handleRetrievedToken";
import { Base_Url } from "../../../config/appConfig";
import { useDispatch } from "react-redux";
import { addAMovie, rollBackMovie } from "../../../store/actions";
import { Movie } from "../movieInterface";

export const AddAMovie: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [cast, setCast] = useState<string[]>([]);
  const [castDetails, setCastDetails] = useState<string | null>(null);
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [newMovie, setNewMovie] = useState<Movie>({
    imageUrl: "",
    genre: "",
    director: "",
    title: "",
    description: "",
    pgRatings: "",
    cast: cast,
  });

  useEffect(() => {
    fetchToken(setAdminToken);
  }, []);

  const uploadImageToCloudinary = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const url: string | null = await handleImageUpload(event);
    setImageUrl(url);
  };

  useEffect(() => {
    if (imageUrl) {
      setNewMovie((prevData: Movie) => ({
        ...prevData,
        imageUrl: imageUrl || "",
      }));
    }
  }, [imageUrl]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(event, setNewMovie);
  };

  const handleCastDetails = (event: ChangeEvent<HTMLInputElement>): void => {
    setCastDetails(event.target.value);
  };

  const addToListOfCast = (): void => {
    if (castDetails) {
      const listOfCasts = [...cast, castDetails];
      setCast(listOfCasts);
      setCastDetails("");
    }
  };

  const addMovie = async () => {
    console.log(newMovie);
    dispatch(addAMovie({ ...newMovie, cast: cast }));
    console.log(newMovie);
    try {
      const response = await axios.post(
        `${Base_Url}/api/v1/movielistapp/movieCreation`,
        newMovie,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: adminToken,
          },
        }
      );
      if (response.data.status === 201) {
        toast.success(response.data.data);
      }
    } catch (error: any) {
      dispatch(rollBackMovie(newMovie));
      if (error && error.response.status && error.response.status === 401) {
        toast.error(error.response.data.error.data);
      } else {
        toast.error(error.response.data.data);
      }
    }
  };
  return (
    <div className="mainContainerForAddMovie">
      <TopNav />
      <div className="addMovieDiv">
        <div className="form-group">
          <label htmlFor="movieImage">Movie Image:</label>
          <input
            type="file"
            id="imageId"
            name="movieImage"
            onChange={uploadImageToCloudinary}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genreId"
            name="genre"
            value={newMovie.genre}
            placeholder="Enter movie genre"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="directorId"
            name="director"
            value={newMovie.director}
            placeholder="enter movie director "
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="titleId"
            name="title"
            value={newMovie.title}
            placeholder="enter movie title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="descriptionId"
            name="description"
            value={newMovie.description}
            placeholder="enter movie description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pgRatings">Pg Ratings:</label>
          <input
            type="text"
            id="pgRatingsId"
            name="pgRatings"
            value={newMovie.pgRatings}
            placeholder="enter movie pgRatings"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cast">Add a cast to list of casts:</label>
          <input
            type="text"
            id="castId"
            name="cast"
            placeholder="enter a cast "
            onChange={handleCastDetails}
          />
          <br />
          <button className="addcastBtn" onClick={addToListOfCast}>
            Add Cast
          </button>
        </div>
      </div>
      <br />
      <button className="addMovieBtn" onClick={addMovie}>
        Add Movie{" "}
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
};
