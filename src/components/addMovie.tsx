import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import '../components/addMovie.css';


import { RootState } from '../store/store'; 


export interface Movie {
  _id: string,
  movieImage :string,
  genre: string,
  director: string,
  title: string,

}
export const AddAMovie : React.FC = () => {


  const [newId, setNewId] = useState< Number | null >(null);


  const [newMovie, setNewMovie] = useState<Movie>({
    _id: '',
    movieImage :'',
    genre: '',
    director:'',
    title: '',
  });

 

 
  console.log(newId);


  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewMovie((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async () => {


    const AddAMovie = async ()=>{


      try{
      const resposne = await axios.post('http://localhost:5000/api/v1/movielistapp/movieCreation', newMovie)

      const data = resposne.data;
      console.log(data);
      }
      catch(error){
        console.log('Error connectint to server');
      }

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
