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
