import axios from "axios";
import { Base_Url } from "../../config/appConfig";
import { Movie } from "../../components/movieComponent/movieInterface";
import { getCookie } from "../../reusableComponents/handleRetrievedToken";

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
    console.log("I'm the response in the api. ", response);
    return response;
  } catch (error: any) {
    console.log(error.response.data.data);
    throw new Error(error.response.data.data);
  }
};

export default addMovie;
