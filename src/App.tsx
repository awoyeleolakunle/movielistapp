
import './styles/App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieList } from './components/movies';
import  {SelectedMovie}  from './components/selectedMovie';
import { AddAMovie } from './components/addMovie';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/selectedMoviePage" element={<SelectedMovie />} />
          <Route path="/addMovie" element={<AddAMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

