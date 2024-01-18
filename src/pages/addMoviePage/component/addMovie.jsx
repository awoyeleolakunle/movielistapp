import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/addMovie.css';

export const AddAMovie = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [newId, setNewId] = useState(null);
  const [newMovie, setNewMovie] = useState({
    id: 9,
    movieImage :'',
    genre: '',
    director:'',
    title: '',
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movies.json');
        console.log("I'm the found data ", response.data);
        setListOfMovies(response.data);
        setNewId(response.data.length + 1);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
    // setNewId(listOfMovies.length + 1);
  }, []);



  console.log(newId);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async () => {
    console.log(newMovie);

    const updatedMovies = [...listOfMovies, newMovie];

   
    setListOfMovies(updatedMovies);

    try {
      await axios.put('/movies.json', updatedMovies);
      console.log('Movie added successfully!');
    } catch (error) {
      console.error('Error updating movies:', error);
    }
  };

  return (
    <div>
      hello I'm here now.
      <div>

      <label htmlFor="movieImage">Movie Image:</label>
        <input
          type="text"
          id="imageId"
          name="movieImage"
          value={newMovie.movieImage}
          onChange={handleChange}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genreId"
          name="genre"
          value={newMovie.genre}
          onChange={handleChange}
        />

<label htmlFor="director">director:</label>
        <input
          type="director"
          id="directorId"
          name="director"
          value={newMovie.director}
          onChange={handleChange}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="titleId"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
        />
      </div>
      <button onClick={()=>handleSubmit()}>Add Movie</button>
    </div>
  );
};
