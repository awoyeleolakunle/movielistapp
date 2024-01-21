import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/selectedMoviePage.css';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../../components/addMovie';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addListOfMovies, addMovie } from '../../../store/actions';

export const SelectedMovie: React.FC = () => {
  
  const dispatch = useDispatch();

  const foundMovie = useSelector((state: RootState)=> state.movie?.selectedMovie)
  //const [foundMovie, setFoundMovie] = useState<Movie | undefined>(undefined);
 // const [movieId, setMovieId] = useState<string | null>(null);


  const navigate = useNavigate();


  useEffect(() => {


    const querryParam = new URLSearchParams(window.location.search);
      const foundParam = querryParam.get('movieid');
  
      if (foundParam) {
     
     
        alert(foundParam)
      }
    const fetchMovies = async () => {
    const  cleanFoundParam  = foundParam?.replace(/"/g, '');

      const response = await axios.get(`http://localhost:5000/api/v1/movielistapp/findMovieByTitle?title=${cleanFoundParam}`)
      console.log("I'm the found data ", response.data);
      dispatch(addMovie(response.data))
      
    };

    fetchMovies();
  }, []);

  // useEffect(() => {
  //   if (movieId !== null) {
  //     setFoundMovie(fetchMovieById(movieId));
  //   }
  // }, [movieId]);

  return (
    <div className='mainContainer2'>
      <div className='bainedCinemaInSelectedMovie'>
        Bained makes it done easily with zero stress
      </div>

      <div className='listToBeDisplayedInSelectedPage'>
        {foundMovie && (
          <>
            <img src={foundMovie.movieImage} alt='' />
            <div className='otherMovieDetailsN'>
              <p>Genre : {foundMovie.genre}</p>
              <p>Title : {foundMovie.title}</p>
              <p>Id : {foundMovie._id.toString()}</p>
            </div>
          </>
        )}
      </div>

      <button className='btn'>Download Now</button>
      <br />
      <button className='prevBtn' onClick={() => navigate('/')}>
        Go to the previous page
      </button>
    </div>
  );
};
