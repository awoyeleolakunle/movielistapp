import axios from "axios";
import { Base_Url } from "../../config/appConfig";
import { Movie } from "../../components/movieComponent/movieInterface";
import { handleRetrievedToken } from "../../reusableComponents/handleRetrievedToken";
import { useDispatch } from "react-redux";
import { addAMovie } from "../../store/actions";
import { rollBackMovie } from "../../store/actions";

const addMovie = async (newMovie: Movie) => {
  const adminToken: string | null = await handleRetrievedToken();
  console.log(newMovie);
  console.log(newMovie);
  const dispatch = useDispatch();

  try {
    const response = await axios.post(
      `${Base_Url}/api/v1/movielistapp/movieCreation`,
      newMovie,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: adminToken,
        },
      }
    );
    dispatch(addAMovie(newMovie));
    return response.data.data;
  } catch (error: any) {
    dispatch(rollBackMovie(newMovie));
    // if (error && error.response.status && error.response.status === 401) {
    //   toast.error(error.response.data.error.data);
    // } else {
    //   toast.error(error.response.data.data);
    // }
  }
};
