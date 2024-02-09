import axios from "axios";
import { Base_Url } from "../../config/appConfig";
import { Movie } from "../../components/movieComponent/movieInterface";
import { ERROR_MESSAGE } from "../../reusableComponents/errorHandling";

const fetchAllMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `${Base_Url}/api/v1/movielistapp/allMovie`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(ERROR_MESSAGE.ERROR_FETCHING);
  }
};

export default fetchAllMovies;
