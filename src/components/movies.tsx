import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/movie.css';
import { useDispatch, useSelector } from 'react-redux';
import { addListOfMovies } from '../store/actions';
import { Movie } from '../components/addMovie';
import { RootState } from '../store/store';

export const MovieList = () => {
  const dispatch = useDispatch();

  const listOfMovies = useSelector((state: RootState) => state.movie.listOfMovies ?? []);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/movielistapp/allMovie');
        const data = response.data;
        console.log(data);
        console.log("I'm the fetched data ", data);
        dispatch(addListOfMovies(data));
      } catch (error) {
        console.log('Error fetching from the JSON file');
      }
    };

    fetchMovies();
  }, [dispatch]);

  console.log("I'm the list of movies : ", listOfMovies);

  const showSelectedMovieDetails = (movieId: string) => {
    navigate(`/selectedMoviePage?movieid=${encodeURIComponent(JSON.stringify(movieId))}`);
  }

  console.log(listOfMovies);

  return (
    <div className='mainContainer'>
      <nav className='navListElements'>
        <img className='movieLogo' src="https://th.bing.com/th?id=OIP.HYkwHkkaBsGSnIsLJFZ79QHaFf&w=290&h=215&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
        <ul>
          <li>All Shows</li>
          <li>Movies</li>
          <li>TV shows</li>
          <li onClick={() => navigate("/addMovie")}>Add a movie</li>
        </ul>
      </nav>

      <div className='bainedCinema'> Welcome to Bained Cinema</div>

      <ul className="listToBeDisplayed">
        {listOfMovies.map((movie: Movie) => (
          <li key={movie._id} onClick={() => showSelectedMovieDetails(movie.title)}>
            <div className='movieDetails'>
              <img className='movieImageLink' src={movie.movieImage} alt="Not found" style={{ width: '100%', height: '200px', maxHeight: '100%' }} />
              <div className='otherMovieDetails'>
                <p>Genre: {movie.genre}</p>
                <p>Title: {movie.title}</p>
                <p>Id: {movie._id}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
