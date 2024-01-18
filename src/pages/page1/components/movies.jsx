


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/movie.css';


export const MovieList = ({ nav }) => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movies.json');
        const data = response.data;
        setListOfMovies(data);
      } catch (error) {
        console.log('Error fetching from the JSON file');
      }
    };

    fetchMovies();
  }, [nav]);

  console.log("I'm the list of movies : ", listOfMovies);



  const showSelectedMovieDetails = (movieId)=>{
navigate(`/selectedMoviePage?movieid=${encodeURIComponent(JSON.stringify(movieId))}`)

  }

  return (
    <div className='mainContainer'>
       
       <nav className='navListElements'>

        <img className='movieLogo' src="https://th.bing.com/th?id=OIP.HYkwHkkaBsGSnIsLJFZ79QHaFf&w=290&h=215&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
            <ul>
                <li>All Shows</li>
                <li>Movies</li>
                <li>TV shows</li>
                <li onClick={()=>navigate("/addMovie")}>Add a movie</li>
            </ul>
        </nav> 



      <div className='bainedCinema'> Welcome to Bained Cinema</div>
       
      <div className='rightFixedDisplay'>


      <ul className="listToBeDisplayed"  >
        {listOfMovies.map(movie=> (
          <li  key={movie.id}
          
          onClick={()=>showSelectedMovieDetails(movie.id)}
          >
            <div className='movieDetails'>
              <img className='movieImageLink' src={movie.movieImage} alt="Not found"     style={{ width: '110%', height: '200px', maxHeight: '100%' }}/>
              <div className='otherMovieDetails'>
                <p>Director : {movie.director}</p>
              <p>Genre : {movie.genre}</p>
              <p>Title: {movie.title}</p>
              <p>Id : {movie.id}</p>
             
              </div>

            </div>
          </li>
        ))}
      </ul>
        

      </div>
      <ul className="listToBeDisplayed" >
        {listOfMovies.map(movie=> (
          <li  key={movie.id}
          
           
          onClick={()=>showSelectedMovieDetails(movie.id)}
          >
            <div className='movieDetails'>
              <img className='movieImageLink' src={movie.movieImage} alt="Not found"    style={{ width: '100%', height: '200px', maxHeight: '100%' }} />
              <div className='otherMovieDetails'>
              <p>Genre : {movie.genre}</p>
              <p>Title : {movie.title}</p>
              <p>Id : {movie.id}</p>
           
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
   
  );
};
