import { LoginDetails } from "../../components/signInComponent/signInForm";
import axios from "axios";
import { Base_Url } from "../../config/appConfig";
import { ERROR_MESSAGE } from "../../reusableComponents/errorHandling";

const login = async (
  loginDetails: LoginDetails
): Promise<string | undefined> => {
  try {
    const response = await axios.post(
      `${Base_Url}/api/v1/movielistapp/login`,
      loginDetails
    );
    console.log(response.data);
    return response.data.data;
  } catch (error: any) {
    if (
      error &&
      error.response.data.status &&
      error.response.data.status === 400
    ) {
      throw new Error(error.response.data.data);
    } else {
      console.log(ERROR_MESSAGE.NETWORK_FAILED);
    }
  }
};

export default login;
