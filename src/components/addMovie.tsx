import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "../components/addMovie.css";
import TopNav from "../reusableComponents/topNav/topNav";
import Footer from "../reusableComponents/footer/footer";
import { toast, ToastContainer } from "react-toastify";

export interface Movie {
  _id: string;
  imageUrl: string;
  genre: string;
  director: string;
  title: string;
  description: string;
  pgRatings: string;
  cast: string[];
}

export const AddAMovie: React.FC = () => {
  console.log("Yes let go");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [cast, setCast] = useState<string[]>([]);
  const [castDetails, setCastDetails] = useState<string | null>(null);

  const [newMovie, setNewMovie] = useState<Movie>({
    _id: "",
    imageUrl: "",
    genre: "",
    director: "",
    title: "",
    description: "",
    pgRatings: "",
    cast: cast,
  });

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log("I came here to make the call ");
    try {
      const imageFile = event.target.files?.[0];
      console.log("I'm the image file ", imageFile);

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "movielistapp");

        console.log("I'm in here ");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/deokatly1/upload",
          formData
        );

        console.log("I got here too");

        console.log("I'm the response ", response);

        console.log("I am the response data url", response.data.url);
        const url = response.data.url;
        setImageUrl(url);
      }
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setNewMovie((prevData) => ({
        ...prevData,
        imageUrl: imageUrl || "",
      }));
    }
  }, [imageUrl]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("I'm in here now ");

    if (event.target.name === "genre") {
      setNewMovie((prevData) => ({
        ...prevData,
        genre: event.target.value,
      }));
    }

    if (event.target.name === "director") {
      setNewMovie((prevData) => ({
        ...prevData,
        director: event.target.value,
      }));
    }
    if (event.target.name === "title") {
      setNewMovie((prevData) => ({
        ...prevData,
        title: event.target.value,
      }));
    }

    if (event.target.name === "description") {
      setNewMovie((prevData) => ({
        ...prevData,
        description: event.target.value,
      }));
    }

    if (event.target.name === "pgRatings") {
      setNewMovie((prevData) => ({
        ...prevData,
        pgRatings: event.target.value,
      }));
    }
  };

  const handCastDetails = (event: ChangeEvent<HTMLInputElement>) => {
    setCastDetails(event.target.value);
  };

  const addToListOfCast = () => {
    if (castDetails) {
      const listOfCasts = [...cast, castDetails];

      setCast(listOfCasts);
      console.log(cast);
      setCastDetails("");
    }
  };

  const addMovie = async () => {
    console.log(newMovie);
    newMovie.cast = cast;
    console.log(newMovie);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/movielistapp/movieCreation",
        newMovie
      );

      console.log(response);
      console.log(response.data);
      if (response.status === 201) {
        toast.success("Movie added successfully");
      }
    } catch (error) {
      console.log("Error connecting to the server", error);
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
            onChange={uploadImage}
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
            onChange={handCastDetails}
          />
          <button className="addcastBtn" onClick={addToListOfCast}>
            Add Cast
          </button>
        </div>
      </div>
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
      <ToastContainer />
    </div>
  );
};
