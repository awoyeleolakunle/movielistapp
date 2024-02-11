import axios from "axios";
import { Base_Url } from "../../config/appConfig";
import { Movie } from "../../components/movieComponent/movieInterface";
import { getCookie } from "../../reusableComponents/handleRetrievedToken";
import { FOUR_ZERO_ONE } from "../../constants";

const addMovie = async (newMovie: Movie): Promise<any> => {
  const adminToken: string | null = getCookie("movieListToken");
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

    return response;
  } catch (error: any) {
    console.log(error);
    if (error.response.status === FOUR_ZERO_ONE) {
      throw new Error(error.response.data.error.data);
    } else {
      throw new Error(error.response.data.data);
    }
  }
};

export default addMovie;
