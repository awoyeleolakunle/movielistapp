

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/selectedMoviePage.css';
import { useNavigate } from 'react-router-dom';



 export const SelectedMovie = ({ nav })=>{

    const [listOfMovies, setListOfMovies]= useState([]);
    const [foundMovie, setFoundMovie] = useState({})
    const [movieId, setMovieId] = useState(null);

    const navigate = useNavigate();
 



    const fetchMovieById= (movieId)=>{
        return listOfMovies.find(movie=>movie.id===movieId);
    }

    useEffect(()=>{
        const fetchMovies =async()=>{
            const response = await axios.get('/movies.json');
            console.log("I'm the found data ", response.data);
            setListOfMovies(response.data)
            const querryParam = new URLSearchParams(window.location.search);
            const foundParam = querryParam.get('movieid');
            if(foundParam){
                const decodedParam = parseInt(foundParam, 10);
                setMovieId(decodedParam);
            }
        };

        fetchMovies()
        
        

 
    }, [])


    useEffect(() => {

        if (movieId !== null) {
          setFoundMovie(fetchMovieById(movieId));
        }
      }, [movieId])




return(

    <div className='mainContainer2'>

    
        
    <div className='bainedCinemaInSelectedMovie'> Bained makes it done easily with zero stress</div>

        <div className='listToBeDisplayedInSelectedPage' >
            <img src={foundMovie.movieImage} alt="" />
            <div className='otherMovieDetailsN'>
                <p >Genre : {foundMovie.genre}</p>
                <p>Title : {foundMovie.title}</p>
                <p>Id : {foundMovie.id}</p>
            </div>
       
        </div>
   
        <button className='btn'>Download Now</button><br />
        <button className='prevBtn' onClick={()=>navigate("/")}>Go to previous page</button>
       
    </div>
  
)

 }