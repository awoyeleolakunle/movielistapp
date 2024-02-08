import axios from "axios";
import { Base_Url } from "../../config/appConfig";
import { Movie } from "../../components/movieComponent/addMovieComponents/addMovie";
import React from "react";

const fetchAllMovies = async (): Promise<Movie[]> => {
  try {
    console.log("i'm the function");
    const response = await axios.get(
      `${Base_Url}/api/v1/movielistapp/allMovie`
    );
    console.log("i'm the response", response);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies");
  }
};

export default fetchAllMovies;
