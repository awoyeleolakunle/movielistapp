import { useNavigate } from "react-router-dom";

export const useMovieDetailsNavigation = () => {
  const navigate = useNavigate();
  const showSelectedMovieDetails = (movieTitle: string) => {
    navigate(
      `/selectedMoviePage?movieid=${encodeURIComponent(
        JSON.stringify(movieTitle)
      )}`
    );
  };
  return showSelectedMovieDetails;
};

// export const useFetchMovies = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const fetchMovies = async () => {
//     try {
//       const response = await axios.get(
//         `${Base_Url}/api/v1/movielistapp/allMovie`
//       );
//       const data = response.data.data;
//       dispatch(addListOfMovies(data));
//     } catch (error) {
//       console.log(ERROR_MESSAGE.ERROR_FETCHING);
//       navigate("/error");
//     }
//   };

//   return fetchMovies;
// };
