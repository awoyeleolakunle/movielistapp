import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieList } from "./components/movieComponent/movieDisplayComponent/movies";
import { SelectedMovie } from "./components/selectedMovie";
import { AddAMovie } from "./components/movieComponent/addMovieComponents/addMovie";
import { RegisterUser } from "./components/registration";
import { Login } from "./components/signIn";
import MoviePage from "./pages/moviesDisplayPage/index";
import SelectedMoviePage from "./pages/selectedMoviePage/selectedMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/selectedMoviePage" element={<SelectedMoviePage />} />
          <Route path="/addMovie" element={<AddAMovie />} />
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
