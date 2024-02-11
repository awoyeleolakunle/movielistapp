import { ChangeEvent } from "react";
import axios from "axios";
import { cloudinary_Api } from "../config/appConfig";
import { ZERO } from "../constants";

const handleImageUpload = async (
  event: ChangeEvent<HTMLInputElement>
): Promise<string | null> => {
  try {
    const imageFile = event.target.files?.[ZERO];

    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "movielistapp");

      const response = await axios.post(cloudinary_Api, formData);

      return response.data.url;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default handleImageUpload;
