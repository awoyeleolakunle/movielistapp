import axios from "axios";
import { Base_Url } from "../../config/appConfig";
import { Movie } from "../../components/movieComponent/movieInterface";
import { ERROR_MESSAGE } from "../../reusableComponents/errorHandling";

const fetchAMovie = async (cleanedFoundParam: string): Promise<Movie> => {
  try {
    const response = await axios.get(
      `${Base_Url}/api/v1/movielistapp/findMovieByTitle?title=${cleanedFoundParam}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE.ERROR_FETCHING);
  }
};

export default fetchAMovie;
