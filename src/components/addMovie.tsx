import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import "../components/addMovie.css";
// import { toast, ToastContainer } from "react-toastify";

export interface Movie {
  _id: string;
  imageUrl: string;
  genre: string;
  director: string;
  title: string;
}

export const AddAMovie: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [newMovie, setNewMovie] = useState<Movie>({
    _id: "",
    imageUrl: "",
    genre: "",
    director: "",
    title: "",
  });

  const uploadImage = async (imageFile: File) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "movielistapp");

      console.log("I'm in here ");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/deokatly1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("I got here too");

      console.log("I'm the response ", response);

      console.log("I am the response data url", response.data.url);
      const url = response.data.url;
      setImageUrl(url);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "movieImage" && event.target.files) {
      const imageFile = event.target.files[0];
      console.log("I'm the image file ", imageFile);

      await uploadImage(imageFile);

      setNewMovie((prevData) => ({
        ...prevData,
        imageUrl: imageUrl || "",
      }));
    }

    const { name, value } = event.target;
    setNewMovie((prevData) => ({
      ...prevData,
      imageUrl: imageUrl || "",
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await addMovie();
    } catch (error) {
      console.log("Error connecting to the server", error);
    }
  };

  const addMovie = async () => {
    console.log(newMovie);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/movielistapp/movieCreation",
        newMovie
      );

      console.log(response);
      console.log(response.data);
      // if (response.status === 201) {
      //   toast.success("Movie added successfully");
      // }
    } catch (error) {
      console.log("Error connecting to the server", error);
    }
  };

  return (
    <div className="mainContainerForAddMovie">
      <div className="addMovieDiv">
        <div className="form-group">
          <label htmlFor="movieImage">Movie Image:</label>
          <input
            type="file"
            id="imageId"
            name="movieImage"
            onChange={handleChange}
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
      </div>
      <button className="addMovieBtn" onClick={handleSubmit}>
        Add Movie
      </button>
      {/* <ToastContainer /> */}
    </div>
  );
};
